import React, {Component} from 'react';
import './NodeDetailRow.css';

import green from '../../resources/green.png';
import red from '../../resources/red.png';
import yellow from '../../resources/yellow.png';
import grey from '../../resources/grey.png';


import {Link} from 'react-router-dom';


class NodeDetailRow extends Component {


    onXMLButtonClicked(id, node_type) {

        const popup  = window.open("https://csvww1160.togewa.com:8443/orchestration/xml/" + id, "_blank");
    };


    render() {

        const node = this.props.orchestrationNode;
        const response = JSON.parse(node.response);

        let bullet = grey;

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
                throw new Error(`An error in NodeDetailRow: Verdict  ${node.verdict} is not known`);
        }


        return (
            <div className="NodeDetailRow">
                <div className="nodeDetailOverview">
                    <div id="node_type">{node.node_type}</div>
                    <div className="verdict">
                        <img id="bullet" src={bullet} alt="{grey}"></img>
                        <div id="verdict">{node.verdict}</div>
                    </div>
                    <div id="date">{node.orchestration_date} </div>
                </div>
                <div className="nodeDetailVerification">
                    <div id="verificationTitle">Verification</div>
                    <div className="verificationFile">
                        <div id="verificationFileName">File</div>
                        <div id="verificationFileValue">{response.verificationFile}</div>
                    </div>
                    <div className="verificationBefore">
                        <div id="verificationTimestampBefore">Timestamp-Before</div>
                        <div id="verificationTimestampBeforeValue">{response.verificationTimestampBefore} </div>
                    </div>
                    <div className="verificationAfter">
                        <div id="verificationTimestampAfter">Timestamp-After</div>
                        <div id="verificationTimestampBeforeValue">{response.verificationTimestampAfter} </div>
                    </div>
                </div>
                <div className="nodeDetailConfiguratorLog">
                    <div id="configuratorLogTitle">Configurator Log</div>
                    <div id="configuratorLog">{response.configuratorLog}</div>
                </div>
                <div className="nodeDetailFiles">


                    <button id="xml" type="button"
                            onClick={() => this.onXMLButtonClicked(node.xml_id, node.node_type)}
                            className="btn info">XML
                    </button>

                    <button id="logfile" type="button" className="btn info">Logfile</button>

                </div>
            </div>

        );
    }
}


export default NodeDetailRow;