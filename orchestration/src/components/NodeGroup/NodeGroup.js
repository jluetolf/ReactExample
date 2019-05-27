import React, {Component} from 'react';
import './NodeGroup.css';

import Node from '../Node/Node';

import {  Link} from 'react-router-dom';

const NodeGroup = (props) => {

    return (
        <div className="NodeGroup">
        <Node orchestrationNodes={props.secondaryNodes} nodeType={props.nodeType} />
        <Node orchestrationNodes={props.primaryNodes} nodeType={props.nodeType} />

            <Link to= {{pathname: '/detail', orchestrationNodes: props.orchestrationNodes}}>
                <button type="button" className="btn info">Rollback</button>
            </Link>
        </div>
    )
}



export default NodeGroup;
