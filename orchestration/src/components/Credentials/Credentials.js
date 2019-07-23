import React, {Component} from 'react';
import './Credentials.css';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import Select from 'react-select';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';


class Credentials extends Component {

    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }



    handleChange(event) {
        this.setState(event.value);
    }


    onOkButtonHandler = (value) => {
        console.log(value);

    }

    render() {

        var self = this,
            options = this.props.serverList.map(function (server) {
                return {label: server, value: server}
            });


        const FULL = this.props.selectedOrchestrationType == "FULL" ? "active" : null;
        const DRF = this.props.selectedOrchestrationType == "DRF" ? "active" : null;
        const DSF = this.props.selectedOrchestrationType == "DSF" ? "active" : null;
        const SS7F = this.props.selectedOrchestrationType == "SS7F" ? "active" : null;
        const DNSF = this.props.selectedOrchestrationType == "DNSF" ? "active" : null;

        return (
            <div className="credentials">
                <fieldset>
                    <legend>Orchestration</legend>
                    <div className="credentialContainer">
                        <div className="username">
                            <div className="usernameLabel">Username</div>
                            <input className="usernameInput" type="text" onChange={() =>this.props.onUpdatedUsername(this.usernameRef.current.value)}  value={this.props.username} ref={this.usernameRef}/>
                        </div>
                        <div className="password">
                            <div className="passwordLabel">Password</div>
                            <input className="passwordInput" type="text" onChange={() => this.props.onUpdatedPassword(this.passwordRef.current.value)} value={this.props.password}  ref={this.passwordRef}/>
                        </div>
                        <div className="servers">
                            <div className="serverLabel">Server Selection</div>
                            <Select
                                value={this.props.selectedServerList}
                                name="server-selection"
                                options={this.props.serverList}
                                isMulti="true"
                                onChange={this.props.onUpdatedSelectedServerList}
                                placeholder="All servers are selected"

                            />
                        </div>
                        <div className="radios">
                            <div className="radiosLabel">Orchestration Type</div>
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className={"btn btn-secondary " + FULL}
                                       onClick={() => this.props.onUpdatedOrchestrationType("FULL")}>
                                    <input type="radio" name="options" id="FULL" autoComplete="off"/> FULL
                                </label>
                                <label className={"btn btn-secondary " + DRF}
                                       onClick={() => this.props.onUpdatedOrchestrationType("DRF")}>
                                    <input type="radio" name="options" id="DRF" autoComplete="off" /> DRF
                                </label>
                                <label className={"btn btn-secondary " + DSF}
                                       onClick={() => this.props.onUpdatedOrchestrationType("DSF")}>
                                    <input type="radio" name="options" id="DSF" autoComplete="off" /> DSF
                                </label>
                                <label className={"btn btn-secondary " + SS7F}
                                       onClick={() => this.props.onUpdatedOrchestrationType("SS7F")}>
                                    <input type="radio" name="options" id="SS7F" autoComplete="off" /> SS7F
                                </label>
                                <label className={"btn btn-secondary " + DNSF}
                                       onClick={() => this.props.onUpdatedOrchestrationType("DNSF")}>
                                    <input type="radio" name="options" id="DNSF" autoComplete="off" /> DNSF
                                </label>
                            </div>
                        </div>
                        <div className="okButton">
                            <button type="button" onClick={this.onOkButtonHandler} className="btn btn-outline-dark">OK
                            </button>
                        </div>
                    </div>

                </fieldset>
            </div>


        );

    }
}


const mapStateToProps = state => {
    return {
        serverList: state.serverList,
        selectedServerList: state.selectedServerList,
        selectedOrchestrationType: state.selectedOrchestrationType,
        username: state.username,
        password: state.password
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatedSelectedServerList: (serverList) => dispatch({type: 'UPDATE_SELECTED_SERVER_LIST', value: serverList}),
        onUpdatedOrchestrationType: (type) => dispatch({type: 'UPDATE_SELECTED_ORCHESTRATION_TYPE', value: type}),
        onUpdatedUsername: (username) => dispatch({type: 'UPDATE_USERNAME', value: username}),
        onUpdatedPassword: (password) => dispatch({type: 'UPDATE_PASSWORD', value: password}),
        onUpdateError: (error) => dispatch({type: 'UPDATE_ERROR', value: error})

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
