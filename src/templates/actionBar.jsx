import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBarActionsButton from './actionBarActionsButton'; // eslint-disable-line import/no-cycle
import ActionBarSearch from './actionBarSearch';
import Button from '../atoms/button';
import DropdownButton from '../molecules/dropdownButton';
import Grid from '../organisms/grid';
import Icon from '../atoms/icon';
import List from '../atoms/list';
import Utils from '../global/utils/utils';

const propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
        button: PropTypes.shape({}),
        dropdownButton: PropTypes.shape({
            className: PropTypes.string,
            color: PropTypes.oneOf(Utils.colorEnums()),
            disable: PropTypes.bool,
            iconType: PropTypes.oneOf(['chevron-down', 'plus']),
            id: PropTypes.string,
            onClick: PropTypes.func,
            style: PropTypes.shape({}),
            title: PropTypes.string,
        }),
        jsx: PropTypes.node,
        list: PropTypes.arrayOf(PropTypes.shape({
            actionsButton: PropTypes.shape({}),
            jsx: PropTypes.node,
            iconBack: PropTypes.shape({}),
            iconFilter: PropTypes.shape({}),
            iconGrid: PropTypes.shape({}),
            iconSearch: PropTypes.shape({}),
            iconTable: PropTypes.shape({}),
        })),
        search: PropTypes.shape({}),
    })),
    id: PropTypes.string,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
    children: undefined,
    className: undefined,
    columns: [],
    id: undefined,
    moduleType: undefined,
    style: {},
};

const HAS_DRAWER_ACTION_BAR_CLASS_NAME = 'drawer--has_action_bar';
const HAS_PAGE_ACTION_BAR_CLASS_NAME = 'page--has_action_bar';

class ActionBar extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isMobileSearchVisible: false,
        };

        this.onMobileSearchIconToggle = this.onMobileSearchIconToggle.bind(this);
    }

    componentDidMount() {
        const { moduleType } = this.props;

        if (moduleType === 'drawer') {
            this.actionBarRef.closest('.ui.drawer').classList.add(HAS_DRAWER_ACTION_BAR_CLASS_NAME);
        }

        if (moduleType === 'page') {
            this.actionBarRef.closest('.ui.page').classList.add(HAS_PAGE_ACTION_BAR_CLASS_NAME);
        }
    }

    componentWillUnmount() {
        const { moduleType } = this.props;

        if (moduleType === 'drawer') {
            this.actionBarRef.closest('.ui.drawer').classList.remove(HAS_DRAWER_ACTION_BAR_CLASS_NAME);
        }
    }

    onMobileSearchIconToggle() {
        this.setState((prevState) => ({
            isMobileSearchVisible: !prevState.isMobileSearchVisible,
        }));
    }

    render() {
        const {
            children,
            className,
            columns,
            id,
            moduleType,
            style,
        } = this.props;
        const { isMobileSearchVisible } = this.state;
        const containerClasses = ClassNames('ui', `${moduleType}--action_bar`, className);
        let searchDataForMobile = null;
        let gridColumnKeyNum = 1;
        let gridColumnListItemKeyNum = 1;

        return (
            <header
                className={containerClasses}
                id={id}
                ref={(ref) => { this.actionBarRef = ref; }}
                style={style}
            >
                <div style={{ width: '100%' }}>
                    {columns && (
                        <React.Fragment>
                            <Grid
                                className="action_bar--grid"
                                verticalAlign="middle"
                            >
                                {_.map(columns, (column) => {
                                    const {
                                        button,
                                        dropdownButton,
                                        columns, // eslint-disable-line no-shadow
                                        jsx,
                                        search,
                                    } = column;
                                    let { list } = column;
                                    const gridColumnClasses = ClassNames('action_bar--grid_column', column.className);
                                    const gridColumnKey = `action_bar--grid_column-${gridColumnKeyNum++}`; // eslint-disable-line no-plusplus

                                    if (columns) {
                                        console.warn('ActionsBar\'s columns.columns is deprecated. Please use columns.list instead.'); // eslint-disable-line no-console

                                        list = [...columns];
                                    }

                                    if (!button && !dropdownButton && !jsx && !list && !search) {
                                        console.warn( // eslint-disable-line no-console
                                            `${'<Page.ActionsBar>\'s column object must have one of the ' +
                                            'following properties: button, jsx, or list.' +
                                            'Please check this column object '}${JSON.stringify(column)}`,
                                        );

                                        return false;
                                    }

                                    let dropdownButtonOptionKeyNum = 1;

                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={gridColumnKey}
                                            style={({
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 0,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                                ...column.style,
                                            })}
                                        >
                                            {button && (
                                                <Button
                                                    color={button.color}
                                                    disabled={!!button.disabled}
                                                    icon={button.iconType && !button.label}
                                                    id={button.id}
                                                    onClick={button.onClick}
                                                    style={button.style}
                                                >
                                                    {button.iconType && <Icon type={button.iconType} />}
                                                    {button.label && <span>{button.label}</span>}
                                                </Button>
                                            )}

                                            {dropdownButton && (
                                                <DropdownButton
                                                    className={dropdownButton.className}
                                                    color={dropdownButton.color}
                                                    disable={dropdownButton.disable}
                                                    iconType={dropdownButton.iconType}
                                                    id={dropdownButton.id}
                                                    label={dropdownButton.label}
                                                    onClick={dropdownButton.onClick}
                                                    style={dropdownButton.style}
                                                    title={dropdownButton.title}
                                                >
                                                    {_.map(dropdownButton.options, (option) => {
                                                        dropdownButtonOptionKeyNum += 1;

                                                        return (
                                                            <DropdownButton.Option
                                                                className={option.className}
                                                                disabled={!!option.disabled}
                                                                id={option.id}
                                                                key={`action_bar_dropdown_button_option-${dropdownButtonOptionKeyNum}`}
                                                                label={option.label}
                                                                onClick={option.onClick}
                                                                onKeyDown={option.onKeyDown}
                                                                style={option.style}
                                                                tabIndex={option.tabIndex}
                                                            />
                                                        );
                                                    })}
                                                </DropdownButton>
                                            )}

                                            {list && _.isArray(list) && (
                                                <List
                                                    className="action_bar--list"
                                                    horizontal
                                                >
                                                    {_.map(list, (item) => {
                                                        const {
                                                            actionsButton,
                                                            jsx: listJsx,
                                                            iconBack,
                                                            iconFilter,
                                                            iconGrid,
                                                            iconSearch,
                                                            iconTable,
                                                        } = item;

                                                        const divide = _.isUndefined(item.divide) ||
                                                            item.divide;

                                                        const listItemClassName = ClassNames('action_bar--list_item', {
                                                            'action_bar--list_item-jsx': listJsx,
                                                            'action_bar--list_item-icon_filter': iconFilter,
                                                            'action_bar--list_item-icon_grid': iconGrid,
                                                            'action_bar--list_item-icon_table': iconTable,
                                                        });

                                                        const itemKey = `action_bar--list_item-${gridColumnListItemKeyNum++}`; // eslint-disable-line no-plusplus

                                                        if (!actionsButton &&
                                                                !listJsx &&
                                                                !iconBack &&
                                                                !iconFilter &&
                                                                !iconGrid &&
                                                                !iconSearch &&
                                                                !iconTable
                                                        ) {
                                                            console.warn( // eslint-disable-line no-console, max-len
                                                                `${'<Page.ActionsBar>\'s column.list object must have one of the ' +
                                                                    'following properties: actionsButton, iconBack, iconFilter, iconGrid, or iconTable.' +
                                                                    'Please check this column.list object '}${JSON.stringify(item)}`,
                                                            );

                                                            return false;
                                                        }

                                                        if (iconSearch) {
                                                            /* eslint-disable max-len */
                                                            /* eslint-disable react/jsx-props-no-spreading */
                                                            searchDataForMobile = (
                                                                <ActionBarSearch
                                                                    {...iconSearch}
                                                                    isMobileSearch
                                                                    isMobileSearchVisible={isMobileSearchVisible}
                                                                    type="mobileSearch"
                                                                />
                                                            );
                                                            /* eslint-enable react/jsx-props-no-spreading */
                                                            /* eslint-enable max-len */
                                                        }

                                                        return (
                                                            <List.Item
                                                                className={listItemClassName}
                                                                divide={divide}
                                                                key={itemKey}
                                                                style={({
                                                                    alignItems: item.alignItems || 'flex-start',
                                                                    flexBasis: item.flexBasis || 'auto',
                                                                    flexGrow: item.flexGrow || 0,
                                                                    flexShrink: item.flexShrink || 0,
                                                                    width: 'auto',
                                                                    ...list.style,
                                                                })}
                                                            >
                                                                {/* eslint-disable max-len */}
                                                                {actionsButton && (
                                                                <ActionBarActionsButton
                                                                    id={actionsButton.id}
                                                                    isMobileSearchVisible={isMobileSearchVisible}
                                                                    header={actionsButton.header}
                                                                    options={actionsButton.options}
                                                                    style={actionsButton.style}
                                                                />
                                                                )}
                                                                {/* eslint-enable max-len */}

                                                                {iconBack && (
                                                                <Icon
                                                                    color={iconBack.selected ?
                                                                        'highlight' :
                                                                        null}
                                                                    id={iconBack.id}
                                                                    onClick={iconBack.onClick}
                                                                    title={iconBack.title || 'Back'}
                                                                    type="chevron-left"
                                                                />
                                                                )}

                                                                {/* eslint-disable max-len */}
                                                                {iconFilter && (
                                                                <Icon
                                                                    color={iconFilter.selected || iconFilter.isFiltering ?
                                                                        'highlight' :
                                                                        null}
                                                                    id={iconFilter.id}
                                                                    onClick={iconFilter.onClick}
                                                                    title={iconFilter.title || 'Filter'}
                                                                    type="filter"
                                                                />
                                                                )}
                                                                {/* eslint-enable max-len */}

                                                                {iconGrid && (
                                                                <Icon
                                                                    color={iconGrid.selected ?
                                                                        'highlight' :
                                                                        null}
                                                                    id={iconGrid.id}
                                                                    onClick={iconGrid.onClick}
                                                                    title={iconGrid.title || 'Grid View'}
                                                                    type="grid"
                                                                />
                                                                )}

                                                                {/* eslint-disable max-len */}
                                                                {iconSearch && (
                                                                <Icon
                                                                    className="action_bar--search_icon"
                                                                    color={isMobileSearchVisible ?
                                                                        'highlight' :
                                                                        null}
                                                                    id={iconSearch.id}
                                                                    onClick={this.onMobileSearchIconToggle}
                                                                    title={iconSearch.title || 'Search'}
                                                                    type="search"
                                                                />
                                                                )}
                                                                {/* eslint-enable max-len */}

                                                                {iconTable && (
                                                                <Icon
                                                                    color={iconTable.selected ?
                                                                        'highlight' :
                                                                        null}
                                                                    id={iconTable.id}
                                                                    onClick={iconTable.onClick}
                                                                    title={iconTable.title || 'Table View'}
                                                                    type="list"
                                                                />
                                                                )}

                                                                {listJsx}
                                                            </List.Item>
                                                        );
                                                    })}
                                                </List>
                                            )}

                                            {search && (
                                                <ActionBarSearch
                                                    id={search.id}
                                                    onChange={search.onChange}
                                                    onClearClick={search.onClearClick}
                                                    onKeyDown={search.onKeyDown}
                                                    value={search.value}
                                                />
                                            )}

                                            {jsx}
                                        </Grid.Column>
                                    );
                                })}
                            </Grid>

                            {searchDataForMobile}
                        </React.Fragment>
                    )}

                    {children}
                </div>
            </header>
        );
    }
}

ActionBar.propTypes = propTypes;
ActionBar.defaultProps = defaultProps;

export default ActionBar;
