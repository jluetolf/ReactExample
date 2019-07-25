import React, {Component} from 'react';
import './Credentials.css';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MultipleSelect from '../MultipleSelect/MultipleSelect';
import SingleSelect from '../SingleSelect/SingleSelect';
import {withStyles} from "@material-ui/core/styles";

import axiosinstance from '../../axios';

const styles = theme => ({
    root: {
        boxShadow: 0
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
    }
});

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

        switch (this.props.selectedOrchestrationType) {
            case "FULL":

        }
    }

    getStyles = (name, personName, theme) => {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    render() {

        const {classes} = this.props;


        const serverOptions = this.props.serverList.map(function (server) {
            return {label: server, value: server}
        });

        const orchestrationTypeOptions = this.props.orchestrationTypeList.map(function (server) {
            return {label: server, value: server}
        });

        let name = "Server Selection"
        if (this.props.selectedServerList.length == 0) {
            name = "All servers are selected";
        }

        return (
            <div className="credentials">
                <fieldset>
                    <legend>Orchestration</legend>
                    <div className="credentialContainer">
                        <div className="username">
                            <div className="usernameLabel">Username</div>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="component-simple">Name</InputLabel>
                                <Input id="component-simple" className="username"
                                       boxShadow={0}
                                       value={this.props.username}
                                       onChange={this.props.onUpdatedUsername}
                                />
                            </FormControl>
                        </div>
                        <div className="password">
                            <div className="passwordLabel">Password</div>
                            <input className="passwordInput" type="text"
                                   onChange={() => this.props.onUpdatedPassword(this.passwordRef.current.value)}
                                   value={this.props.password} ref={this.passwordRef}/>
                        </div>
                        <div className="servers">
                            <MultipleSelect list={this.props.serverList}
                                            selectedServerList={this.props.selectedServerList} labelName={name}
                                            onHandleChange={this.props.onUpdatedSelectedServerList}/>

                        </div>
                        <div className="radios">
                            <SingleSelect list={this.props.orchestrationTypeList}
                                          selectedOrchestrationType={this.props.selectedOrchestrationType}
                                          labelName="Orchestration"
                                          onHandleChange={this.props.onUpdatedOrchestrationType}/>
                        </div>

                        <div className="okButton">
                            <Button variant="outlined" color="primary" onClick={this.onOkButtonHandler}>OK
                            </Button>
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
        orchestrationTypeList: state.orchestrationTypeList,
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Credentials));
