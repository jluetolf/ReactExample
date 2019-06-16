import React from 'react';
import './Node.css';
import green from '../../resources/green.png';
import red from '../../resources/red.png';
import yellow from '../../resources/yellow.png';
import grey from '../../resources/grey.png';
import {Link} from 'react-router-dom';


const Node = (props) => {

    let bullet = grey;
    const serverList = [];

    for (let index = 0; index < props.orchestrationNodes.length; index++) {
        let node = props.orchestrationNodes[index];

        serverList.push(node.server);

        switch (node.verdict) {
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
                throw new Error(`An error in Node: Verdict  ${node.verdict} is not known`);
        }
    }


    let servers = " Server";
    if (props.orchestrationNodes.length > 1) {
        servers = " Servers";
    }

    servers = props.orchestrationNodes.length + servers;

    return (
        <div className="Node">
            <img id="bullet" src={bullet} alt="{grey}"></img>
            <div id="node_type">{props.nodeType}</div>

            <div id="cluster_name" title={serverList}>{servers}</div>

            <Link to= {{pathname: '/detail/' + props.nodeType + '-' + props.id , orchestrationNodes: props.orchestrationNodes, nodeType: props.nodeType, id: props.id}}>
                <button id="detail" type="button" className="btn info">Detail</button>
            </Link>
        </div>

    );
}

export default Node;
