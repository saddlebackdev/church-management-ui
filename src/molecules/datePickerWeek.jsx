'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import DatePickerDay from './datePickerDay';
import PropTypes from 'prop-types';
import React from 'react';

class DatePickerWeek extends React.PureComponent {
    constructor() {
        super();

        this._onDayClick = this._onDayClick.bind(this);
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-week');

        return (
            <div className={containerClasses}>
                {this._renderDays()}
            </div>
        );
    }

    _onDayClick(date) {
        const { onDayClick } = this.props;

        if (!_.isUndefined(onDayClick)) {
            onDayClick(date);
        }
    }

    _renderDays() {
        const {
            date,
            dateFrom,
            dateInView,
            dateTo,
            events,
            excludeDates,
            filterDates,
            includeDates,
            maxDate,
            minDate,
            mode,
            month,
            range,
            rangeFrom,
            rangeTo,
        } = this.props;
        const startOfWeek = dateInView.clone().startOf('week');

        return _.map([ 0, 1, 2, 3, 4, 5, 6 ], day => {
            const dateInView = startOfWeek.clone().add(day, 'days');

            return (
                <DatePickerDay
                    date={date}
                    dateFrom={dateFrom}
                    dateInView={dateInView}
                    dateTo={dateTo}
                    events={events}
                    excludeDates={excludeDates}
                    filterDates={filterDates}
                    includeDates={includeDates}
                    key={day}
                    maxDate={maxDate}
                    minDate={minDate}
                    mode={mode}
                    month={month}
                    onDayClick={this._onDayClick}
                    range={range}
                    rangeFrom={rangeFrom}
                    rangeTo={rangeTo}
                />
            );
        });
    }
}

DatePickerWeek.propTypes = {
    date: PropTypes.object,
    dateEnd: PropTypes.object,
    dateInView: PropTypes.object.isRequired,
    dateTo: PropTypes.object,
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    mode: PropTypes.string,
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
};

export default DatePickerWeek;
