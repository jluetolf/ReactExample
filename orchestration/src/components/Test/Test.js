import React from 'react';
import './Test.css';

import green from '../../resources/green.png';
import red from '../../resources/red.png';
import yellow from '../../resources/yellow.png';

import {Link} from 'react-router-dom';

const Test = (props) => {

    let bullet = green;
    const serverList = [];

    for (let index = 0; index < props.test.length; index++) {
        let test = props.test[index];

        serverList.push(test.server);

        switch (test.verdict) {
            case 'Successful':
                if (bullet !==  red) {
                    bullet = green;
                }
                break;
            case 'Pending':
                if (bullet !==  red) {
                    bullet = yellow;
                }
                break;
            case 'Failed':
                bullet = red;
                break;
            default:
                throw new Error(`An error in Node: Verdict  ${test.verdict} is not known`);
        }
    }


    let servers = " Server";
    if (props.test.length > 1) {
        servers = " Servers";
    }

    servers = serverList.length + servers;

    return (
        <div className="Test">
            <img id="bullet" src={bullet} alt="{green}"></img>
            <div id="test_name">Test</div>

            <div id="cluster_name" title={serverList}>{servers}</div>
            <Link to= {{pathname: '/detail', orchestrationNodes: props.orchestrationNodes}}>
                <button id="detail" type="button" className="btn info">Detail</button>
            </Link>
        </div>
    );
}

export default Test;