import React from 'react';
import './FullOrchestrationRow.css';
import Node from '../../components/Node/Node';
import Test from '../../components/Test/Test';
import OrchestrationType from "../OrchestrationType/OrchestrationType";
import Cluster from "../Cluster/Cluster";

const FullOrchestrationRow = (props) => {


    let secondaryListDRF = [];
    let secondaryListSS7F = [];
    let secondaryListDSF = [];
    let secondaryListDNSF = [];
    let primaryListDRF = [];
    let primaryListSS7F = [];
    let primaryListDSF = [];
    let primaryListDNSF = [];


    let secondaryNodeList = [];
    let primaryNodeList = []
    let testNodeDictionary = [];

    for (let index = 0; index < props.orchestration.nodes.length; index++) {
        let node = props.orchestration.nodes[index];
        if (node.cluster_type === "secondary") {
            switch (node.node_type) {
                case "DRF":
                    secondaryListDRF.push(node);
                    break;
                case "SS7F":
                    secondaryListSS7F.push(node);
                    break;
                case "DSF":
                    secondaryListDSF.push(node);
                    break;
                case "DNSF":
                    secondaryListDNSF.push(node);
                    break;
                default:
                    throw new Error(`An error in FullOrchestrationRow: Node type ${node.node_type} is not known`);
            }
        }
        if (node.cluster_type === "primary") {
            switch (node.node_type) {
                case "DRF":
                    primaryListDRF.push(node);
                    break;
                case "SS7F":
                    primaryListSS7F.push(node);
                    break;
                case "DSF":
                    primaryListDSF.push(node);
                    break;
                case "DNSF":
                    primaryListDNSF.push(node);
                    break;
                default:
                    throw new Error(`An error in FullOrchestrationRow: Node type ${node.node_type} is not known`);
            }
        }
    }

    secondaryNodeList.push(<Node orchestrationNodes={secondaryListDRF} nodeType="DRF" key="DRF"/>);
    secondaryNodeList.push(<Node orchestrationNodes={secondaryListSS7F} nodeType="SS7F" key="SS7F"/>);
    secondaryNodeList.push(<Node orchestrationNodes={secondaryListDSF} nodeType="DSF" key="DSF"/>);
    secondaryNodeList.push(<Node orchestrationNodes={secondaryListDNSF} nodeType="DNSF" key="DNSF"/>);

    primaryNodeList.push(<Node orchestrationNodes={primaryListDRF} nodeType="DRF" key="DRF"/>);
    primaryNodeList.push(<Node orchestrationNodes={primaryListSS7F} nodeType="SS7F" key="SS7F"/>);
    primaryNodeList.push(<Node orchestrationNodes={primaryListDSF} nodeType="DSF" key="DSF"/>);
    primaryNodeList.push(<Node orchestrationNodes={primaryListDNSF} nodeType="DNSF" key="DNSF"/>);


    for (let index = 0; index < props.orchestration.tests.length; index++) {
        let test = props.orchestration.tests[index];
        testNodeDictionary[test.test_type] = (
            <Test orchestrationNode={test} key={test.id}/>
        )
    }
    return (
        <div className="FullOrchestrationRow">
            <OrchestrationType name={props.orchestration.orchestrationType}
                               date={props.orchestration.orchestration_date}
                               user={props.orchestration.orchestration_user} />
            <div className="Orchestration">
                <div className="OrchestrationCluster">
                    <Cluster cluster="Secondary"/>
                    {testNodeDictionary[1]}
                    {secondaryNodeList}
                    {testNodeDictionary[2]}
                </div>
                <div className="OrchestrationCluster">
                    <Cluster cluster="Primary"/>
                    {testNodeDictionary[2]}
                    {primaryNodeList}
                    {testNodeDictionary[3]}
                </div>
            </div>
        </div>
    );
}

export default FullOrchestrationRow;