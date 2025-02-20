import {
    cloneDeep,
    differenceWith,
    find,
    filter,
    isArray,
    isEmpty,
    isObject,
    map,
    mapValues,
    some,
    sortBy,
    union,
} from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import Button from '../../inputs/button';
import Checkbox from '../../inputs/checkbox/checkbox';
import Drawer from '../../surfaces/drawer'; // eslint-disable-line import/no-cycle
import Dropdown from '../../inputs/dropdown/dropdown';
import FiltersDrawerNestedTogglesLabel from './filtersDrawerNestedTogglesLabel';
import FiltersDrawerMultiSelectLabel from './filtersDrawerMultiSelectLabel';
import FiltersDrawerNestedTogglesValueLabel from './filtersDrawerNestedTogglesValueLabel';
import FiltersDrawerNestedTogglesWingOptionLabel from './filtersDrawerNestedTogglesWingOptionLabel';
import Header from '../../dataDisplay/header';
import Icon from '../../dataDisplay/icon';

const breakpoints = {
    values: {
        sm: 0,
        md: 767,
        lg: 1199,
        xl: 1685,
    },
};

const propTypes = {
    breakpointDown: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
    isDirty: PropTypes.bool.isRequired,
    isFiltering: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    moduleType: PropTypes.string.isRequired,
    onApply: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            checkbox: PropTypes.shape({
                checked: PropTypes.bool,
                className: PropTypes.string,
                /**
                 * A Checkbox can be disabled.
                 */
                disable: PropTypes.bool,
                /**
                 * Deprecated prop. Please use `disable` instead.
                 */
                disabled: PropTypes.bool,
                id: PropTypes.string,
                label: PropTypes.oneOfType([
                    PropTypes.shape({}),
                    PropTypes.string,
                ]),
                name: PropTypes.string,
                onChange: PropTypes.func,
                style: PropTypes.shape({}),
            }),
            dropdown: PropTypes.shape({
                onChange: PropTypes.func,
                options: PropTypes.arrayOf(PropTypes.shape({
                    label: PropTypes.string,
                    value: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                    ]),
                })),
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({
                        label: PropTypes.string,
                        value: PropTypes.oneOfType([
                            PropTypes.number,
                            PropTypes.string,
                        ]),
                    }),
                ]),
            }),
            jsx: PropTypes.node,
            multiSelect: PropTypes.shape({
                placeholder: PropTypes.string,
                onChange: PropTypes.func,
                options: PropTypes.arrayOf(PropTypes.shape({
                    label: PropTypes.string,
                    value: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                    ]),
                })),
                value: PropTypes.arrayOf(PropTypes.shape({
                    label: PropTypes.string,
                    value: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                    ]),
                })),
            }),
            nestedToggles: PropTypes.shape({
                clearable: PropTypes.bool,
                label: PropTypes.string,
                onChange: PropTypes.func,
                options: PropTypes.arrayOf(PropTypes.shape({
                    label: PropTypes.string,
                    value: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                    ]),
                })),
                singleSelection: PropTypes.bool,
                value: PropTypes.arrayOf(PropTypes.shape({
                    label: PropTypes.string,
                    value: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                    ]),
                })),
            }),
            toggle: PropTypes.shape({
                checked: PropTypes.bool,
                className: PropTypes.string,
                /**
                 * A Toggle can be disabled.
                 */
                disable: PropTypes.bool,
                /**
                 * Deprecated prop. Please use `disable` instead.
                 */
                disabled: PropTypes.bool,
                id: PropTypes.string,
                label: PropTypes.string,
                labelIconColor: PropTypes.string,
                labelIconType: PropTypes.string,
                name: PropTypes.string,
                onChange: PropTypes.func,
                style: PropTypes.shape({}),
            }),
        })),
    })),
    style: PropTypes.shape({}),
};

const defaultProps = {
    breakpointDown: breakpoints.values.md,
    children: undefined,
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-fitlersDrawer`,
    id: undefined,
    rows: undefined,
    style: {},
};

class FiltersDrawer extends React.Component {
    static onMultiSelectChange(onItemChange, value, selectedOption) {
        const filteredOptions = union(value, [selectedOption]);

        onItemChange(filteredOptions);
    }

    static onNestedTogglesValueLabelClick(nestedTogglesData, selectedOption) {
        const selectedOptions = filter(nestedTogglesData.value, (d) => (
            d.value !== selectedOption.value
        ));

        nestedTogglesData.onChange(selectedOptions);
    }

    constructor() {
        super();

        /**
         * The nestedTogglesData object is only to be populated when props.rows.items.nestedToggles
         * is true and a label onClick event handler is triggered.
         */
        this.state = {
            nestedTogglesData: {},
        };

        this.onApplyClick = this.onApplyClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onNestedTogglesCloseWingClick = this.onNestedTogglesCloseWingClick.bind(this);
        this.onNestedTogglesLabelClick = this.onNestedTogglesLabelClick.bind(this);
        this.onNestedTogglesWingOptionLabelClick =
            this.onNestedTogglesWingOptionLabelClick.bind(this);
    }

    onApplyClick() {
        const { onApply } = this.props;

        onApply();
    }

    onClearClick() {
        const { onClear } = this.props;

        onClear();
    }

    onNestedTogglesCloseWingClick() {
        const { nestedTogglesData } = this.state;

        this.setState({
            nestedTogglesData: {},
        }, () => {
            nestedTogglesData.onChange(nestedTogglesData.value);
        });
    }

    onNestedTogglesLabelClick(nestedTogglesData) {
        this.setState({
            nestedTogglesData: cloneDeep(nestedTogglesData),
        });
    }

    onNestedTogglesWingOptionLabelClick(selectedOption) {
        const { nestedTogglesData } = this.state;
        let selectedOptions;

        if (nestedTogglesData.singleSelection) {
            selectedOptions = [selectedOption];
        } else if (some(nestedTogglesData.value, selectedOption)) { // Subtract
            selectedOptions = filter(nestedTogglesData.value, (d) => (
                d.value !== selectedOption.value
            ));
        } else { // Add
            selectedOptions = sortBy([...nestedTogglesData.value || [], selectedOption], ['value']);
        }

        const newNestedTogglesData = mapValues(nestedTogglesData, (data, key) => {
            let newData = data;

            if (key === 'value') {
                newData = selectedOptions;
            }

            return newData;
        });

        this.setState({
            nestedTogglesData: newNestedTogglesData,
        });
    }

    render() {
        const {
            breakpointDown,
            children,
            className,
            dataTestId,
            id,
            isDirty,
            isFiltering,
            isOpen,
            moduleType,
            onClose,
            rows,
            style,
        } = this.props;

        const { nestedTogglesData } = this.state;
        const bemClassName = `${moduleType}--filters_drawer`;
        const bemBlockClassName = `${moduleType}_filters_drawer`;
        const containerClasses = ClassNames('ui', bemClassName, className);
        const canClear = isFiltering || isDirty;
        const clearFiltersClasses = ClassNames('clear-filters', 'font-size-xsmall', 'font-weight-semibold');
        const isNestedTogglesOptionsEmpty = isEmpty(nestedTogglesData);

        let rowKeyNum = 1;
        let itemKeyNum = 1;
        let multiSelectLabelKeyNum = 1;
        let nestedTogglesValueLabelKeyNum = 1;
        let nestedTogglesOptionLabelKeyNum = 1;

        return (
            <MediaQuery
                maxWidth={breakpointDown}
            >
                <Drawer
                    className={containerClasses}
                    data-testid={dataTestId}
                    id={id}
                    isOpen={isOpen}
                    onClose={onClose}
                    style={style}
                    wing={(
                        <Drawer.Wing
                            className={`${bemBlockClassName}--nested_toggles_wing`}
                            isOpen={!isNestedTogglesOptionsEmpty}
                        >
                            <Drawer.TitleBar
                                className="nested_toggles_wing--title_bar"
                                title={(
                                    <Icon
                                        className="nested_toggles_wing--close_button"
                                        onClick={this.onNestedTogglesCloseWingClick}
                                        size="medium"
                                        type="chevron-left"
                                    />
                                )}
                            />

                            <Drawer.Content
                                className="nested_toggles_wing--content"
                            >
                                <Header
                                    className="nested_toggles_wing--title"
                                    size="small"
                                    weight="bold"
                                >
                                    {nestedTogglesData.label}
                                </Header>

                                <div
                                    className="nested_toggles_wing--options"
                                >
                                    {
                                        !isNestedTogglesOptionsEmpty &&
                                        map(nestedTogglesData.options, (option) => {
                                            nestedTogglesOptionLabelKeyNum += 1;
                                            const isSelected = some(
                                                nestedTogglesData.value,
                                                (v) => {
                                                    const selectedValue = isObject(v) ? v.value : v;
                                                    return option.value === selectedValue;
                                                },
                                            );

                                            return (
                                                <FiltersDrawerNestedTogglesWingOptionLabel
                                                    key={nestedTogglesOptionLabelKeyNum}
                                                    isSelected={isSelected}
                                                    onClick={
                                                        this.onNestedTogglesWingOptionLabelClick
                                                    }
                                                    option={option}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </Drawer.Content>
                        </Drawer.Wing>
                    )}
                >
                    <Drawer.TitleBar
                        className={`${bemBlockClassName}--title_bar`}
                        closeButton={(
                            <Icon
                                className={`${bemBlockClassName}--close_button`}
                                compact
                                onClick={onClose}
                                type="times"
                            />
                        )}
                        title={(
                            <div
                                className={`${bemBlockClassName}--actions`}
                                title="Filters"
                            >
                                <div
                                    className={`${bemBlockClassName}--clear_column`}
                                >
                                    {/* eslint-disable max-len */}
                                    {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                                    {canClear ? (
                                        <a
                                            className={clearFiltersClasses}
                                            onClick={this.onClearClick}
                                        >
                                            Clear Filters
                                        </a>
                                    ) : (
                                        <Icon
                                            color="static"
                                            compact
                                            size="medium"
                                            type="filter"
                                        />
                                    )}
                                    {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                                    {/* eslint-enable max-len */}
                                </div>

                                <div
                                    className={`${bemBlockClassName}--apply_column`}
                                >
                                    {isDirty && (
                                        <Button
                                            color="success"
                                            designVersion={2}
                                            icon
                                            innerStyle={{
                                                height: '32px',
                                                width: '32px',
                                            }}
                                            onClick={this.onApplyClick}
                                            style={{
                                                height: '32px',
                                                minHeight: '32px',
                                                width: '32px',
                                            }}
                                        >
                                            <Icon
                                                compact
                                                type="check"
                                            />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )}
                    />

                    <Drawer.Content>
                        {map(rows, (row) => {
                            rowKeyNum += 1;

                            return (
                                <div
                                    className={`${bemBlockClassName}--row`}
                                    key={`${bemBlockClassName}--filters-drawer-row-${rowKeyNum}`}
                                >
                                    {row.header && (
                                        <Header
                                            className={`${bemBlockClassName}--header`}
                                            weight="bold"
                                        >
                                            {row.header}
                                        </Header>
                                    )}

                                    <div
                                        className={`${bemBlockClassName}--items`}
                                    >
                                        {/* eslint-disable max-len */}
                                        {isArray(row.items) && map(row.items, (item) => {
                                            const {
                                                checkbox,
                                                dropdown,
                                                jsx,
                                                multiSelect,
                                                nestedToggles,
                                                toggle,
                                            } = item;
                                            const itemClassName = ClassNames(`${bemBlockClassName}--item`, {
                                                [`${bemBlockClassName}--item-checkbox`]: checkbox,
                                                [`${bemBlockClassName}--item-dropdown`]: dropdown,
                                                [`${bemBlockClassName}--item-jsx`]: jsx,
                                                [`${bemBlockClassName}--item-multi_select`]: multiSelect,
                                                [`${bemBlockClassName}--item-nested_toggles`]: nestedToggles,
                                                [`${bemBlockClassName}--item-toggle`]: toggle,
                                            });

                                            itemKeyNum += 1;

                                            const itemKey = `${bemBlockClassName}--item-${itemKeyNum}`;

                                            if (
                                                !dropdown &&
                                                !jsx &&
                                                !multiSelect &&
                                                !nestedToggles &&
                                                !toggle &&
                                                checkbox
                                            ) {
                                                // Checkbox
                                                return (
                                                    <div
                                                        className={itemClassName}
                                                        key={itemKey}
                                                    >
                                                        <Checkbox
                                                            checked={checkbox.checked}
                                                            className={checkbox.className}
                                                            disabled={checkbox.disable || checkbox.disabled}
                                                            fluid
                                                            id={checkbox.id}
                                                            label={checkbox.label}
                                                            name={checkbox.name}
                                                            onChange={checkbox.onChange}
                                                            style={checkbox.style}
                                                        />
                                                    </div>
                                                );
                                            }

                                            if (
                                                !checkbox &&
                                                !jsx &&
                                                !multiSelect &&
                                                !nestedToggles &&
                                                !toggle &&
                                                dropdown
                                            ) {
                                                // Dropdown
                                                return (
                                                    <div
                                                        className={itemClassName}
                                                        key={itemKey}
                                                    >
                                                        <Dropdown
                                                            clearable={false}
                                                            className={dropdown.className}
                                                            fluid
                                                            id={dropdown.id}
                                                            onChange={(selectedOption) => {
                                                                dropdown.onChange(selectedOption);
                                                            }}
                                                            options={dropdown.options}
                                                            searchable={false}
                                                            selection
                                                            selectionOptionComponent={
                                                                dropdown.selectionCustomComponent
                                                            }
                                                            style={dropdown.style}
                                                            value={dropdown.value}
                                                        />
                                                    </div>
                                                );
                                            }

                                            if (
                                                !checkbox &&
                                                !dropdown &&
                                                !multiSelect &&
                                                !nestedToggles &&
                                                !toggle &&
                                                jsx
                                            ) {
                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        {jsx}
                                                    </div>
                                                );
                                            }

                                            if (
                                                !checkbox &&
                                                !dropdown &&
                                                !jsx &&
                                                !nestedToggles &&
                                                !toggle &&
                                                multiSelect
                                            ) {
                                                // Multi Select
                                                const modifiedOptions = differenceWith(
                                                    multiSelect.options,
                                                    multiSelect.value,
                                                    (option, value) => {
                                                        const selectedValue = isObject(value) ? value.value : value;
                                                        return option.value === selectedValue;
                                                    },
                                                );

                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        <Dropdown
                                                            clearable={false}
                                                            className={multiSelect.className}
                                                            fluid
                                                            iconType="plus"
                                                            id={multiSelect.id}
                                                            onChange={(selectedOption) => {
                                                                FiltersDrawer.onMultiSelectChange(
                                                                    multiSelect.onChange,
                                                                    multiSelect.value,
                                                                    selectedOption,
                                                                );
                                                            }}
                                                            options={modifiedOptions}
                                                            placeholder={multiSelect.placeholder}
                                                            searchable={false}
                                                            selection
                                                            selectionOptionComponent={
                                                                multiSelect.selectionCustomComponent
                                                            }
                                                            style={multiSelect.style}
                                                            value=""
                                                        />

                                                        {!isEmpty(multiSelect.value) &&
                                                                map(multiSelect.value, (v) => {
                                                                    const selectedValue = isObject(v) ? v.value : v;
                                                                    const selectedOption = find(multiSelect.options, { value: selectedValue });
                                                                    multiSelectLabelKeyNum += 1;

                                                                    return (
                                                                        <FiltersDrawerMultiSelectLabel
                                                                            color={multiSelect.labelColor}
                                                                            key={`multi-select-label-${multiSelectLabelKeyNum}`}
                                                                            onItemChange={multiSelect.onChange}
                                                                            label={selectedOption.label}
                                                                            selectedOption={selectedOption}
                                                                            value={multiSelect.value}
                                                                        />
                                                                    );
                                                                })}
                                                    </div>
                                                );

                                                // JSX
                                            }

                                            if (
                                                !checkbox &&
                                                !dropdown &&
                                                !jsx &&
                                                !multiSelect &&
                                                !toggle &&
                                                nestedToggles
                                            ) {
                                                // Nested Toggles
                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        <FiltersDrawerNestedTogglesLabel
                                                            onClick={this.onNestedTogglesLabelClick}
                                                            nestedTogglesData={nestedToggles}
                                                        />

                                                        {!isEmpty(nestedToggles.value) && (
                                                            <div>
                                                                {map(
                                                                    nestedToggles.value,
                                                                    (value) => {
                                                                        nestedTogglesValueLabelKeyNum += 1;
                                                                        const selectedValue = isObject(value) ? value.value : value;
                                                                        const option = find(nestedToggles.options, { value: selectedValue });

                                                                        return (
                                                                            <FiltersDrawerNestedTogglesValueLabel
                                                                                key={`nested-toggles-selected-filter-${nestedTogglesValueLabelKeyNum}`}
                                                                                nestedTogglesData={nestedToggles}
                                                                                onClick={FiltersDrawer.onNestedTogglesValueLabelClick}
                                                                                option={option}
                                                                            />
                                                                        );
                                                                    },
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            }

                                            if (
                                                !dropdown &&
                                                !jsx &&
                                                !multiSelect &&
                                                !nestedToggles &&
                                                !checkbox &&
                                                toggle
                                            ) {
                                                // Toggle

                                                let newLabel = toggle.label;

                                                if (toggle.labelIconType) {
                                                    newLabel = (
                                                        <span className="item_toggle--label_with_icon">
                                                            <Icon
                                                                color={toggle.labelIconColor || 'highlight'}
                                                                size={24}
                                                                type={toggle.labelIconType}
                                                            />

                                                            {toggle.label}
                                                        </span>
                                                    );
                                                }

                                                return (
                                                    <div
                                                        className={itemClassName}
                                                        key={itemKey}
                                                    >
                                                        <Checkbox
                                                            align="right"
                                                            checked={toggle.checked}
                                                            className={toggle.className}
                                                            disabled={toggle.disable || toggle.disabled}
                                                            fluid
                                                            id={toggle.id}
                                                            label={newLabel}
                                                            name={toggle.name}
                                                            onChange={toggle.onChange}
                                                            style={toggle.style}
                                                            toggle
                                                        />
                                                    </div>
                                                );
                                            }

                                            console.warn( // eslint-disable-line no-console
                                                '<Page.FiltersDrawer>\'s rows.items must ' +
                                                'have one of the following properties: ' +
                                                'dropdown, labels, multiSelect or jsx.',
                                            );

                                            return null;
                                        })}
                                        {/* eslint-enable max-len */}
                                    </div>
                                </div>
                            );
                        })}

                        {children}
                    </Drawer.Content>
                </Drawer>
            </MediaQuery>
        );
    }
}

FiltersDrawer.propTypes = propTypes;
FiltersDrawer.defaultProps = defaultProps;

export default FiltersDrawer;
