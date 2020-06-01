import React from 'react';
import './NodeData.css';


function NodeData(props) {

    var nodeData = '{...}';
    var creationTime = '2020-07-03T00:00:00Z'
    var numberOfChildren = 13;
    return (
        <div >
            <p>Node data: {props.nodeData}</p>
            <p>Node creation time: {props.creationTime}</p>
            <p>Number of children: {props.numberOfChildren}</p>
        </div>
    );
}

export default NodeData;
