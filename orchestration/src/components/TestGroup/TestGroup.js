import React, {Component} from 'react';
import './TestGroup.css';

import Test from '../Test/Test';




const TestGroup = (props) => {

    return (
        <div className="TestGroup">
            <Test test={props.secondaryTest}  />
            <Test test={props.primaryTest} />
        </div>
    );

}

export default TestGroup;
