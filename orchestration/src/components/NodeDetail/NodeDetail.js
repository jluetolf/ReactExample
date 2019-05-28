import React, {Component} from 'react';
import './NodeDetail.css';
import NodeDetailRow from '../NodeDetailRow/NodeDetailRow';
import {withRouter, Redirect} from 'react-router-dom';


class NodeDetail extends Component {


    render () {

        if (this.props.location.orchestrationNodes == null) {
            return <Redirect to='/' />
        }

        const detailList = this.props.location.orchestrationNodes.map(node => {
            return <NodeDetailRow orchestrationNode={node} key={node.id}/>

        });

        return (
            <div className="NodeDetail">
                {detailList}
            </div>

        );
    }
}

export default withRouter(NodeDetail);