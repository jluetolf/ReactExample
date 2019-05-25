import React, {Component} from 'react';
import axiosinstance from '../../axios';
import {connect} from 'react-redux';
import FullOrchestrationRow from '../../components/FullOrchestrationRow/FullOrchestrationRow';

import moment from 'moment';

class OrchestrationList extends Component {

    dateFormat = 'DD.MM.YYYY HH:mm:ss';

    fullOrchestrationRows = [];
    fromDate = new Date();
    toDate = new Date();


    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    }


    update() {


        if ( this.fromDate !== this.props.startDate || this.toDate !== this.props.endDate) {

            this.fromDate = this.props.startDate;
            this.toDate = this.props.endDate;


            const dateRange = {
                fromDate:  moment(this.props.startDate).format(this.dateFormat),
                toDate: moment(this.props.endDate).format(this.dateFormat)
            }


            axiosinstance.post('/Orchestrations', dateRange)
                .then(response => {
                    if (JSON.stringify(this.props.orchestrationList) !== JSON.stringify(response.data)) {
                        this.fullOrchestrationRows = response.data.map(row => {
                            return <FullOrchestrationRow orchestration={row} key={row.id}/>
                        });

                        this.props.onUpdatedOrchestrationList(response.data);
                    }
                })
                .catch(error => {
                    if (this.props.error !== error) {
                        this.props.onUpdateError(error);
                    }
                });
        }
    }


    render() {

        return (
            <div>
                {this.fullOrchestrationRows}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
        orchestrationList: state.orchestrationList,
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


export default connect(mapStateToProps, mapDispatchToProps)(OrchestrationList);

