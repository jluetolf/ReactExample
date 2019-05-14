import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Detail from '../components/Detail/Detail';
import ListView from '../components/DateRangePicker/DateRangePicker';

class App extends Component {


    render() {
        return (

            <BrowserRouter>
                <div className="App">

                    <ListView/>
                    <Detail/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

