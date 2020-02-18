import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import DataGridTableRow from './dataGridTableRow';
import DragListener from '../global/utils/dragListener';
import Icon from '../atoms/icon';
import Table from '../organisms/table';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    classNamePrefix: PropTypes.oneOf(['drawer--data_grid', 'page--data_grid']).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dropShadow: PropTypes.bool,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string,
    onSplitter: PropTypes.func,
    onSplitterDragEnd: PropTypes.func,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    small: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: true,
    className: undefined,
    dropShadow: false,
    fontSize: 'xsmall',
    handle: false,
    idPrefix: 'base',
    onSplitter: undefined,
    onSplitterDragEnd: undefined,
    rowProps: undefined,
    sizes: undefined,
    small: true,
    style: undefined,
};

class DataGridTable extends React.PureComponent {
    constructor() {
        super();

        this.onSplitterClick = this.onSplitterClick.bind(this);
        this.onSplitterDrag = this.onSplitterDrag.bind(this);
    }

    onSplitterClick() {
        const { onSplitter } = this.props;

        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this.handle); // eslint-disable-line react/no-find-dom-node
            handle.style.left = 0;
        });

        if (_.isFunction(onSplitter)) {
            onSplitter();
        }
    }

    onSplitterDrag({ deltaX }) {
        const { onSplitterDragEnd } = this.props;

        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this.handle); // eslint-disable-line react/no-find-dom-node
            handle.style.left = 0;
        });

        onSplitterDragEnd(deltaX);
    }


    render() {
        const {
            classNamePrefix,
            bleed,
            className,
            columns,
            data,
            dropShadow,
            fontSize,
            handle,
            id,
            idPrefix,
            rowProps,
            sizes,
            small,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', `${classNamePrefix}_table`, className);
        const bodyClasses = ClassNames({ [`${classNamePrefix}_drop_shadow`]: dropShadow });
        const isSelectable =
            !_.isUndefined(rowProps) && _.isFunction(rowProps().onClick);

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <Table
                    basic
                    className={`${classNamePrefix}_table_component`}
                    fontSize={fontSize}
                    selectable={isSelectable}
                    small={small}
                    stretch={bleed ? 'very' : null}
                >
                    <Table.Header>
                        <Table.Row>
                            {_.map(columns, (column, index) => {
                                const hasSplitter =
                                    idPrefix === 'column' &&
                                    handle &&
                                    _.last(columns) === column;

                                return (
                                    <Table.HeaderCell
                                        className={`${classNamePrefix}_table_header_cell`}
                                        key={`tableBodyRow-${index}`}
                                    >
                                        {column.header}
                                        {hasSplitter && (
                                            <DragListener
                                                className={`${classNamePrefix}_table_header_handle`}
                                                onClick={this.onSplitterClick}
                                                onDrag={this.onSplitterDrag}
                                                ref={(ref) => { this.handle = ref; }}
                                            >
                                                <Icon
                                                    color="static"
                                                    compact
                                                    size="small"
                                                    type="splitter"
                                                />
                                            </DragListener>
                                        )}
                                    </Table.HeaderCell>
                                );
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body className={bodyClasses}>
                        {_.map(data, (row, index) => (
                            <DataGridTableRow
                                classNamePrefix={classNamePrefix}
                                columns={columns}
                                handle={handle}
                                id={id}
                                idPrefix={idPrefix}
                                isClickable={isSelectable}
                                key={`tableBodyRow-${row.id || index}`}
                                row={row}
                                rowIndex={index}
                                rowProps={rowProps(row)}
                                sizes={sizes}
                            />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

DataGridTable.propTypes = propTypes;
DataGridTable.defaultProps = defaultProps;

export default DataGridTable;
