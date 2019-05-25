import React from 'react';
import './Node.css';

const Node = (props) => {

    return (
        <div className="Node" key={props.id}>
            <p>Id is {props.id}</p>
            <p>Verdict is {props.verdict}</p>
            <p>Code is {props.code}</p>
        </div>
    );


}

export default Node;
