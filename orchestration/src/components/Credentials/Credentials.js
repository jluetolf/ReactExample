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


const styles = theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
    }
});

class User {
    username = null;
    password = null;
}

class PartialServiceList extends User {
    service = [];
}

class Credentials extends Component {

    constructor(props) {
        super(props);
    }


    onOkButtonHandler = (value) => {
        console.log(value);


        let requestBody = null;
        let requestURL = null;


        switch (this.props.selectedOrchestrationType) {
            case "Full":
                requestBody = new User();
                requestURL = 'full';
                break;
            case "DRF":
                requestBody = new PartialServiceList();
                requestBody.service = this.props.selectedServerList;
                requestURL = 'drf';
                break;
            case "DSF":
                requestBody = new PartialServiceList();
                requestBody.service = this.props.selectedServerList;
                requestURL = 'dsf';
                break;
            case "SS7F":
                requestBody = new PartialServiceList();
                requestBody.service = this.props.selectedServerList;
                requestURL = 'ss7f';
                break;
            case "DNSF":
                requestBody = new PartialServiceList();
                requestBody.service = this.props.selectedServerList;
                requestURL = 'dnsf';
                break;
        }

        requestBody.username = this.props.username;
        requestBody.password = this.props.password;


        this.props.axiosinstance.post(requestURL, requestBody)
            .then(response => {

            })
            .catch(error => {
                let errorMessage = error.toString();
                if (error.response != null && error.response.status) {
                    switch (error.response.status) {
                        case 401:
                            errorMessage = "Unauthorized: Verfiy your username and/or password";
                            break;
                    }
                }
                this.props.onUpdateError(errorMessage);
            });
    }



    render() {

        const {classes} = this.props;

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
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="component-simple">Name</InputLabel>
                                <Input id="component-simple" className="username"
                                       value={this.props.username}
                                       onChange={(event) => this.props.onUpdatedUsername(event.target.value)}
                                />
                            </FormControl>
                        </div>
                        <div className="password">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="component-simple">Password</InputLabel>
                                <Input type="password" id="component-simple" className="password"
                                       value={this.props.password}
                                       onChange={(event) => this.props.onUpdatedPassword(event.target.value)}
                                />
                            </FormControl>
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
        axiosinstance: state.axiosinstance,
        serverList: state.serverList,
        orchestrationTypeList: state.orchestrationTypeList,
        selectedServerList: state.selectedServerList,
        selectedOrchestrationType: state.selectedOrchestrationType,
        username: state.username,
        password: state.password,
        error: state.error
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
