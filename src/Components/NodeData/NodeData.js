import React from 'react';
import './NodeData.css';
import Button from '@material-ui/core/Button';

function NodeData(props) {

    return (
        <div style={{}} className="data-container">
            <Button style={{position:'absolute', right:20}} variant="contained" color="primary">
                Add
            </Button>
            <Button style={{position:'absolute', right:70}} variant="contained" color="secondary">
                Delete
            </Button>
            <p>data: {props.nodeData}</p>
            <p>creation time (ctime): {props.creationTime}</p>
            <p>modification time (mtime): {props.modificationTime}</p>
            <p>Number of children: {props.numberOfChildren}</p>
        </div>
    );
}

export default NodeData;
