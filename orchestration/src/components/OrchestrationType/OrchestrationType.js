import React from 'react';
import './OrchestrationType.css';

const OrchestrationType = (props) => {

    return (
        <div className="OrchestrationType">
            <div id="date">{props.date} </div>
            <div id="name">{props.name} Orchestration</div>

        </div>
    );


}

export default OrchestrationType;
