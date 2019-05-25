import React from 'react';
import './Node.css';
import green from '../../resources/green.png';
import red from '../../resources/red.png';
import yellow from '../../resources/yellow.png';
import 'bootstrap/dist/css/bootstrap.css';


const Node = (props) => {

    let bullet = red;

    switch (props.orchestrationNode.verdict) {
        case 'Successful':
            bullet = green;
            break;
        case 'Pending':
            bullet = yellow;
            break;
        default:
            bullet = red;
            break;
    }


    return (
        <div className="Node">
            <div className="FirstRow">
                <img id="bullet" src={bullet} alt="{green}"></img>
                <div id="node_type">{props.orchestrationNode.node_type}</div>
                <div id="cluster_name">{props.orchestrationNode.cluster_name}</div>
            </div>
            <div className="SecondRow">
                <button type="button" className="btn info">Orchestrate</button>
                <button id="detail" type="button" className="btn info">Detail</button>
            </div>
        </div>

    );


}

export default Node;
