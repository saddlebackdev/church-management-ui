import React from 'react';

export interface LabelPropTypes {
    children?: React.ReactNode;
    className?: string;
    color?: 'active' | 'action' | 'alert' |
        'alternate' | 'bright' | 'condition' |
        'configuration' | 'disable' | 'highlight' |
        'inverse' | 'inverse-alternate' | 'light' |
        'nest' | 'outline' | 'primary' |
        'secondary' | 'static' | 'subject' |
        'success' | 'transparent' | 'warning',
    fluid?: boolean;
    inverse?: boolean;
    onClearClick?: Function;
    onClearKeyDown?: Function;
    onClick?: Function;
    onKeyDown?: Function;
    style?: React.CSSProperties;
    tabIndex?: number;
}

/**
 * @deprecated Label has been deprecated.
 * Use the Chip component instead.
 */
declare const Label: React.ComponentType<LabelPropTypes>;

export default Label;
