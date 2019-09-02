import React, {Component} from 'react';
import './Summary.css';
import {connect} from "react-redux";
import instance from '../../axiosinstance';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';

class Summary extends Component {

    initializeSummary = () => {

        const url = 'orchestration/' + this.props.location.id;

        instance.get(url)
            .then(response => {
                if (JSON.stringify(this.props.summary) !== JSON.stringify(response.data)) {
                    this.props.onUpdatedSummary(response.data[0]);

                   // const car = ["Saab", "Volvo", "BMW"];
                   // this.props.onUpdatedSummary(car);
                }
            })
            .catch(error => {
                if (this.props.error !== error) {
                    this.props.onUpdateError(error.toString());
                }
            });
    }

    componentDidMount() {
        this.initializeSummary();
    }

    render () {

        let jsonString = null;
        if (this.props.summary != null) {
            //jsonString =  (<div><pre className="Summary">{JSON.stringify(this.props.summary, null, 2) }</pre></div>);
            jsonString =  <JSONPretty data={this.props.summary} theme={JSONPrettyMon}></JSONPretty>
        }

        return (
            <div>
                {jsonString}
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        summary: state.summary,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatedSummary: (summary) => dispatch({type: 'UPDATE_SUMMARY', value: summary}),
        onUpdateError: (error) => dispatch({type: 'UPDATE_ERROR', value: error})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Summary);

