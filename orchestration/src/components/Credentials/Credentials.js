import React, {Component} from 'react';
import './Credentials.css';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import Select  from 'react-select';




class Credentials extends Component {


    handleChange(event) {
        this.setState(event.value);
    }


    onServerListChangeHandler = (value) => {
        console.log(value);

    }

    render() {

        var self = this,
            options = this.props.serverList.map(function (server) {
                return {label: server, value: server}
            });

        return (
            <div className="credentials">
                <fieldset>
                    <legend>Orchestration</legend>
                    <div className="credentialContainer">
                        <div className="username">
                            <div className="usernameLabel">Username</div>
                            <input className="usernameInput" type="text" onChange={this.props.usernameChanged}/>
                        </div>
                        <div className="password">
                            <div className="passwordLabel">Password</div>
                            <input className="passwordInput" type="text" onChange={this.props.passwordChanged}/>
                        </div>
                        <Select
                            name="server-selection"
                            options={options}
                            isMulti ="true"
                            onChange={this.onServerListChangeHandler}
                        />

                    </div>

                </fieldset>
            </div>


        );

    }
}


const mapStateToProps = state => {
    return {
        serverList: state.serverList,
        selectedServerList: state.selectedServerList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatedOrchestrationList: (orchestrationList) => dispatch({
            type: 'UPDATE_ORCHESTRATION_LIST',
            value: orchestrationList
        }),
        onUpdateError: (error) => dispatch({type: 'UPDATE_ERROR', value: error})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
