import React, {Component} from 'react';
import axiosinstance from '../../axiosinstance';
import {Link, withRouter, Redirect} from 'react-router-dom';
import './XMLDisplay.css';

var format = require('xml-formatter');

//import moment from 'moment';

class XMLDisplay extends Component {

    state = {
        xml: null,
        error: null
    };

    data = null;

    render() {

        if (this.props.location.xml_id == null) {
            return <Redirect to='/'/>
        }


        return (
            <div></div>

        );

        // if (this.props.location.xml_id == null) {
        //     return <Redirect to='/'/>
        // }
        //
        // const xmldata = {
        //     id: this.props.location.xml_id
        // }
        //
        // if (this.state.xml == null && this.state.error == null) {
        //     this.data = "Loading..";
        //     axiosinstance.post('/xml', xmldata)
        //         .then(response => {
        //             this.data = (<a href="http://localhost:55778/xml/69" target="_blank"></a>)
        //             this.setState({xml: response.data, error: null});
        //
        //         })
        //         .catch(error => {
        //             this.data = error.toString();
        //             this.setState({error: error});
        //
        //         });
        // }
        //
        //
        //
        // return (
        //     <div className="XMLDisplay">
        //             {this.data}
        //     </div>

    }
}

export default XMLDisplay;
