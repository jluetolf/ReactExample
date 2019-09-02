import React, {Component} from 'react';
import './OrchestrationType.css';

import green from '../../resources/green.png';
import red from '../../resources/red.png';
import yellow from '../../resources/yellow.png';
import moment from 'moment';
import AlertDialog from "../../components/AlertDialog/AlertDialog";
import {Link} from 'react-router-dom';

class OrchestrationType extends Component {

    state = {
        showDialog: false
    }

    bullet = red;
    start_date = moment(this.props.date).format("DD.MM.YYYY HH:mm:ss");
    showErrorDialog = null;

    onHandleClickShowDialog = (event) => {
        if (event.target.className != "MuiButton-label") {
            this.setState({showDialog: true})
        }
    }

    onHandleClickHideDialog = (event) => {
        this.setState({showDialog: false})
    }

    render() {

        this.showErrorDialog = null;
        if (this.state.showDialog == true) {
            const title = "Orchestration " + this.props.verdict;
            this.showErrorDialog = <AlertDialog title={title} message={this.props.error}
                                                handleClose={this.onHandleClickHideDialog}/>
        }

        switch (this.props.verdict) {
            case 'Successful':
                this.bullet = green;
                break;
            case 'Pending':
                this.bullet = yellow;
                break;
            case 'Failed':
                this.bullet = red;
                break;
            default:
                throw new Error(`An error in OrchestrationType: Verdict  $(props.verdict} is not known`);
        }

        return (
            <Link style={{ textDecoration: 'none', color: 'black' }} to={{
                pathname: '/summary/' + this.props.id,
                id: this.props.id
            }}>

                <div className="OrchestrationType">
                    <div id="date">{this.start_date} </div>
                    <div className="verdict">
                        <img id="bullet" src={this.bullet} alt="{grey}"></img>
                        <div id="verdict">{this.props.verdict}</div>
                    </div>
                    <div id="name">{this.props.name} Orchestration</div>
                    <div id="user">{this.props.user} </div>


                </div>
            </Link>
        );
    }
}

export default OrchestrationType;
