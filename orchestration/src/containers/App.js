import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Detail from '../components/Detail/Detail';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Detail/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

