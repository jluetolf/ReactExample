import React from 'react';
import './FullOrchestrationRow.css';
import Node from '../../components/Node/Node';
import Test from '../../components/Test/Test';
import OrchestrationType from "../OrchestrationType/OrchestrationType";
import Cluster from "../Cluster/Cluster";

const FullOrchestrationRow = (props) => {

    let testDictionary = [];
    let secondaryDictionary = [];
    let primaryDictionary = [];

    for (let index = 0; index < props.orchestration.nodes.length; index++) {
        let node = props.orchestration.nodes[index];
        if (node.cluster_type === "secondary") {
            secondaryDictionary[node.id] = (
                <Node orchestrationNode={node} key={node.id}/>
            )
        }
        if (node.cluster_type === "primary") {
            primaryDictionary[node.id] = (
                <Node orchestrationNode={node} key={node.id}/>
            )
        }
    }

    for (let index = 0; index < props.orchestration.tests.length; index++) {
        let test = props.orchestration.tests[index];
        testDictionary[test.test_type] = (
            <Test orchestrationNode={test} key={test.id}/>
        )
    }
    return (
        <div className="FullOrchestrationRow">
            <OrchestrationType name={props.orchestration.orchestrationType}/>
            <div className="Orchestration">
                <div className="OrchestrationCluster">
                    <Cluster cluster="Secondary"/>
                    {testDictionary[1]}
                    {secondaryDictionary}
                    {testDictionary[2]}
                </div>
                <div className="OrchestrationCluster">
                    <Cluster cluster="Primary"/>
                    {primaryDictionary}
                    {testDictionary[3]}
                </div>
            </div>
        </div>
    );
}

export default FullOrchestrationRow;