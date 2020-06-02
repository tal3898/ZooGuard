import React from 'react';
import './NodeData.css';


function NodeData(props) {

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
