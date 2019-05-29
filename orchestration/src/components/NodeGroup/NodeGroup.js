import React, {Component} from 'react';
import './NodeGroup.css';

import Node from '../Node/Node';

import {  Link} from 'react-router-dom';

const NodeGroup = (props) => {

    return (
        <div className="NodeGroup">
        <Node orchestrationNodes={props.secondaryNodes} nodeType={props.nodeType} id={props.id}/>
        <Node orchestrationNodes={props.primaryNodes} nodeType={props.nodeType} id={props.id}/>

            <Link to= {{pathname: '/detail/' + props.nodeType + '-' + props.id , orchestrationNodes: props.orchestrationNodes, nodeType: props.nodeType, id: props.id}}>
                <button type="button" className="btn info">Rollback</button>
            </Link>
        </div>
    )
}



export default NodeGroup;
