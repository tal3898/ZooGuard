import React from 'react';
import './NodeData.css';


function NodeData(props) {

    var nodeData = '{...}';
    var creationTime = '2020-07-03T00:00:00Z'
    var numberOfChildren = 13;
    return (
        <div >
            <p>data: {props.nodeData}</p>
            <p>creation time (ctime): {props.creationTime}</p>
            <p>modification time (mtime): {props.modificationTime}</p>
            <p>Number of children: {props.numberOfChildren}</p>
        </div>
    );
}

export default NodeData;
