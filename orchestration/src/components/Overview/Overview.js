import React, {Component} from 'react';
import './Overview.css';
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import OrchestrationList from '../../containers/OrchestrationList/OrchestrationList';

class Overview extends Component {

    render() {
        return (

            <div className="Container">
                <DateRangePicker/>
                <OrchestrationList/>
            </div>


        );
    }
}

export default Overview;

