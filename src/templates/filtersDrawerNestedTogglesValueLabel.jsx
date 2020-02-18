import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../atoms/icon';

const propTypes = {
    nestedTogglesData: PropTypes.shape({}).isRequired,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
};

class FiltersDrawerNestedTogglesValueLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { nestedTogglesData, onClick, option } = this.props;

        onClick(nestedTogglesData, option);
    }

    render() {
        const { option: { label } } = this.props;
        const containerClasses = ClassNames('page_filters_drawer--nested_toggles_value_label');

        return (
            <div
                className={containerClasses}
            >
                <span>{label}</span>

                <Icon
                    onClick={this.onClick}
                    size="xsmall"
                    type="times"
                />
            </div>
        );
    }
}

FiltersDrawerNestedTogglesValueLabel.propTypes = propTypes;

export default FiltersDrawerNestedTogglesValueLabel;
