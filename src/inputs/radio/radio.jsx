import {
    clone,
    includes,
    isArray,
    isFunction,
    noop,
    remove,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { RadioScreenGuard } from '../greyScreenGuard';
import KeyCode from '../../global/keyCode';
import RadioItem from './radioItem';
import withStyles from '../../styles/withStyles';

const propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    /**
     * Forces the Radio component to always show the required indicator
     * next to the label. The default behavior (if this prop is omitted or false) is for
     * the required field indicator to disappear once the Radio is checked.
     */
    alwaysShowRequiredIndicator: PropTypes.bool,
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    children: PropTypes.node,
    classes: PropTypes.shape({
        input: PropTypes.string,
        isAlignedRight: PropTypes.string,
        isChecked: PropTypes.string,
        isDisabled: PropTypes.string,
        isFluid: PropTypes.string,
        isPill: PropTypes.string,
        label: PropTypes.string,
        labelNotClickable: PropTypes.string,
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * A Radio can be disabled.
     */
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    /**
     * To prevent sensitive data from being read, we need to be able to block the contents of the
     * control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
     */
    isRedacted: PropTypes.bool,
    label: PropTypes.string,
    labelClick: PropTypes.bool,
    multi: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    pill: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
    value: PropTypes.string,
};

const defaultProps = {
    align: null,
    alwaysShowRequiredIndicator: false,
    checked: null,
    children: null,
    classes: null,
    className: null,
    disable: false,
    disabled: false,
    fluid: false,
    id: null,
    isRedacted: false,
    label: null,
    labelClick: true,
    multi: false,
    name: null,
    onChange: null,
    onKeyDown: null,
    pill: false,
    required: false,
    style: null,
    tabIndex: -1,
    value: '',
};

const isCheckedSingle = (id, index, isChecked) => (id === isChecked || index === isChecked);

const isCheckedMulti = (id, index, isChecked) => {
    const newId = id || index;

    return includes(isChecked, newId);
};

const styles = (theme) => {
    const size = 22;
    const sizeDot = 14;

    const inputStyle = {
        display: 'none',
        '&:checked +': {
            '& $label::after': {
                opacity: 1,
            },
        },
    };

    return {
        isAlignedRight: {},
        isDisabled: {},
        isFluid: {},
        isPill: {},
        input: {
            ...inputStyle,
        },
        label: {},
        labelNotClickable: {},
        root: {
            display: 'inline-block',
            marginRight: theme.spacing(2),
            minHeight: size,
            outline: 'none',
            position: 'relative',
            textAlign: 'left',
            '&:focus': {
                boxShadow: `0 0 0 1px ${theme.palette.active.primary}`,
            },
            '& .label': {
                color: theme.palette.text.primary,
                cursor: 'pointer',
                display: 'block',
                fontSize: 14,
                position: 'relative',
                '&::before, &::after': {
                    content: '""',
                    height: size,
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    transition: 'opacity 150ms ease',
                    width: size,
                },
                '&::before': {
                    background: theme.palette.background.primary,
                    border: `1px solid ${theme.palette.border.primary}`,
                    borderRadius: 11,
                },
                '&::after': {
                    backgroundColor: theme.palette.cyan[500],
                    borderRadius: sizeDot / 2,
                    height: sizeDot,
                    margin: (size - sizeDot) / 2,
                    opacity: 0,
                    width: sizeDot,
                },
                '&$labelNotClickable': {
                    cursor: 'auto',
                    '&::before, &::after': {
                        cursor: 'pointer',
                    },
                },
                '& > span': {
                    display: 'inline-block',
                    paddingLeft: 33,
                    paddingTop: 2,
                },
            },
            '& .radio-required-indicator': {
                color: theme.palette.error.main,
                display: 'inline-block',
                fontSize: theme.typography.pxToRem(14),
                marginLeft: 3,
            },
            '&$isAlignedRight': {
                marginLeft: 11,
                marginRight: 0,
                textAlign: 'left',
                '& .label': {
                    '&::before, &::after': {
                        left: 'auto',
                        right: 0,
                    },
                    '& > span': {
                        paddingLeft: 0,
                        paddingRight: 33,
                    },
                },
            },
            '&$isDisabled': {
                '& .radio-item .label': {
                    cursor: 'auto',
                    '&::before': {
                        background: theme.palette.background.secondary,
                    },
                    '&::after': {
                        backgroundColor: theme.palette.grey[400],
                    },
                },
                '&$isPill': {
                    '& .radio-item': {
                        '& .label': {
                            cursor: 'default',
                        },
                        '& .input:checked + .label': {
                            backgroundColor: theme.palette.grey[400],
                            borderColor: theme.palette.grey[400],
                        },
                        '&:last-child': {
                            input: {
                                '&:checked + .label': {
                                    borderRight: `1px solid ${theme.palette.grey[400]}`,
                                },
                            },
                        },
                        '&.radio-item-is-checked + .radio-item .label': {
                            borderLeft: `1px solid ${theme.palette.grey[400]}`,
                        },
                    },
                },
            },
            '&$isFluid': {
                display: 'block',
                marginRight: 0,
            },
            '&$isPill': {
                '& .radio-item': {
                    cursor: 'pointer',
                    display: 'inline-block',
                    outline: 'none',
                    '&:focus': {
                        boxShadow: `0 0 0 1px ${theme.palette.active.primary}`,
                    },
                    '&:first-child:focus': {
                        borderRadius: '16px 0 0 16px',
                    },
                    '&:last-child:focus': {
                        borderRadius: '0 16px 16px 0',
                    },
                    '& .input': {
                        ...inputStyle,
                    },
                    '& .label': {
                        backgroundColor: theme.palette.background.primary,
                        border: `1px solid ${theme.palette.border.primary}`,
                        borderRight: 0,
                        display: 'inline-block',
                        fontSize: 14,
                        fontWeight: theme.typography.fontWeightRegular,
                        outline: 'none',
                        padding: '6px 22px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        transition: [
                            [
                                'background-color',
                                '125ms',
                                'linear',
                            ],
                            [
                                'border',
                                '125ms',
                                'linear',
                            ],
                            [
                                'color',
                                '125ms',
                                'linear',
                            ],
                        ],
                        whiteSpace: 'nowrap',
                        zIndex: -1,
                        '&::before, &::after': {
                            display: 'none',
                        },
                    },
                    '& .input:checked + .label': {
                        backgroundColor: theme.palette.cyan[500],
                        borderColor: theme.palette.cyan[500],
                        color: theme.palette.text.contrastText,
                    },
                    '&:first-child .label': {
                        borderRadius: '15.5px 0 0 15.5px',
                    },
                    '&:last-child': {
                        '& .label': {
                            borderRight: `1px solid ${theme.palette.border.primary}`,
                            borderRadius: '0 15.5px 15.5px 0',
                        },
                        '& .input:checked + .label': {
                            borderRight: `1px solid ${theme.palette.cyan[500]}`,
                        },
                    },
                    '&.radio-item-is-checked + .radio-item .label': {
                        borderLeft: `1px solid ${theme.palette.cyan[500]}`,
                    },
                },
            },
        },
    };
};

class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onLabelKeyDown = this.onLabelKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            checked: prevChecked,
        } = prevProps;

        const {
            checked,
        } = this.props;

        if (checked !== prevChecked) {
            this.setState({ isChecked: checked });
        }
    }

    onClick(idArg, customValue) {
        const {
            disable,
            disabled,
            id,
            onChange,
            pill,
        } = this.props;

        const newValue = this.setIsChecked(idArg);
        const isNotDisabled = !disable && !disabled;

        if (isNotDisabled) {
            if (isFunction(onChange)) {
                onChange(pill ? idArg : id, newValue, customValue);
            } else {
                this.setState({ isChecked: newValue });
            }
        }
    }

    onKeyDown(event, idArg) {
        const {
            disable,
            disabled,
            id,
            onKeyDown,
            pill,
        } = this.props;

        if (event.keyCode === KeyCode.Enter) {
            const newValue = this.setIsChecked(idArg);
            const isNotDisabled = !disable && !disabled;

            if (!isNotDisabled) {
                if (isFunction(onKeyDown)) {
                    onKeyDown(pill ? idArg : id, newValue);
                } else {
                    this.setState({ isChecked: newValue });
                }
            }
        }
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (labelClick === false) {
            event.stopPropagation();
        }
    }

    onLabelKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday.
         */

        return null;
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    setIsChecked(idArg) {
        const {
            pill,
            multi,
        } = this.props;

        const {
            isChecked,
        } = this.state;

        let newValue = clone(isChecked);

        if (multi) {
            if (includes(newValue, idArg)) {
                remove(newValue, (v) => v === idArg);
            } else if (isArray(newValue)) {
                newValue.push(idArg);
            } else {
                newValue = [idArg];
            }
        } else if (pill) {
            newValue = idArg;
        } else {
            newValue = true;
        }

        return newValue;
    }

    render() {
        const {
            align,
            alwaysShowRequiredIndicator,
            children,
            classes,
            className,
            disable,
            disabled,
            fluid,
            id,
            isRedacted,
            label,
            labelClick,
            multi,
            name,
            pill,
            required,
            style,
            tabIndex,
            value,
        } = this.props;

        const { isChecked } = this.state;
        const isDisabled = disable || disabled || isRedacted;

        const shouldShowRequiredIndicator = required && (alwaysShowRequiredIndicator || !isChecked);

        const rootClasses = ClassNames(
            'ui',
            'radio',
            classes.root,
            className,
            {
                [classes.isAlignedRight]: align === 'right',
                'radio-align-right': align === 'right',
                [classes.isDisabled]: isDisabled,
                'radio-disabled': isDisabled,
                [classes.isFluid]: fluid,
                'radio-full-width': fluid,
                [classes.isChecked]: !pill && isChecked,
                'radio-is-checked': !pill && isChecked,
                [classes.isPill]: pill,
                'radio-pill': pill,
            },
        );

        if (pill) {
            const isCheckedItem = multi ? isCheckedMulti : isCheckedSingle;

            return (
                <div
                    className={rootClasses}
                    style={style}
                >
                    {React.Children.map(children, (child, index) => React.cloneElement(child, {
                        checked: isCheckedItem(child.props.id, index, isChecked),
                        className: child.props.className,
                        id: child.props.id,
                        index,
                        label: child.props.label,
                        name: !multi ? name : null,
                        onClick: this.onClick,
                        onKeyDown: this.onKeyDown,
                        style: child.props.style,
                        tabIndex: child.props.tabIndex,
                    }))}
                </div>
            );
        }

        return (
            <div
                aria-checked={isRedacted ? false : isChecked}
                aria-labelledby={id}
                className={rootClasses}
                onClick={isRedacted ? noop : this.onClick}
                onKeyDown={isRedacted ? noop : this.onKeyDown}
                onMouseDown={isRedacted ? noop : this.onMouseDown}
                role="radio"
                style={style}
                tabIndex={isDisabled ? -1 : tabIndex}
            >
                <input
                    checked={isRedacted ? false : isChecked}
                    className={ClassNames(
                        'input',
                        classes.input,
                    )}
                    disabled={isDisabled}
                    id={id}
                    name={name}
                    readOnly
                    type="radio"
                    value={value}
                />

                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                    className={ClassNames(
                        'label',
                        classes.label,
                        {
                            [classes.labelNotClickable]: !labelClick,
                            'label-not-clickable': labelClick === false,
                        },
                    )}
                >
                    {label && (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <span
                            onClick={this.onLabelClick}
                            onKeyDown={this.onLabelKeyDown}
                        >
                            {label}

                            {isRedacted && <RadioScreenGuard />}
                        </span>
                    )}

                    {shouldShowRequiredIndicator && (
                        <span className="radio-required-indicator">*</span>
                    )}
                </label>
            </div>
        );
    }
}

Radio.Item = RadioItem;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default withStyles(styles)(Radio);
