import React, {Component} from 'react';
import './NodeDetail.css';
import NodeDetailRow from '../NodeDetailRow/NodeDetailRow';
import NodeDNSFDetailRow from '../NodeDNSFDetailRow/NodeDNSFDetailRow';
import {withRouter, Redirect} from 'react-router-dom';


class NodeDetail extends Component {


    render() {


        if (this.props.location.orchestrationNodes == null || this.props.location.nodeType == null) {
            return <Redirect to='/'/>
        }

        let detailList = null;
        const nodeType = this.props.location.nodeType;

        switch (nodeType) {
            case "DRF":
            case "DSF":
            case "SS7F":
                detailList = this.props.location.orchestrationNodes.map(node => {
                    return <NodeDetailRow orchestrationNode={node} key={node.id}/>
                });
                break;
            case "DNSF":
                detailList = this.props.location.orchestrationNodes.map(node => {
                    return <NodeDNSFDetailRow orchestrationNode={node} key={node.id}/>
                });
                break;
            default:
                throw new Error(`An error in NodeDetail: Node type  ${nodeType} is not known`);
        }


        return (

            <div className="NodeDetail">
                {detailList}
            </div>

        );
    }
}

export default withRouter(NodeDetail);