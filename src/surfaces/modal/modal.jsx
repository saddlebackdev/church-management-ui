import {
    isFunction,
    isNumber,
    isString,
    isUndefined,
} from 'lodash';
import { Portal } from 'react-portal';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import {
    BEM_MODAL_DIMMER,
    BEM_MODAL_INNER_CONTAINER,
    BEM_MODAL,
    UI_CLASS_NAME,
} from '../../global/constants';
import Button from '../../inputs/button';
import domUtils from '../../utils/domUtils';
import Icon from '../../dataDisplay/icon';
import ModalActions from './modalActions';
import ModalContent from './modalContent';
import withStyles from '../../styles/withStyles';

const propTypes = {
    /**
     * If `true`, Modal's height will adjust to the content.
     */
    autoHeight: PropTypes.bool,
    /**
     * The content of the Modal
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to Modal.
     */
    classes: PropTypes.shape({
        closeButton: PropTypes.string,
        dimmer: PropTypes.string,
        innerContainerClasses: PropTypes.string,
        padding: PropTypes.string,
        root: PropTypes.string,
        scrollContainer: PropTypes.string,
    }),
    /**
     * Assign additional class names to Modal.
     */
    className: PropTypes.string,
    /**
     * Add a `data-testid` attribute to the Modal's Close Button.
     * Used for DOM Testing.
     * See https://testing-library.com/docs/queries/bytestid/.
     */
    closeButtonDataTestId: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    /**
     * The `height` of the Modal.
     */
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * The `id` of the Modal.
     */
    id: PropTypes.string,
    /**
     * If `true`, Modal is open.
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * The `maxHeight` of the Modal.
     */
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * The `maxWidth` of the Modal.
     */
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * The `minHeight` of the Modal.
     */
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * The `minWidth` of the Modal.
     */
    minWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * Boolean indicating whether or not the Modal can be closed when the user clicks outside of it.
     */
    onClickOutside: PropTypes.bool,
    /**
     * Event handler for closing the Modal.
     * Only used when Modal needs a close button in the top right.
     */
    onClose: PropTypes.func,
    /**
     * Event handler called after close animation has completed.
     */
    onCloseComplete: PropTypes.func,
    /**
     * Event handler called after open animation has completed.
     */
    onOpenComplete: PropTypes.func,
    /**
     * HC's theme.
     */
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            modal: PropTypes.number,
        }),
    }).isRequired,
    /**
     * The `width` of the Modal.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    autoHeight: true,
    children: null,
    classes: null,
    className: null,
    dataTestId: `${UI_CLASS_NAME}-modal`,
    /**
     * If autoHeight is false the Inner Container's height needs to have a pixel value
     * for the scroll container to work appropriately, otherwise content inside is hidden.
     */
    height: null,
    id: null,
    maxHeight: '100%',
    maxWidth: 'none',
    minHeight: null,
    minWidth: '375px',
    onClickOutside: false,
    onClose: null,
    onCloseComplete: undefined,
    onOpenComplete: undefined,
    width: null,
};

const MODAL_ANIMATION_OUT_CLASS_NAME = `${BEM_MODAL}-animation_out`;

const styles = ({
    breakpoints,
    palette,
    shape,
    spacing,
    zIndex,
}) => ({
    '@keyframes modalDimmerFadeIn': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },
    '@keyframes modalDimmerFadeOut': {
        '0%': {
            opacity: 1,
        },
        '100%': {
            opacity: 0,
        },
    },
    '@keyframes modalSlideIn': {
        '0%': {
            opacity: 0,
            transform: 'translateY(-44px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    '@keyframes modalSlideOut': {
        '0%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
        '100%': {
            opacity: 0,
            transform: 'translateY(-44px)',
        },
    },
    closeButton: {
        borderRadius: spacing(1.5),
        margin: 0,
        position: 'absolute',
        right: spacing(1),
        top: spacing(1),
        zIndex: 1,
        [breakpoints.up('md')]: {
            right: -spacing(1.5),
            top: -spacing(1.5),
        },
    },
    dimmer: {
        animation: '$modalDimmerFadeIn 150ms ease-out forwards',
        animationDelay: '100ms',
        backfaceVisibility: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        height: '100%',
        left: 0,
        opacity: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: `${zIndex.drawer + 2}`,
    },
    innerContainerClasses: {
        animation: '$modalSlideIn 200ms ease-out forwards',
        backfaceVisibility: 'hidden',
        backgroundColor: palette.background.primary,
        borderRadius: shape.borderRadius,
        boxShadow: '0 15px 28px 0 rgba(0, 0, 0, 0.13)',
        position: 'relative',
    },
    padding: {},
    root: {
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        minWidth: 320,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: zIndex.drawer,
        [breakpoints.up('md')]: {
            padding: spacing(3),
        },
        [`&.${MODAL_ANIMATION_OUT_CLASS_NAME}`]: {
            [`& .${BEM_MODAL_INNER_CONTAINER}`]: {
                animation: '$modalSlideOut 333ms forwards',
            },
            [`& ${BEM_MODAL_DIMMER}`]: {
                animation: '$modalDimmerFadeOut 150ms ease-out forwards',
            },
        },
    },
    scrollContainer: {
        padding: [[spacing(5), spacing(2), spacing(2)]],
        position: 'relative',
        [breakpoints.up('md')]: {
            padding: spacing(3),
        },
    },
});

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.getDimensions(),
            isOpen: props.isOpen,
        };

        this.mounted = false;
        this.modalContainerNode = null;

        this.getAutoHeightMax = this.getAutoHeightMax.bind(this);
        this.onClickOutside = this.onClickOutside.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onCloseAnimationComplete = this.onCloseAnimationComplete.bind(this);
        this.onCloseBefore = this.onCloseBefore.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onOpenAnimationComplete = this.onOpenAnimationComplete.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
        const { isOpen } = this.props;
        this.mounted = true;

        window.addEventListener('resize', this.onResize);

        this.onResize();

        if (isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }
    }

    componentDidUpdate(prevProps) {
        const {
            height,
            isOpen,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
        } = this.props;

        if (!prevProps.isOpen && isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevProps.isOpen && !isOpen) {
            this.onCloseBefore();
        }

        if (
            prevProps.height !== height ||
            prevProps.maxHeight !== maxHeight ||
            prevProps.maxWidth !== maxWidth ||
            prevProps.minHeight !== minHeight ||
            prevProps.minWidth !== minWidth ||
            prevProps.width !== width
        ) {
            this.setState(this.getDimensions());
        }
    }

    componentWillUnmount() {
        this.mounted = false;

        window.removeEventListener('resize', this.onResize);
    }

    onClickOutside(event) {
        const {
            onClickOutside,
            onClose,
            isOpen,
        } = this.props;

        if (!isOpen || this.modalContainerRef.contains(event.target) || !onClickOutside) {
            return;
        }

        if (isFunction(onClose)) {
            this.onClose();
        }
    }

    onClose() {
        const {
            onClickOutside,
            onClose,
        } = this.props;

        if (onClickOutside) {
            document.removeEventListener('click', this.onClickOutside);
        }

        if (isFunction(onClose)) {
            onClose();
        }
    }

    onCloseAnimationComplete() {
        const animationEvent = domUtils.cssAnimationType(this.modalContainerRef);
        this.modalContainerRef.removeEventListener(animationEvent, this.onCloseAnimationComplete);

        this.toggleBodyStyle({ enable: false });

        this.setState({
            isOpen: false,
        }, () => {
            const { onCloseComplete } = this.props;

            if (isFunction(onCloseComplete)) {
                onCloseComplete();
            }
        });
    }

    onCloseBefore() {
        // eslint-disable-next-line react/no-find-dom-node
        const portalNode = ReactDOM.findDOMNode(this);
        const modalContainer = portalNode.querySelector(`.${BEM_MODAL_INNER_CONTAINER}`);
        const animationEvent = domUtils.cssAnimationType(modalContainer);

        portalNode.classList.add(MODAL_ANIMATION_OUT_CLASS_NAME);

        this.modalContainerNode.addEventListener(animationEvent, this.onCloseAnimationComplete);
    }

    onOpen() {
        const {
            autoHeight,
            onClickOutside,
            maxWidth,
            theme,
        } = this.props;

        // eslint-disable-next-line react/no-find-dom-node
        const portalNode = ReactDOM.findDOMNode(this);

        this.modalContainerNode = portalNode.querySelector(`.${BEM_MODAL_INNER_CONTAINER}`);

        const modalLength = document.querySelectorAll(`.${UI_CLASS_NAME}.${BEM_MODAL}`).length;
        const animationEvent = domUtils.cssAnimationType(this.modalContainerNode);

        this.modalContainerNode.addEventListener(animationEvent, this.onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this.onClickOutside);
        }

        let newZIndex = theme.zIndex.modal + 2; // adding 2 accounts for the first .modal and .modal-dimmers- z-indexes

        if (modalLength >= 2) {
            newZIndex += modalLength;

            portalNode.style.zIndex = newZIndex;

            this.modalContainerNode.style.zIndex = newZIndex;

            portalNode.querySelector(`.${BEM_MODAL_DIMMER}`).style.display = 'none';
        } else {
            this.toggleBodyStyle({ enable: true });

            portalNode.style.zIndex = newZIndex - 1;

            this.modalContainerNode.style.zIndex = newZIndex + modalLength;
        }

        if (!isUndefined(maxWidth)) {
            if (isNumber(maxWidth)) {
                this.modalContainerNode.style.maxWidth = `${maxWidth}px`;
            } else if (isString(maxWidth)) {
                this.modalContainerNode.style.maxWidth = maxWidth;
            } else {
                this.modalContainerNode.style.maxWidth = null;
            }
        } else {
            this.modalContainerNode.style.maxWidth = '768px';
        }

        if (autoHeight) {
            const newAutoHeightMax = this.getAutoHeightMax();

            this.setState({
                autoHeightMax: newAutoHeightMax,
            });
        }
    }

    onOpenAnimationComplete() {
        const animationEvent = domUtils.cssAnimationType(this.modalContainerRef);
        this.modalContainerNode.removeEventListener(animationEvent, this.onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }
    }

    onResize() {
        if (this.mounted) {
            this.setState(this.getDimensions());
        }
    }

    getDimensions() {
        const {
            autoHeight,
            height,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
        } = this.props;

        let dimensions = {
            height: '100%',
            maxHeight: '100%',
            maxWidth: 'none',
            minHeight: 'auto',
            minWidth: '375px',
            width: '100%',
        };

        if (window.matchMedia('(min-width: 768px)').matches === true) {
            dimensions = {
                height,
                maxHeight,
                maxWidth,
                minHeight,
                minWidth,
                width,
            };
        }

        if (autoHeight) {
            const newAutoHeightMax = this.getAutoHeightMax();

            dimensions = {
                ...dimensions,
                autoHeightMax: newAutoHeightMax,
            };
        }

        return dimensions;
    }

    getAutoHeightMax() {
        const {
            isOpen,
        } = this.props;

        if (this.mounted && isOpen) {
            // eslint-disable-next-line react/no-find-dom-node
            const portalNode = ReactDOM.findDOMNode(this);

            if (portalNode) {
                const modalPaddingBottom = parseInt(getComputedStyle(portalNode).paddingBottom, 10);
                const modalPaddingTop = parseInt(getComputedStyle(portalNode).paddingTop, 10);
                const modalHeight = portalNode.offsetHeight;

                return modalHeight - modalPaddingBottom - modalPaddingTop;
            }
        }

        return null;
    }

    toggleBodyStyle({ enable } = { enable: false }) {
        if (enable) {
            const { pageYOffset } = window;

            document.body.style.overflowY = 'scroll';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${pageYOffset}px`;
            document.body.style.width = '100%';
        } else {
            const topPosition = parseInt(document.body.style.top, 10);

            document.body.style.overflowY = null;
            document.body.style.position = null;
            document.body.style.top = null;
            document.body.style.width = null;

            window.scroll(0, Math.abs(topPosition));
        }
    }

    render() {
        const {
            autoHeight,
            children,
            classes,
            className,
            closeButtonDataTestId,
            dataTestId,
            id,
            onClose: onCloseProp,
        } = this.props;

        const {
            autoHeightMax,
            height,
            isOpen,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
        } = this.state;

        if (!isOpen) {
            return null;
        }

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_MODAL,
            classes.root,
            className,
        );

        const containerInnerStyles = {
            height,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
        };

        return (
            <Portal>
                <div
                    className={rootClasses}
                    data-testid={dataTestId}
                    id={id}
                >
                    <div
                        className={ClassNames(
                            BEM_MODAL_INNER_CONTAINER,
                            classes.innerContainerClasses,
                        )}
                        ref={(ref) => { this.modalContainerRef = ref; }}
                        style={containerInnerStyles}
                    >
                        {isFunction(onCloseProp) && (
                            <Button
                                className={`${BEM_MODAL}--close_button`}
                                classes={{
                                    root: classes.closeButton,
                                }}
                                data-testid={closeButtonDataTestId}
                                designVersion={2}
                                onClick={this.onClose}
                                icon
                                title="Close"
                            >
                                <Icon
                                    compact
                                    title={false}
                                    type="close"
                                />
                            </Button>
                        )}

                        <ScrollBar
                            autoHeight={autoHeight}
                            autoHeightMax={autoHeightMax || null}
                            autoHide
                            onScrollStart={this.onScrollStart}
                            onScrollStop={this.onScrollStop}
                        >
                            <div
                                className={ClassNames(
                                    classes.scrollContainer,
                                    classes.padding,
                                )}
                                ref={(ref) => { this.modalScrollContainerRef = ref; }}
                            >
                                {children}
                            </div>
                        </ScrollBar>
                    </div>

                    <div
                        className={ClassNames(
                            BEM_MODAL_DIMMER,
                            classes.dimmer,
                        )}
                        data-testid={`${dataTestId}_dimmer`}
                    />
                </div>
            </Portal>
        );
    }
}

Modal.Actions = ModalActions;
Modal.Content = ModalContent;

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Modal);
