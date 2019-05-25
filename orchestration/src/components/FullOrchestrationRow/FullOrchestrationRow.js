import React from 'react';
import './FullOrchestrationRow.css';
import Node from '../../components/Node/Node';
import Test from '../../components/Test/Test';

const FullOrchestrationRow = (props) => {

    let testDictionary = [];
    let secondaryDictionary = [];
    let primaryDictionary = [];

    for (let index = 0; index < props.orchestration.nodes.length; index++) {
        let node = props.orchestration.nodes[index];
        if (node.cluster_type === "secondary") {
            secondaryDictionary[node.id] = (
                <Node orchestrationNode={node}  key={node.id}/>
            )
        }
        if (node.cluster_type === "primary") {
            primaryDictionary[node.id] = (
                <Node orchestrationNode={node}  key={node.id}/>
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
        <div>
            <div className="FullOrchestrationRow">
                <p>Secondary Nodes Orchestration</p>
                {testDictionary[1]}
                {secondaryDictionary}
                {testDictionary[2]}
            </div>
            <div></div>
            <div className="FullOrchestrationRow">
                <p>Primary Nodes Orchestration</p>
                {primaryDictionary}
                {testDictionary[3]}
            </div>
        </div>
    );
}

export default FullOrchestrationRow;