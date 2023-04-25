import {
    camelCase,
    forEach,
    isNumber,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_GRID,
    BEM_GRID_COLUMN,
    BEM_GRID_ROW,
    UI_CLASS_NAME,
} from '../../global/constants';
import {
    SPACINGS,
} from './gridConstants';
import GridColumn from './gridColumn';
import GridRowDeprecated from './gridRowDeprecated';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Defines the `align-content` style property.
     * It's applied for all screen sizes.
     */
    alignContent: PropTypes.oneOf([
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'stretch',
    ]),
    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     */
    alignItems: PropTypes.oneOf([
        'baseline',
        'center',
        'flex-end',
        'flex-start',
        'stretch',
    ]),
    /**
     * The content of the Grid
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.shape({}),
    /**
     * Assign additional class names to Grid.
     */
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     */
    direction: PropTypes.oneOf([
        'column-reverse',
        'column',
        'row-reverse',
        'row',
    ]),
    /**
     * The `id` of the Grid.
     */
    id: PropTypes.string,
    /**
     * Defines the `justify-content` style property.
     * It is applied for all screen sizes.
     */
    justifyContent: PropTypes.oneOf([
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'space-evenly',
    ]),
    /**
     * Makes the grid responsiveness interact with either broweser or parent container width.
     */
    responsiveQueryType: PropTypes.oneOf(['media', 'container']),
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: PropTypes.oneOf(SPACINGS),
    /**
     * Override styles applied to the component.
     */
    style: PropTypes.shape({}),
    /**
     * Defines the `flex-wrap` style property.
     * It's applied for all screen sizes.
     */
    wrap: PropTypes.oneOf([
        'nowrap',
        'wrap-reverse',
        'wrap',
    ]),
    // ****
    // NOTE: All props below are deprecated and should not be used.
    // ****
    /**
     * Deprecated prop. Please use breakpoint props on the Grid.Column
     */
    columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
};

const defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    children: null,
    classes: null,
    className: null,
    dataTestId: `${UI_CLASS_NAME}-${BEM_GRID}`,
    direction: 'row',
    id: null,
    justifyContent: 'flex-start',
    responsiveQueryType: 'media',
    spacing: 0,
    style: null,
    wrap: 'wrap',
    // ****
    // NOTE: All props below are deprecated and should not be used.
    // ****
    columns: undefined,
    textAlign: undefined,
    verticalAlign: undefined,
};

const useStyles = makeStyles(({ spacing }) => {
    function getOffset(val, div = 1) {
        const parse = parseFloat(val);

        return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`;
    }

    const gutters = {};

    // eslint-disable-next-line consistent-return
    forEach(SPACINGS, (value) => {
        const themeSpacing = spacing(value);

        if (themeSpacing === 0) {
            return null;
        }

        gutters[`spacing-${value}`] = {
            margin: `-${getOffset(themeSpacing, 2)}`,
            width: `calc(100% + ${getOffset(themeSpacing)})`,
            [`& > .${BEM_GRID_COLUMN}`]: {
                padding: getOffset(themeSpacing, 2),
            },
            /**
             * Note: Remove once Grid.RowDeprecated has been removed.
             */
            [`& > .${BEM_GRID_ROW} > .${BEM_GRID_COLUMN}`]: {
                padding: getOffset(themeSpacing, 2),
            },
        };
    });

    return {
        root: {
            containerType: ({ responsiveQueryType }) => (responsiveQueryType === 'container' ?
                'inline-size' :
                'unset'
            ),
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            /**
             * Deprecated classses
             */
            '&$deprecatedTextAlignCenter': {
                textAlign: 'center',
            },
            '&$deprecatedTextAlignLeft': {
                textAlign: 'left',
            },
            '&$deprecatedTextAlignRight': {
                textAlign: 'right',
            },
            '&$deprecatedVerticalAlignBottom': {
                alignItems: 'flex-end',
            },
            '&$deprecatedVerticalAlignMiddle': {
                alignItems: 'center',
            },
            '&$deprecatedVerticalAlignTop': {
                alignItems: 'flex-start',
            },
            /**
             * End of deprecated classes
             */
        },
        'alignContent-center': {
            alignContent: 'center',
        },
        'alignContent-flexStart': {
            alignContent: 'flex-start',
        },
        'alignContent-flexEnd': {
            alignContent: 'flex-end',
        },
        'alignContent-spaceBetween': {
            alignContent: 'space-between',
        },
        'alignContent-spaceAround': {
            alignContent: 'space-around',
        },
        'alignItems-center': {
            alignItems: 'center',
        },
        'alignItems-flexStart': {
            alignItems: 'flex-start',
        },
        'alignItems-flexEnd': {
            alignItems: 'flex-end',
        },
        'alignItems-baseline': {
            alignItems: 'baseline',
        },
        /**
         * Deprecated classses
         */
        deprecatedColumns: {
            [`& > .${BEM_GRID_COLUMN}, & > .${BEM_GRID_ROW} > .${BEM_GRID_COLUMN}`]: {
                width: ({ columns }) => `${(1 / columns) * 100}%`,
            },
        },
        deprecatedTextAlignCenter: {},
        deprecatedTextAlignLeft: {},
        deprecatedTextAlignRight: {},
        deprecatedVerticalAlignBottom: {},
        deprecatedVerticalAlignMiddle: {},
        deprecatedVerticalAlignTop: {},
        /**
         * End of deprecated classses
         */
        'direction-column': {
            flexDirection: 'column',
        },
        'direction-columnReverse': {
            flexDirection: 'column-reverse',
        },
        'direction-rowReverse': {
            flexDirection: 'row-reverse',
        },
        'justifyContent-center': {
            justifyContent: 'center',
        },
        'justifyContent-flexEnd': {
            justifyContent: 'flex-end',
        },
        'justifyContent-spaceBetween': {
            justifyContent: 'space-between',
        },
        'justifyContent-spaceAround': {
            justifyContent: 'space-around',
        },
        'justifyContent-spaceEvenly': {
            justifyContent: 'space-evenly',
        },
        'wrap-nowrap': {
            flexWrap: 'nowrap',
        },
        'wrap-wrapReverse': {
            flexWrap: 'wrap-reverse',
        },
        ...gutters,
    };
});

/**
 * The Grid layout responsivly adapts to screen size, aiding in dividing
 * up content into their own regions.
 */
const Grid = React.forwardRef(
    // eslint-disable-next-line prefer-arrow-callback
    function Grid(props, ref) {
        const {
            alignContent,
            alignItems,
            children,
            className,
            dataTestId,
            id,
            direction,
            justifyContent,
            responsiveQueryType,
            spacing,
            style,
            wrap,
            ...otherProps
        } = props;

        const classes = useStyles(props);

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_GRID,
            classes.root,
            className,
            {
                [classes[`alignContent-${camelCase(alignContent)}`]]: alignContent !== 'stretch',
                [classes[`alignItems-${camelCase(alignItems)}`]]: alignItems !== 'stretch',
                [classes[`direction-${camelCase(direction)}`]]: direction !== 'row',
                [classes[`justifyContent-${camelCase(justifyContent)}`]]: justifyContent !== 'flex-start',
                [classes[`spacing-${String(spacing)}`]]: spacing !== 0,
                [classes[`wrap-${camelCase(wrap)}`]]: wrap !== 'wrap',
                /**
                 * Deprecated classses
                 */
                [classes.deprecatedColumns]: isNumber(otherProps.columns),
                [classes.deprecatedTextAlignCenter]: otherProps.textAlign === 'center',
                [classes.deprecatedTextAlignLeft]: otherProps.textAlign === 'left',
                [classes.deprecatedTextAlignRight]: otherProps.textAlign === 'right',
                [classes.deprecatedVerticalAlignBottom]: otherProps.verticalAlign === 'bottom',
                [classes.deprecatedVerticalAlignMiddle]: otherProps.verticalAlign === 'middle',
                [classes.deprecatedVerticalAlignTop]: otherProps.verticalAlign === 'top',
            },
        );

        const gridColumns = responsiveQueryType === 'container' ?
            React.Children.map( // <GridColumn />'s with @container queries enabled
                (child) => ({
                    ...child,
                    props: {
                        ...child.props,
                        responsiveQueryType: 'container',
                    },
                }),
            ) :
            children;

        return (
            <div
                className={rootClasses}
                data-testid={dataTestId}
                id={id}
                ref={ref}
                style={style}
            >
                {gridColumns}
            </div>
        );
    },
);

Grid.Column = GridColumn;
Grid.RowDeprecated = GridRowDeprecated;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
