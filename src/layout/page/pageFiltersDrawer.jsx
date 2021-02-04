import {
    noop,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import FiltersDrawer from '../../surfaces/filtersDrawer';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isDirty: PropTypes.bool,
    isFiltering: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onApply: PropTypes.func,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    rows: PropTypes.arrayOf(PropTypes.shape({})),
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    isDirty: false,
    onApply: noop,
    onClear: noop,
    onClose: noop,
    rows: undefined,
    style: {},
};

function PageFiltersDrawer(props) {
    const {
        children,
        className,
        id,
        isDirty,
        isFiltering,
        isOpen,
        onApply,
        onClear,
        onClose,
        rows,
        style,
    } = props;

    return (
        <FiltersDrawer
            className={className}
            id={id}
            isDirty={isDirty}
            isFiltering={isFiltering}
            isOpen={isOpen}
            moduleType="page"
            onApply={onApply}
            onClear={onClear}
            onClose={onClose}
            rows={rows}
            style={style}
        >
            {children}
        </FiltersDrawer>
    );
}

PageFiltersDrawer.propTypes = propTypes;
PageFiltersDrawer.defaultProps = defaultProps;

export default PageFiltersDrawer;
