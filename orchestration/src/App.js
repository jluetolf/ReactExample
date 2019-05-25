import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import DateRangePicker from './components/DateRangePicker/DateRangePicker';
import OrchestrationList from './containers/OrchestrationList/OrchestrationList';

class App extends Component {

    render() {
        return (

            <BrowserRouter>
                <div className="App">
                    <DateRangePicker/>
                    <OrchestrationList/>

                    {/*<ListView/>*/}
                    {/*<Detail/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

