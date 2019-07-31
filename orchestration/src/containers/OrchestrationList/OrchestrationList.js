import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrchestrationRow from '../../components/OrchestrationRow/OrchestrationRow';
import './OrchestrationList.css';


class OrchestrationList extends Component {




    render() {

        let fullOrchestrationRows = this.props.orchestrationList.map(row => {
            return <OrchestrationRow orchestration={row} key={row.id}/>
        });

        return (
            <div className="OrchestrationList">
                <div className="Container">
                    {fullOrchestrationRows}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
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

