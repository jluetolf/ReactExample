import React from 'react';
import './OrchestrationRow.css';
import OrchestrationType from "../OrchestrationType/OrchestrationType";
import NodeGroup from "../NodeGroup/NodeGroup";
import TestGroup from "../TestGroup/TestGroup";

const OrchestrationRow = (props) => {


    let secondaryListDRF = [];
    let secondaryListSS7F = [];
    let secondaryListDSF = [];
    let secondaryListDNSF = [];
    let primaryListDRF = [];
    let primaryListSS7F = [];
    let primaryListDSF = [];
    let primaryListDNSF = [];

    let secondaryPreOrchestrationTestList = [];
    let secondaryPostOrchestrationTestList = [];
    let primaryPreOrchestrationTestList = [];
    let primaryPostOrchestrationTestList = [];

    let nodeGroupList = [];
    let testGroupPreOrchestrationList = null;
    let testGroupPostOrchestrationList = null;


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
                    throw new Error(`An error in OrchestrationRow: Node type ${node.node_type} is not known`);
            }
        }
    }
    for (let index = 0; index < props.orchestration.tests.length; index++) {
        let test = props.orchestration.tests[index];

        switch (test.test_type) {
            case "PreOrchestration":
                switch (test.cluster_type) {
                    case "secondary":
                        secondaryPreOrchestrationTestList.push(test);
                        break;
                    case "primary":
                        primaryPreOrchestrationTestList.push(test);
                        break;
                    default:
                        throw new Error(`An error in OrchestrationRow: test.cluster_type ${test.cluster_type} is not known`);
                }
                break;
            case "PostOrchestration":
                switch (test.cluster_type) {
                    case "secondary":
                        secondaryPostOrchestrationTestList.push(test);
                        break;
                    case "primary":
                        primaryPostOrchestrationTestList.push(test);
                        break;
                    default:
                        throw new Error(`An error in OrchestrationRow: test.cluster_type ${test.cluster_type} is not known`);
                }
                break;
            default:
                throw new Error(`An error in OrchestrationRow: test.test_type ${test.test_type} is not known`);
        }
    }

    if (secondaryListDRF.length > 0 || primaryListDRF.length > 0) {
        nodeGroupList.push(<NodeGroup secondaryNodes={secondaryListDRF} primaryNodes={primaryListDRF} nodeType="DRF"
                                      id={props.orchestration.id} key="DRF"/>);
    }
    if (secondaryListSS7F.length > 0 || primaryListSS7F.length > 0) {
        nodeGroupList.push(<NodeGroup secondaryNodes={secondaryListSS7F} primaryNodes={primaryListSS7F} nodeType="SS7F"
                                      id={props.orchestration.id} key="SS7F"/>);
    }
    if (secondaryListDSF.length > 0 || primaryListDSF.length > 0) {
        nodeGroupList.push(<NodeGroup secondaryNodes={secondaryListDSF} primaryNodes={primaryListDSF} nodeType="DSF"
                                      id={props.orchestration.id} key="DSF"/>);
    }
    if (secondaryListDNSF.length > 0 || primaryListDNSF.length > 0) {
        nodeGroupList.push(<NodeGroup secondaryNodes={secondaryListDNSF} primaryNodes={primaryListDNSF} nodeType="DNSF"
                                      id={props.orchestration.id} key="DNSF"/>);
    }

    if (secondaryPreOrchestrationTestList.length > 0 || primaryPreOrchestrationTestList.length > 0) {
        testGroupPreOrchestrationList = <TestGroup secondaryTest={secondaryPreOrchestrationTestList}
                                                   primaryTest={primaryPreOrchestrationTestList}/>;
    }
    if (secondaryPostOrchestrationTestList.length > 0 || primaryPostOrchestrationTestList.length > 0) {
        testGroupPostOrchestrationList = <TestGroup secondaryTest={secondaryPostOrchestrationTestList}
                                                    primaryTest={primaryPostOrchestrationTestList}/>;
    }


    return (
        <div className="OrchestrationRow">
            <OrchestrationType
                id={props.orchestration.id}
                name={props.orchestration.orchestration_type}
                date={props.orchestration.start_date}
                user={props.orchestration.username}
                verdict={props.orchestration.verdict}
                error={props.orchestration.error}/>

            {testGroupPreOrchestrationList}
            {nodeGroupList}
            {testGroupPostOrchestrationList}
        </div>
    );
}

export default OrchestrationRow;