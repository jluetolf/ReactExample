import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import './DatePicker.css';
import { connect } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class DateRangePicker extends Component {


    render() {
        return (
            <div className="DatePicker">
                <div className="DatePickerLabel">From:</div>
                <DatePicker className='DatePickerInput'
                    selected={this.props.startDate}
                    onChange={(date) => this.props.onStartDateChange(date.setHours(0,0,0,0))}
                    dateFormat="MMMM d, yyyy"
                />

                <div className="DatePickerLabel">To:</div>
                <DatePicker className='DatePickerInput'
                    selected={this.props.endDate}
                    onChange={(date) => this.props.onEndDateChange(date.setHours(24,0,0,-1))}
                    dateFormat="MMMM d, yyyy"
                />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStartDateChange: (date) => dispatch({type: 'START_DATE_CHANGED', value: date}),
        onEndDateChange: (date) => dispatch({type: 'END_DATE_CHANGED', value: date})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePicker);
