/* eslint-disable */

/**
 * NOTE: The props 'button' part of this component is deprecated as of Feb. 11, 2020.
 * Please use the DropdownButton component instead.
 * We are disabling Eslint for this file because of the above note and wanting to
 * deprecate it fully in hopes to rip out the select portion of it as well.
 */

import React from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import Select from 'react-select';
import Button from '../button';
import domUtils from '../../utils/domUtils';
import DropdownItem from './dropdownItem';
import Icon from '../../dataDisplay/icon';
import Modal from '../../surfaces/modal';
import Utils from '../../utils/utils';

class CustomSelect extends Select {
    renderHiddenField(valueArray) {
        const options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
        const menu = this.renderMenu(options, valueArray);
        const styles = Object.assign({}, this.props.menuContainerStyle, {visibility: 'hidden'});

        return (
            <div className="Select-menu-outer" style={styles}>
                <div
                    role="listbox"
                    tabIndex={-1}
                    className="Select-menu"
                    id={this._instancePrefix + '-list'}
                    style={this.props.menuStyle}
                >
                    {menu}
                </div>
            </div>
        );
    }
}

const customCreatableSelect = props => <CustomSelect {...props}/>;

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            menuIsOpen: false,
            menuPositionStyle: {},
            menuXPosition: 'left',
            menuYPosition: 'top',
            value: props.value || null,
        };

        this._onClickOutside = this._onClickOutside.bind(this);
        this._onDropdownMenuReposition = this._onDropdownMenuReposition.bind(this);
        this._onDropdownMenuResize = this._onDropdownMenuResize.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            autoScrollSelection,
            options,
            selection,
            selectionMatchProp,
            value: currentPropsValue,
        } = this.props;

        const { value: previousPropsValue } = prevProps;

        if (!_.isEqual(currentPropsValue, previousPropsValue)) {
            this.setState({ menuIsOpen: false, value: currentPropsValue });
        }

        if (selection && autoScrollSelection && this.dropdownMenu && currentPropsValue) {
            const itemHeight = this.dropdownMenu.getScrollHeight()/_.size(options);
            const pageSize = this.dropdownMenu.getClientHeight()/itemHeight;

            const selectionIndex = _.findIndex(options, (o) => {
                if (selectionMatchProp === 'any') {
                    const hasValue = _.has(o, 'value');
                    const hasLabel = _.has(o, 'label');

                    if (!hasValue && !hasLabel) {
                        return false;
                    }

                    return (
                        (
                            hasValue && o['value'] === currentPropsValue['value']
                        ) || o['value'] === currentPropsValue
                    ) || (
                        (
                            hasLabel && o['label'] === currentPropsValue['label']
                        ) || o['label'] === currentPropsValue
                    );
                }

                return o[selectionMatchProp] === currentPropsValue[selectionMatchProp];
            });

            const scrollRatio = selectionIndex/pageSize;

            if (scrollRatio >= 1) {
                this.dropdownMenu.scrollTop(scrollRatio * pageSize * itemHeight);
            }
        }
    }

    render() {
        const {
            button,
            buttonColor, buttonCompact, children,
            className,
            clearable, disable, fluid, iconColor,
            iconInverse,
            iconPosition, iconSize, iconTitle, iconType,
            id,
            inverse,
            label,
            labelStyle,
            options,
            placeholder,
            searchable,
            selection,
            selectionCreatable,
            selectionMatchProp,
            selectionMenuContainerStyle,
            selectionMenuStyle,
            selectionMobile,
            selectionOptionComponent,
            selectionValueComponent,
            selectionMultiple,
            selectionRequired,
            selectionUnderline,
            style,
            tabIndex,
            text,
            theme,
        } = this.props;

        const { menuIsOpen, menuPositionStyle } = this.state;

        const containerClasses = ClassNames('ui', 'dropdown', className, {
            'dropdown-button': button,
            'dropdown-button-compact': buttonCompact,
            'dropdown-color-alert': buttonColor === 'alert',
            'dropdown-color-disable': disable || buttonColor === 'disable',
            'dropdown-color-inverse': buttonColor === 'inverse',
            'dropdown-color-light': buttonColor === 'light',
            'dropdown-color-outline': buttonColor === 'outline',
            'dropdown-color-primary': !buttonColor || buttonColor === 'primary',
            'dropdown-color-alternate': buttonColor === 'alternate',
            'dropdown-color-secondary': buttonColor === 'secondary',
            'dropdown-color-success': buttonColor === 'success',
            'dropdown-color-transparent': buttonColor === 'transparent',
            'dropdown-color-warning': buttonColor === 'warning',
            'dropdown-disable': disable,
            'dropdown-fluid': fluid,
            'dropdown-icon': iconType,
            'dropdown-inverse': inverse,
            'dropdown-is-active': menuIsOpen,
            'dropdown-menu-theme-dark': theme === 'dark',
            'dropdown-menu-theme-light': theme === 'light',
            'dropdown-selection': selection,
            'dropdown-selection-underline': selectionUnderline,
        });

        let dropdownIconTitle = iconTitle || placeholder;

        if (_.isEmpty(dropdownIconTitle) && _.isString(text)) {
            dropdownIconTitle = text;
        }

        let items, labelJSX;

        if (label) {
            labelJSX = (
                <label className="label" style={labelStyle}>
                    {label}

                    {selectionRequired && !this.state.value ? (
                        <span className="input-required-indicator">*</span>
                    ) : null}
                </label>
            );
        }

        if (children && !selection) {
            items = React.Children.map(children, (child, index) => {
                if (!_.isNil(child)) {
                    const {
                        iconInverse: itemIconInverse,
                        iconType: itemIconType,
                        label: itemLabel,
                        disabled: itemDisabled,
                    } = child.props;

                    let {
                        iconColor: itemIconColor,
                        id: itemId,
                    } = child.props;

                    const itemClass = ClassNames('dropdown-item', child.props.className, {
                        'dropdown-item-is-selected': this.state.value ? this.state.value.label === itemLabel : false,
                        'dropdown-item-is-disabled': itemDisabled,
                    });

                    if (itemDisabled) {
                        itemIconColor = 'static';
                    }

                    const value = {
                        id: itemId || null,
                        label: itemLabel,
                    };

                    if (id && itemId) {
                        itemId = `${id}_${itemId}`;
                    }

                    return (
                        <li
                            className={itemClass}
                            id={itemId}
                            key={'dropdown-menu-item-' + index}
                        >
                            <span onClick={this._onDropdownMenuItemClick.bind(this, value)}>
                                {itemIconType ? <Icon inverse={itemIconInverse} color={itemIconColor} title={value.label} type={itemIconType} /> : null}
                                {value.label}
                            </span>
                        </li>
                    );
                }
            });
        }

        if (selection) {
            if (!selectionCreatable) {
                return (
                    <MediaQuery maxWidth={767}>
                        {matches => {
                            if (selectionMobile && matches) {
                                return (
                                    <div
                                        className={containerClasses}
                                        ref={ref => {
                                            this.dropdownContainer = ref;
                                        }}
                                        style={style}
                                    >
                                        {labelJSX}

                                        <div
                                            className="dropdown-selection-mobile-button"
                                            onClick={this._onSelectionMobileModalToggle.bind(this)}
                                        >
                                            {placeholder && !this.state.value ? (
                                                <span className="placeholder">{placeholder}</span>
                                            ) : (
                                                <span className="label">{this.state.value.label}</span>
                                            )}

                                            <Icon
                                                color={disable ? 'disable' : null}
                                                compact
                                                title={dropdownIconTitle}
                                                type="arrows-alt"
                                            />
                                        </div>

                                        <Modal
                                            isOpen={this.state.isModalOpen}
                                            onClose={this._onSelectionMobileModalToggle.bind(this)}
                                            title={placeholder}
                                        >
                                            {this._onSelectionMobileItemRenderer()}
                                        </Modal>
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        className={containerClasses}
                                        id={id}
                                        ref={ref => {
                                            this.dropdownContainer = ref;
                                        }}
                                        style={style}
                                    >
                                        {labelJSX}

                                        <CustomSelect
                                            arrowRenderer={() => {
                                                return (
                                                    <div>
                                                        <Icon
                                                            compact
                                                            size={selectionUnderline ? 10 : iconSize || 16}
                                                            title={dropdownIconTitle}
                                                            type={iconType ? iconType : selectionUnderline ? 'caret-down' : 'chevron-down'}
                                                        />
                                                    </div>
                                                );
                                            }}
                                            clearRenderer={() => {
                                                return (
                                                    <div>
                                                        <Icon
                                                            compact
                                                            size={selectionUnderline ? 10 : iconSize || 16}
                                                            title={'Clear Selection'}
                                                            type="times"
                                                        />
                                                    </div>
                                                );
                                            }}
                                            clearable={!clearable ? clearable : true}
                                            disabled={disable}
                                            matchProp={selectionMatchProp || 'any'}
                                            menuContainerStyle={selectionMenuContainerStyle}
                                            menuRenderer={this._menuRenderer.bind(this)}
                                            menuStyle={selectionMenuStyle}
                                            multi={selectionMultiple}
                                            name="firstSelect"
                                            onChange={this._onChange.bind(this)}
                                            onOpen={this._onSelectionMenuOpen.bind(this)}
                                            optionComponent={selectionOptionComponent}
                                            options={options}
                                            placeholder={placeholder}
                                            searchable={!searchable ? searchable : true}
                                            tabIndex={_.isNumber(tabIndex) ? tabIndex.toString() : tabIndex}
                                            value={this.state.value}
                                            valueComponent={selectionValueComponent}
                                        />
                                    </div>
                                );
                            }
                        }}
                    </MediaQuery>
                );
            } else if (selectionCreatable) {
                return (
                    <div
                        className={containerClasses}
                        id={id}
                        ref={ref => {
                            this.dropdownContainer = ref;
                        }}
                        style={style}
                    >
                        {labelJSX}

                        <Select.Creatable
                            arrowRenderer={() => {
                                return (
                                    <div>
                                        <Icon compact size={16} title={dropdownIconTitle} type="chevron-down" />
                                    </div>
                                );
                            }}
                            clearRenderer={() => {
                                return (
                                    <div>
                                        <Icon compact size={16} title={'Clear Selection'} type="times" />
                                    </div>
                                );
                            }}
                            clearable={!clearable ? clearable : true}
                            disabled={disable}
                            menuContainerStyle={selectionMenuContainerStyle}
                            menuRenderer={this._menuRenderer.bind(this)}
                            menuStyle={selectionMenuStyle}
                            multi={selectionMultiple}
                            name="firstSelect"
                            onChange={this._onChange.bind(this)}
                            onOpen={this._onSelectionMenuOpen.bind(this)}
                            optionComponent={selectionOptionComponent}
                            options={options}
                            placeholder={placeholder}
                            searchable={!searchable ? searchable : true}
                            tabIndex={_.isNumber(tabIndex) ? tabIndex.toString() : tabIndex}
                            value={this.state.value}
                            valueComponent={selectionValueComponent}
                        >
                            {customCreatableSelect}
                        </Select.Creatable>
                    </div>
                );
            }
        }

        return (
            <div
                className={containerClasses}
                id={id}
                onClick={this._onDropdownClick.bind(this)}
                ref={dropdownContainer => {
                    this.dropdownContainer = dropdownContainer;
                }}
                style={style}
            >
                {iconPosition === 'left' ? (
                    <Icon
                        color={this.state.menuIsOpen && !button ? 'highlight' : button ? iconColor || null : null}
                        inverse={iconInverse}
                        size={iconSize || 'small'}
                        title={dropdownIconTitle}
                        type={iconType || 'chevron-down'}
                    />
                ) : null}

                {labelJSX}

                {placeholder || text || this.state.value ? (
                    <span className="dropdown-selection-value">
                        {text ? text : this.state.value ? this.state.value.label : placeholder}
                    </span>
                ) : null}

                {!iconPosition || iconPosition === 'right' ? (
                    <Icon
                        color={this.state.menuIsOpen && !button ? 'highlight' : button ? iconColor || null : null}
                        compact
                        inverse={iconInverse}
                        size={iconSize || 'small'}
                        title={dropdownIconTitle}
                        type={iconType || 'chevron-down'}
                    />
                ) : null}

                <ul
                    className="dropdown-menu"
                    onClick={this._onDropdownMenuClick.bind(this)}
                    ref={el => this.dropdownMenu = el}
                    style={Object.assign({}, menuPositionStyle, {
                        opacity: menuIsOpen ? 1 : 0,
                        visibility: menuIsOpen ? 'visible' : 'hidden',
                    })}
                >
                    {items}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const {
            button,
        } = this.props;

        if (button) {
            console.warn('Dropdown (react-cm-ui): The prop \'button\' is deprecated. Please use the DropdownButton component instead.');
        }

        document.addEventListener('click', this._onClickOutside);
        document.addEventListener('scroll', this._onDropdownMenuReposition);
        window.addEventListener('resize', this._onDropdownMenuResize);
        this._onDropdownMenuReposition();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._onClickOutside);
        document.removeEventListener('scroll', this._onDropdownMenuReposition);
        window.removeEventListener('resize', this._onDropdownMenuResize);
    }

    _menuRenderer(params) {
        const { selectionOptionComponent } = this.props;

        const {
            focusedOption,
            onFocus,
            options,
            selectValue,
            valueArray,
            valueKey,
        } = params;

        const items = _.map(options, (o, i) => {
            const isFocused = o === focusedOption;
            const isSelected = _.some(valueArray, (x) => x[valueKey] === o[valueKey]);

            if (selectionOptionComponent) {
                const OptionComponent = selectionOptionComponent;

                return (
                    <OptionComponent
                        isFocused={isFocused}
                        isSelected={isSelected}
                        key={`select-option-key-${i}`}
                        onFocus={() => onFocus(o)}
                        onSelect={() => selectValue(o)}
                        option={o}
                    />
                );
            }

            const classes = ClassNames('Select-option', {
                'is-disabled': o.disabled,
                'is-focused': isFocused,
                'is-selected': isSelected,
            });

            return (
                <div
                    className={classes}
                    key={`select-option-key-${i}`}
                    onClick={() => params.selectValue(o)}
                    onMouseOver={() => params.focusOption(o)}
                >
                    {o.label}
                </div>
            );
        });

        return (
            <ScrollBar
                autoHeight
                autoHeightMax={this.props.menuMaxHeight || 180}
                autoHeightMin={this.props.menuMinHeight}
                autoHide
                className="select-menu-scrollbar"
                ref={el => {
                    this.dropdownMenu = el;
                }}
            >
                {items}
            </ScrollBar>
        );
    }

    _onChange(selectedOption) {
        const { collapseMenuOnChange, onChange, onClose } = this.props;

        if (!_.isUndefined(onChange)) {
            onChange(selectedOption);

            if (collapseMenuOnChange) {
                this.setState({ menuIsOpen: false });
            }
        } else {
            const updatedState = { value: selectedOption };

            if (collapseMenuOnChange) {
                updatedState.menuIsOpen = false;
                if (_.isFunction(onClose)) {
                    onClose();
                }
            }

            this.setState(updatedState);
        }
    }

    _onClickOutside(event) {
        const { menuIsOpen } = this.state;

        if (this.dropdownContainer && ReactDOM.findDOMNode(this.dropdownContainer).contains(event.target) && menuIsOpen) {
            return;
        }

        this.setState({ menuIsOpen: false });

        const { onClose } = this.props;

        if (_.isFunction(onClose)) {
            onClose();
        }
    }

    _onDropdownClick(event) {
        event.stopPropagation();

        const { disable, onOpen, onClose } = this.props;
        const updatedMenuOpenState = !this.state.menuIsOpen;

        if (!disable) {
            this.setState({ menuIsOpen: updatedMenuOpenState });

            if (updatedMenuOpenState) {
                if (_.isFunction(onOpen)) {
                    onOpen();
                }
            } else {
                if (_.isFunction(onClose)) {
                    onClose();
                }
            }
        }
    }

    _onDropdownMenuItemClick(selectedOption, event) {
        event.stopPropagation();

        this._onChange(selectedOption);
    }

    _onDropdownMenuClick(event) {
        // Prevents click event from bubbling up and closing the menu
        event.stopPropagation();
    }

    _onDropdownMenuReposition() {
        const dropdownContainerEl = ReactDOM.findDOMNode(this.dropdownContainer);
        const dropdownMenuEl = ReactDOM.findDOMNode(this.dropdownMenu);
        const dropdownMenuObj = domUtils.isInViewport(dropdownMenuEl, dropdownContainerEl);
        const isInTop = dropdownMenuObj.isInTop;
        const isInRight = dropdownMenuObj.isInRight;
        const isInBottom = dropdownMenuObj.isInBottom;
        const topBias = dropdownMenuObj.topBias;
        const bottomBias = dropdownMenuObj.bottomBias;
        let menuXPosition, menuYPosition;

        if (isInRight) {
            menuXPosition = 'left';
        } else {
            menuXPosition = 'right';
        }

        if (isInBottom) {
            menuYPosition = 'top';
        } else if (isInTop) {
            menuYPosition = 'bottom';
        } else {
            if (topBias < 0) {
                menuYPosition = 'bottom';
            } else if (bottomBias < 0) {
                menuYPosition = 'top';
            } else {
                menuYPosition = topBias < bottomBias ? 'top' : 'bottom';
            }
        }

        this.setState({
            menuXPosition,
            menuYPosition,
            menuPositionStyle: {
                bottom: menuYPosition === 'bottom' ? '100%' : null,
                left: menuXPosition === 'left' ? 0 : null,
                right: menuXPosition === 'right' ? 0 : null,
                top: menuYPosition === 'top' ? '100%' : null,
            },
        });
    }

    _onDropdownMenuResize() {
        this._onDropdownMenuReposition();
    }

    _onSelectionMenuOpen() {
        // debugger;
        const { onOpen } = this.props;

        if (_.isFunction(onOpen)) {
            onOpen();
        }
    }

    _onSelectionMobileModalToggle() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    _onSelectionMobileItemClick(selectedOption) {
        this._onChange(selectedOption);
        this._onSelectionMobileModalToggle();
    }

    _onSelectionMobileItemRenderer() {
        const items = _.map(this.props.options, (o, i) => {
            return (
                <Button
                    className="Select-option"
                    color="light"
                    compact
                    fluid
                    inverse
                    key={`select-option-key-${i}`}
                    onClick={this._onSelectionMobileItemClick.bind(this, o)}
                    style={{
                        margin: '3px 0',
                        textAlign: 'left',
                    }}
                >
                    {o.label}
                </Button>
            );
        });

        return items;
    }
}

Dropdown.Item = DropdownItem;

Dropdown.propTypes = {
    autoScrollSelection: PropTypes.bool,
    button: PropTypes.bool,
    buttonColor: PropTypes.oneOf(Utils.colorEnums()),
    buttonCompact: PropTypes.bool,
    className: PropTypes.string,
    clearable: PropTypes.bool,
    collapseMenuOnChange: PropTypes.bool,
    disable: PropTypes.bool,
    fluid: PropTypes.bool,
    iconColor: PropTypes.oneOf(Utils.colorEnums()),
    iconInverse: PropTypes.bool,
    iconPosition: PropTypes.oneOf([ 'left', 'right' ]),
    iconSize: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number,
    ]),
    iconTitle: PropTypes.string,
    iconType: PropTypes.string,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    labelStyle: PropTypes.shape({}),
    menuMaxHeight: PropTypes.number,
    menuMinHeight: PropTypes.number,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    searchable: PropTypes.bool,
    selection: PropTypes.bool,
    selectionCreatable: PropTypes.bool,
    selectionMatchProp: PropTypes.oneOf([ 'any', 'label', 'value' ]),
    selectionMenuContainerStyle: PropTypes.shape({}),
    selectionMenuStyle: PropTypes.shape({}),
    selectionMobile: PropTypes.bool,
    selectionMultiple: PropTypes.bool,
    selectionOptionComponent: PropTypes.func,
    selectionRequired: PropTypes.bool,
    selectionUnderline: PropTypes.bool,
    selectionValueComponent: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    text: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    theme: PropTypes.oneOf(Utils.themeEnums()),
    value: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.shape({}),
        PropTypes.string,
    ]),
};

Dropdown.defaultProps = {
    autoScrollSelection: false,
};

export default Dropdown;
