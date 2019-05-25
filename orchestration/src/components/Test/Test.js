import React from 'react';
import './Test.css';

const Test = (props) => {

    return (
        <div className="Test" key={props.id}>
            <p>Id is {props.id}</p>
            <p>Verdict is {props.verdict}</p>
        </div>
    );
}

export default Test;