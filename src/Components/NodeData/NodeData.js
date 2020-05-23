import React from 'react';
import './NodeData.css';


function NodeData() {

    var nodeData = '{...}';
    var creationTime = '2020-07-03T00:00:00Z'
    var numberOfChildren = 13;
    return (
        <div >
            <p>Node data: {nodeData}</p>
            <p>Node creation time: {creationTime}</p>
            <p>Number of children: {numberOfChildren}</p>
        </div>
    );
}

export default NodeData;
