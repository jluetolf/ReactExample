import React from 'react';
import './OrchestrationType.css';

import green from '../../resources/green.png';
import red from '../../resources/red.png';
import yellow from '../../resources/yellow.png';

const OrchestrationType = (props) => {

    let bullet = red;

    switch (props.verdict) {
        case 'Successful':
            bullet = green;
            break;
        case 'Pending':
            bullet = yellow;
            break;
        case 'Failed':
            bullet = red;
            break;
        default:
            throw new Error(`An error in OrchestrationType: Verdict  $(props.verdict} is not known`);
    }

    return (
        <div className="OrchestrationType">
            <div id="date">{props.date} </div>
            <div className="verdict">
                <img id="bullet" src={bullet} alt="{grey}"></img>
                <div id="verdict">{props.verdict}</div>
            </div>
            <div id="name">{props.name} Orchestration</div>
            <div id="user">{props.user} </div>


        </div>
    );


}

export default OrchestrationType;
