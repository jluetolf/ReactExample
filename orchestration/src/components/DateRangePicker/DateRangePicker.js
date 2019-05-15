import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import './DatePicker.css';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListView from '../ListView/ListView';

class DateRangePicker extends Component {


    state = {
        startDate: new Date(),
        endDate: new Date()
    };


    handleStartDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleEndDateChange = date => {
        this.setState({
            endDate: date
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    }

    render() {
        return (
            <div className="DatePicker">
                <div className="DatePickerLabel">From:</div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartDateChange}
                    dateFormat="MMMM d, yyyy"
                />

                <div className="DatePickerLabel">To:</div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleEndDateChange}
                    dateFormat="MMMM d, yyyy"
                />

            </div>
        );
    }
}

export default DateRangePicker;