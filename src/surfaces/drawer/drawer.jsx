import _, {
    isFunction,
} from 'lodash';
import { Portal } from 'react-portal';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import domUtils from '../../utils/domUtils';
import DrawerActionBar from './drawerActionBar'; // eslint-disable-line import/no-cycle
import DrawerContainer from './drawerContainer';
import DrawerContent from './drawerContent';
import DrawerDataCards from './drawerDataCards';
import DrawerDataGrid from './drawerDataGrid';
import DrawerDataGroups from './drawerDataGroups';
import DrawerDeprecatedFiltersDrawer from '../drawerDeprecated/drawerDeprecatedFiltersDrawer'; // eslint-disable-line import/no-cycle
import DrawerDetailsWindow from './drawerDetailsWindow';
import DrawerFiltersDrawer from './drawerFiltersDrawer'; // eslint-disable-line import/no-cycle
import DrawerFiltersRail from './drawerFiltersRail'; // eslint-disable-line import/no-cycle
import DrawerNavigation from './drawerNavigation';
import DrawerTitleBar from './drawerTitleBar';
import DrawerWing from './drawerWing';
import withStyles from '../../styles/withStyles';

const propTypes = {
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to Drawer.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    dimmer: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    isModal: PropTypes.bool,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClose: PropTypes.func,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    positionX: PropTypes.oneOf(['left', 'right']),
    positionY: PropTypes.oneOf(['bottom', 'top']),
    positionYOffset: PropTypes.number,
    shadowSize: PropTypes.oneOf(['large', 'small', 'xsmall']),
    shouldCloseOnClickOutside: PropTypes.bool,
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            drawer: PropTypes.number,
        }),
    }),
    wing: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer`,
    dimmer: true,
    isModal: true,
    maxHeight: undefined,
    maxWidth: undefined,
    shouldCloseOnClickOutside: false,
    onClose: undefined,
    onCloseComplete: undefined,
    onOpenComplete: undefined,
    positionX: 'right',
    positionY: undefined,
    positionYOffset: undefined,
    shadowSize: undefined,
    style: {},
    theme: null,
    wing: undefined,
};

const BODY = document.body;
const TRANSLATE_X_END = 'translate3d(0, 0, 0)';
const TRANSLATE_X_LEFT_START = 'translate3d(-100%, 0, 0)';
const TRANSLATE_X_RIGHT_START = 'translate3d(100%, 0, 0)';
const BOX_SHADOW_XSMALL = '0 0 3px 0 rgba(0, 0, 0, 0.30)';
const BOX_SHADOW_SMALL = '2px 0 7px 0 rgba(0, 0, 0, 0.17)';
const BOX_SHADOW_LARGE = '12px 0 19px 0 rgba(0, 0, 0, .22)';
const DEFAULT_DRAWER_WIDTH = 768;

function toggleBodyStyle(isOpen) {
    const { scrollY } = window;
    const bodyStyleTop = BODY.style.top;

    BODY.style.height = isOpen ? '100%' : '';
    BODY.style.position = isOpen ? 'fixed' : '';
    BODY.style.top = isOpen ? `-${scrollY}px` : '';
    BODY.style.width = isOpen ? '100%' : '';

    if (!isOpen) {
        BODY.classList.remove('drawer-open');

        // eslint-disable-next-line radix
        window.scrollTo(0, parseInt(bodyStyleTop || '0') * -1);
    } else {
        BODY.classList.add('drawer-open');
    }
}

const styles = (theme) => ({
    root: {
        backfaceVisibility: 'hidden',
        height: '100%',
        left: 0,
        minWidth: 320,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: theme.zIndex.drawer,
    },
});

class Drawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen, // We put props.isOpen into state because when closing a drawer we return false in render before the closing animation is complete.
        };

        this.useComponentWillUnmount = false;

        this.onClickOutside = this.onClickOutside.bind(this);
        this.onCloseAnimationComplete = this.onCloseAnimationComplete.bind(this);
        this.onOpenAnimationComplete = this.onOpenAnimationComplete.bind(this);
    }

    componentDidMount() {
        const { isOpen } = this.props;

        if (isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }
    }

    componentDidUpdate(prevProps) {
        const { props: nextProps } = this;

        if (!prevProps.isOpen && nextProps.isOpen) {
            this.setState({
                isOpen: nextProps.isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevProps.isOpen && !nextProps.isOpen) {
            this.onBeforeClose();
        }

        if (
            prevProps.isOpen &&
            nextProps.isOpen &&
            prevProps.positionYOffset !== nextProps.positionYOffset
        ) {
            this.drawerContainerRef.style.transform = _.isNumber(nextProps.positionYOffset) ?
                `${TRANSLATE_X_END} translateY(${nextProps.positionYOffset}px)` :
                TRANSLATE_X_END;
        }

        if (
            prevProps.isOpen &&
            nextProps.isOpen &&
            prevProps.maxWidth !== nextProps.maxWidth
        ) {
            this.drawerContainerRef.style.maxWidth = _.isNumber(nextProps.maxWidth) ? `${nextProps.maxWidth}px` :
                nextProps.maxWidth || `${DEFAULT_DRAWER_WIDTH}px`;
        }

        if (
            prevProps.isOpen &&
            nextProps.isOpen &&
            prevProps.maxHeight !== nextProps.maxHeight
        ) {
            this.drawerContainerRef.style.maxHeight = nextProps.maxHeight ? `${nextProps.maxHeight}px` : 'none';
        }
    }

    componentWillUnmount() {
        const { isOpen } = this.state;

        /**
         * We only want to clean up classes here if the drawer isOpen and the
         * closing animation never happens.
         */
        if (isOpen && this.useComponentWillUnmount) {
            toggleBodyStyle(false);

            if (BODY.classList.contains('drawer-nubbin-open')) {
                BODY.classList.remove('drawer-nubbin-open');
            }

            if (BODY.classList.contains('drawer-dimmers')) {
                BODY.classList.remove('drawer-dimmers');
            }

            if (BODY.classList.contains('drawer-open-layered')) {
                BODY.classList.remove('drawer-open-layered');
            }

            if (BODY.classList.contains('drawer-animate-out')) {
                BODY.classList.remove('drawer-animate-out');
            }
        }
    }

    onBeforeClose() {
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);

        BODY.classList.add('drawer-animate-out');

        this.drawerContainerRef.classList.add('drawer-animate-out');
        this.drawerContainerRef.style.transform = this.setStartOfTransform();
        this.drawerContainerRef.addEventListener(animationEvent, this.onCloseAnimationComplete);
    }

    onClickOutside(event) {
        const {
            shouldCloseOnClickOutside,
        } = this.props;

        if (this.drawerContainerRef.contains(event.target) || !shouldCloseOnClickOutside) {
            return;
        }

        this.onClose();
    }

    onClose() {
        const { shouldCloseOnClickOutside, onClose } = this.props;

        if (shouldCloseOnClickOutside) {
            document.removeEventListener('click', this.onClickOutside);
        }

        if (isFunction(onClose)) {
            // eslint-disable-next-line prefer-rest-params
            onClose(...arguments);
        } else {
            console.warn('Drawer\'s onClose prop is required when using the prop shouldCloseOnClickOutside');
        }
    }

    onCloseAnimationComplete() {
        const { onCloseComplete, shouldCloseOnClickOutside } = this.props;
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        const numberOfModalDrawers = document.querySelectorAll('.ui.drawer-is_modal').length;

        if (shouldCloseOnClickOutside) {
            document.removeEventListener('click', this.onClickOutside);
        }

        this.drawerContainerRef.removeEventListener(animationEvent, this.onCloseAnimationComplete);

        if (numberOfModalDrawers <= 2) {
            BODY.classList.remove('drawer-open-layered');
        }

        if (numberOfModalDrawers <= 1 || (numberOfModalDrawers > 1 && BODY.classList.contains('drawer-nubbin-open'))) {
            const isOpen = false;

            toggleBodyStyle(isOpen);

            if (BODY.classList.contains('drawer-dimmers')) {
                BODY.classList.remove('drawer-dimmers');
            }
        }

        if (numberOfModalDrawers <= 1 && BODY.classList.contains('drawer-nubbin-open')) {
            BODY.classList.remove('drawer-nubbin-open');
        }

        BODY.classList.remove('drawer-animate-out');

        this.drawerContainerRef.style.transform = this.setStartOfTransform();

        this.useComponentWillUnmount = false;

        this.setState({
            isOpen: false,
        }, () => {
            if (isFunction(onCloseComplete)) {
                onCloseComplete(true);
            }
        });
    }

    onOpen() {
        const {
            dimmer,
            isModal,
            maxWidth,
            maxHeight,
            positionYOffset,
            positionY,
            shadowSize,
            theme,
        } = this.props;

        this.useComponentWillUnmount = true;
        this.setStartOfTransform();

        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        const boxShadowPositionX = this.isPositionX('right') ? '-' : '';
        const numberOfModalDrawers = document.querySelectorAll('.ui.drawer-is_modal').length;
        const layeredOffset = 11;

        const zIndex = theme.zIndex.drawer + 2; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        this.drawerContainerRef.addEventListener(animationEvent, this.onOpenAnimationComplete);

        if (!dimmer || !isModal || numberOfModalDrawers >= 2) {
            this.drawerRef.style.pointerEvents = 'none';
            this.drawerContainerRef.style.pointerEvents = 'auto';
            this.drawerDimmerRef.style.display = 'none';
        }

        setTimeout(() => {
            if (
                this.shadowContainerRef &&
                this.shadowRef &&
                this.drawerRef &&
                this.drawerContainerRef
            ) {
                if (this.isPositionX('left')) {
                    this.shadowContainerRef.style.right = '-30px';
                    this.shadowRef.style.marginRight = '30px';
                } else {
                    this.shadowContainerRef.style.left = '-30px';
                    this.shadowRef.style.marginLeft = '30px';
                }

                if (numberOfModalDrawers >= 2) {
                    const newZIndex = zIndex + numberOfModalDrawers;

                    let boxShadow = BOX_SHADOW_SMALL;

                    switch (shadowSize) {
                        case 'large':
                            boxShadow = BOX_SHADOW_LARGE;

                            break;
                        case 'xsmall':
                            boxShadow = BOX_SHADOW_XSMALL;

                            break;

                        default:
                    }

                    domUtils.addClassName(BODY, 'drawer-open-layered');

                    this.drawerRef.style.zIndex = newZIndex;
                    this.shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                    this.drawerContainerRef.style.zIndex = newZIndex;
                } else {
                    let boxShadow = BOX_SHADOW_LARGE;

                    switch (shadowSize) {
                        case 'small':
                            boxShadow = BOX_SHADOW_SMALL;

                            break;
                        case 'xsmall':
                            boxShadow = BOX_SHADOW_XSMALL;

                            break;

                        default:
                    }

                    if (!positionY && !maxHeight) {
                        const isOpen = true;

                        toggleBodyStyle(isOpen);
                    } else {
                        BODY.classList.add('drawer-nubbin-open');
                    }

                    this.shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                    this.drawerRef.style.zIndex = zIndex - 1;
                    this.drawerContainerRef.style.zIndex = zIndex + numberOfModalDrawers;
                }

                if (!_.isUndefined(maxWidth)) {
                    this.drawerContainerRef.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` :
                        maxWidth || `${DEFAULT_DRAWER_WIDTH}px`;
                } else {
                    this.drawerContainerRef.style.maxWidth =
                        `${DEFAULT_DRAWER_WIDTH - (layeredOffset * (numberOfModalDrawers - 1))}px`;
                }

                if (!_.isUndefined(maxHeight)) {
                    this.drawerContainerRef.style.maxHeight = `${maxHeight}px`;
                }

                this.drawerContainerRef.style.transform = _.isNumber(positionYOffset) ?
                    `${TRANSLATE_X_END} translateY(${positionYOffset}px)` :
                    TRANSLATE_X_END;
            }
        }, 30);
    }

    onOpenAnimationComplete() {
        const {
            dimmer,
            isModal,
            shouldCloseOnClickOutside,
        } = this.props;

        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        this.drawerContainerRef.removeEventListener(animationEvent, this.onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }

        if (dimmer && isModal) {
            BODY.classList.add('drawer-dimmers');
        }

        if (shouldCloseOnClickOutside) {
            document.addEventListener('click', this.onClickOutside);
        }
    }

    setStartOfTransform() {
        const { positionYOffset } = this.props;
        const translateX = this.isPositionX('left') ? TRANSLATE_X_LEFT_START : TRANSLATE_X_RIGHT_START;

        this.drawerContainerRef.style.transform = _.isNumber(positionYOffset) ?
            `${translateX} translateY(${positionYOffset}px)` :
            translateX;
    }

    isPositionX(position) {
        const { positionX } = this.props;

        return positionX === position;
    }

    isPositionY(position) {
        const { positionY } = this.props;

        return positionY === position;
    }

    render() {
        const {
            children,
            classes,
            className,
            dataTestId,
            isModal,
            positionYOffset,
            style,
            wing,
        } = this.props;

        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const rootClasses = ClassNames(
            'ui',
            'drawer',
            classes.root,
            className,
            {
                'left-position': this.isPositionX('left'),
                'top-position': this.isPositionY('top'),
                'bottom-position': this.isPositionY('bottom'),
                'drawer-is_modal': isModal,
            },
        );

        return (
            <Portal>
                <div
                    className={rootClasses}
                    data-testid={dataTestId}
                    ref={(ref) => { this.drawerRef = ref; }}
                >
                    <div
                        className="drawer-container"
                        data-testid={`${UI_CLASS_NAME}-drawer_container`}
                        ref={(ref) => { this.drawerContainerRef = ref; }}
                        style={{
                            height: _.isNumber(positionYOffset) ? `calc(100% - ${positionYOffset}px)` : null,
                            ...style,
                        }}
                    >
                        <ScrollBar
                            autoHide
                        >
                            <div className="drawer-container-inner">
                                {children}
                            </div>
                        </ScrollBar>

                        {wing}

                        <div
                            className="shadow_container"
                            data-testid={`${dataTestId}_shadow_container`}
                            ref={(ref) => { this.shadowContainerRef = ref; }}
                        >
                            <div ref={(ref) => { this.shadowRef = ref; }} />
                        </div>
                    </div>

                    <div
                        className="drawer-dimmer"
                        data-testid={`${dataTestId}_dimmer`}
                        ref={(ref) => { this.drawerDimmerRef = ref; }}
                    />
                </div>
            </Portal>
        );
    }
}

Drawer.ActionBar = DrawerActionBar;
Drawer.Container = DrawerContainer;
Drawer.Content = DrawerContent;
Drawer.DataCards = DrawerDataCards;
Drawer.DataGrid = DrawerDataGrid;
Drawer.DataGroups = DrawerDataGroups;
Drawer.DeprecatedFiltersDrawer = DrawerDeprecatedFiltersDrawer;
Drawer.Details = DrawerDetailsWindow; // TODO: Deprecated. Alias name for Drawer.DetailsWindow. Remove in a major release.
Drawer.DetailsWindow = DrawerDetailsWindow;
Drawer.FiltersDrawer = DrawerFiltersDrawer;
Drawer.FiltersRail = DrawerFiltersRail;
Drawer.Grid = DrawerDataCards; // TODO: Deprecated. Alias name for Drawer.DataGrid. Remove in a major release.
Drawer.Navigation = DrawerNavigation;
Drawer.Table = DrawerDataGrid; // TODO: Deprecated. Alias name for Drawer.DataGrid. Remove in a major release.
Drawer.TitleBar = DrawerTitleBar;
Drawer.Wing = DrawerWing;

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Drawer);
