import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import {
    buttonDesignV2PropTypes,
    buttonDesignV2DefaultProps,
    VARIANTS,
} from './buttonConstants';
import {
    UI_CLASS_NAME,
    BEM_BUTTON,
} from '../../global/constants';
import Utils from '../../utils/utils';
import withStyles from '../../styles/withStyles';

const propTypes = {
    ...buttonDesignV2PropTypes,
};
const defaultProps = {
    ...buttonDesignV2DefaultProps,
};

const styles = (theme) => {
    const {
        palette,
        shape,
        typography,
    } = theme;

    const buttonSize = 32;
    const buttonPillSize = 46;
    const outlinedWidth = 'inset 0 0 0 1px';

    return {
        contained: {},
        root: {
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: shape.borderRadius.main,
            color: palette.text.contrastText,
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: typography.fontSize,
            fontWeight: typography.fontWeightMedium,
            letterSpacing: '1px',
            lineHeight: 1,
            margin: '0 11px 0 0',
            minHeight: buttonSize,
            outline: 'none',
            overflow: 'hidden',
            padding: '0 22px 1px',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'capitalize',
            transition: 'background-color 125ms linear, color 125ms linear, opacity 250ms ease-out',
            verticalAlign: 'top',
            whiteSpace: 'normal',
            width: (props) => props.width || '',
            '&:focus': {
                boxShadow: `0 0 0 1px ${theme.palette.active.main}`,
            },
            '&:last-child': {
                marginRight: 0,
            },
            '& .ui.icon:only-child': {
                margin: 0,
            },
            '&$icon': {
                height: buttonSize,
                padding: 0,
                width: buttonSize,
            },
            '& .icon .icon-use-path': {
                fill: theme.palette.background.primary,
            },
        },
        innerContainer: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            minHeight: buttonSize,
            '& .ui.icon': {
                outline: 'none',
                pointerEvents: 'none',
            },
            '& span + .ui.icon': {
                margin: '0 0 0 11px',
            },
            '&$icon': {
                alignItems: 'center',
                display: 'inline-flex',
                height: buttonSize,
                justifyContent: 'center',
                width: buttonSize,
                '& .ui.icon': {
                    float: 'none',
                    fontSize: 16,
                },
            },
        },
        colorActive: {
            '&:not($text)': {
                backgroundColor: theme.palette.active.main,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.active.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.active.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.active.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.active.main,
                },
            },
        },
        colorDefault: {
            '&:not($text)': {
                backgroundColor: theme.palette.grey[600],
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.grey[600]}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.grey[600],
                    },
                    '&$inverse': {
                        boxShadow: `${outlinedWidth} ${theme.palette.common.white}`,
                        '& .icon .icon-use-path': {
                            fill: theme.palette.common.white,
                        },
                    },
                },
            },
            '&$text': {
                color: theme.palette.text.primary,
                '&:not($inverse) .icon .icon-use-path': {
                    fill: theme.palette.text.primary,
                },
                '&$inverse .icon .icon-use-path': {
                    fill: theme.palette.text.primary,
                },
            },
        },
        colorLink: {
            '&:not($text)': {
                backgroundColor: theme.palette.text.link,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.text.link}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.text.link,
                    },
                },
            },
            '&$text': {
                color: theme.palette.text.link,
                '& .icon .icon-use-path': {
                    fill: theme.palette.text.link,
                },
            },
        },
        colorPrimary: {
            '&:not($text)': {
                backgroundColor: theme.palette.primary.main,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.primary.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.primary.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.primary.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.primary.main,
                },
            },
        },
        colorError: {
            '&:not($text)': {
                backgroundColor: theme.palette.error.main,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.error.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.error.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.error.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.error.main,
                },
            },
        },
        colorSecondary: {
            '&:not($text)': {
                backgroundColor: theme.palette.secondary.main,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.secondary.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.secondary.main,
                    },
                    '&$inverse': {
                        boxShadow: `${outlinedWidth} ${theme.palette.secondary.constrastMain}`,
                        '& .icon .icon-use-path': {
                            fill: theme.palette.secondary.constrastMain,
                        },
                    },
                },
            },
            '&$text': {
                color: theme.palette.secondary.main,
                '&:not($inverse) .icon .icon-use-path': {
                    fill: theme.palette.secondary.main,
                },
                '&$inverse .icon .icon-use-path': {
                    fill: theme.palette.text.inverseText,
                },
            },
        },
        colorSuccess: {
            '&:not($text)': {
                backgroundColor: theme.palette.success.main,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.success.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.success.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.success.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.success.main,
                },
            },
        },
        colorWarning: {
            '&:not($text)': {
                backgroundColor: theme.palette.warning.main,
                '&$outlined': {
                    boxShadow: `${outlinedWidth} ${theme.palette.warning.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.warning.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.warning.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.warning.main,
                },
            },
        },
        compact: {
            paddingLeft: 11,
            paddingRight: 11,
        },
        fullWidth: {
            width: '100%',
        },
        icon: {},
        fixedWidth: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        outlined: {
            '&:not($text)': {
                backgroundColor: 'transparent',
                color: theme.palette.text.primary,
            },
        },
        inverse: {
            '&:not($text)': {
                color: theme.palette.text.contrastText,
            },
        },
        pill: {
            borderRadius: buttonPillSize / 2,
            fontWeight: theme.typography.fontWeightBold,
            minHeight: buttonPillSize,
        },
        relax: {
            paddingLeft: 33,
            paddingRight: 33,
        },
        text: {
            '& .icon .icon-use-path': {
                fill: theme.palette.text.primary,
            },
        },
        transparent: {
            '&:not($text)': {
                backgroundColor: theme.palette.hexToRGBA(theme.palette.background.primary, 0.5),
                boxShadow: `inset 0 0 0 1px ${theme.palette.border.contrastPrimary}`,
            },
        },
        disabled: {
            '&:not($text)': {
                backgroundColor: theme.palette.action.disabled,
                color: theme.palette.text.constrastText,
            },
            '&$outlined': {
                backgroundColor: 'transparent',
                boxShadow: `${outlinedWidth} ${theme.palette.action.disabled}`,
                '& .icon .icon-use-path': {
                    fill: theme.palette.action.disabled,
                },
            },
            '&$text': {
                color: theme.palette.text.disable,
            },
        },
    };
};

class Button extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onClick(event) {
        const { onClick } = this.props;

        if (isFunction(onClick)) {
            onClick(event);
        }
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    render() {
        const {
            as,
            children,
            classes,
            className,
            color,
            compact,
            disabled,
            fullWidth,
            href,
            icon,
            id,
            innerStyle,
            inverse,
            outline,
            pill,
            relax,
            style,
            text,
            target,
            title,
            transparent,
            type,
            variant,
            width,
            ...otherProps
        } = this.props;

        const ElementType = Utils.getElementType(as, this.props);

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_BUTTON,
            classes.root,
            className,
            {
                [classes.colorActive]: !disabled && color === 'active',
                [classes.colorDefault]: !disabled && color === 'default',
                [classes.colorError]: !disabled && color === 'error',
                [classes.colorLink]: !disabled && color === 'link',
                [classes.colorPrimary]: !disabled && color === 'primary',
                [classes.colorSecondary]: !disabled && color === 'secondary',
                [classes.colorSuccess]: !disabled && color === 'success',
                [classes.colorWarning]: !disabled && color === 'warning',
                [classes.compact]: compact,
                [classes.disabled]: disabled,
                [classes.fixedWidth]: !!width,
                [classes.fullWidth]: fullWidth,
                [classes.icon]: icon,
                [classes.inverse]: inverse,
                [classes.contained]: variant === VARIANTS.contained,
                [classes.outlined]: variant === VARIANTS.outlined,
                [classes.pill]: pill,
                [classes.relax]: relax,
                [classes.text]: variant === VARIANTS.text,
                [classes.transparent]: transparent,
            },
        );

        const innerContainerClasses = ClassNames(
            'button-inner-container',
            classes.innerContainer,
        );

        return (
            <ElementType
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
                className={rootClasses}
                disabled={disabled}
                id={id}
                href={href}
                onClick={this.onClick}
                onMouseDown={this.onMouseDown}
                style={style}
                target={target}
                title={title}
                type={as === 'button' ? type ?? 'button' : null}
            >
                <span
                    className={innerContainerClasses}
                    style={innerStyle}
                >
                    {children}
                </span>
            </ElementType>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles(styles)(Button);
