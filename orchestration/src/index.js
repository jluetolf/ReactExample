import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import instance from './axiosinstance';



import intitialize from './store/reducer';
import reducer from './store/reducer';


instance.get('ManagementServers')
    .then(response => {

        let serverList = [];
        serverList.addAll(response.data.ss7f.service);
    })
    .catch(error => {

    });


const store = createStore(reducer);


ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
