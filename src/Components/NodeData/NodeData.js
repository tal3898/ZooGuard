import React from 'react';
import './NodeData.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ZooGuardConsumer } from '../ZooGuardContext'
import { goBack, goToPath } from '../utility'

import Popup from "reactjs-popup";


function NodeData(props) {
    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [newNodeName, setNewNodeName] = React.useState('');


    const deleteNode = (context) => {
        var nodeToDelete = context.currPath;
        console.log('ffff ' + nodeToDelete)
        
        var requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: nodeToDelete
            })
        }

        setIsDeletePopupOpen(false);

        fetch('/node', requestOptions)
            .then(response => response.json())
            .then(responseData => {
                console.log('works');
                goBack(context);
            }).catch(error => {
                console.error("NG error: ", error)
            });;
    }

    const addNode = (context) => {
        var newNodePath = context.currPath + '/' + newNodeName;

        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: newNodePath
            })
        }

        setNewNodeName('');
        setIsAddPopupOpen(false);

        fetch('/node', requestOptions)
            .then(response => response.json())
            .then(responseData => {
                console.log('works');
                goToPath(context.currPath, context);
            }).catch(error => {
                console.error("NG error: ", error)
            });;    }

    return (
        <ZooGuardConsumer>
            {(context) =>
                <div>
                    {/** Delete node popup */}
                    <Popup
                        open={isDeletePopupOpen}
                        onClose={() => setIsDeletePopupOpen(false)}
                        modal
                        active
                        closeOnDocumentClick
                    >
                        <center style={{ padding: 15 }}>
                            <h1>Are you sure you want to delete node?</h1>
                            <p style={{marginBottom:50}}>NOTICE: If the node has children, the children will be killed as well. Are you sure you want to kill the children too?</p>
                            <Button  onClick={() => deleteNode(context)} variant="contained" color="secondary">
                                I am 100% sure i want to delete this node and kill all his children
                            </Button>
                        </center>
                    </Popup>


                    {/** Add node popup */}
                    <Popup
                        open={isAddPopupOpen}
                        onClose={() => setIsAddPopupOpen(false)}
                        modal
                        active
                        closeOnDocumentClick
                    >
                        <center style={{ padding: 10 }}>
                            <h1>Enter node name</h1>
                            <TextField value={newNodeName} onChange={(event)=> setNewNodeName(event.target.value)} id="standard-basic" label="node name" />

                            <Button  onClick={() => addNode(context)} variant="contained" color="primary">
                                Add
                            </Button>
                        </center>
                    </Popup>

                    <div className="data-container">
                        <Button style={{ marginTop:15 }} onClick={() => setIsAddPopupOpen(true)} variant="contained" color="primary">
                            Add
                        </Button>
                        <Button style={{ marginTop:15, marginLeft:10 }} onClick={() => setIsDeletePopupOpen(true)} variant="contained" color="secondary">
                            Delete
                        </Button>
                        <p>data: {props.nodeData}</p>
                        <p>Number of children: {props.numberOfChildren}</p>
                        <p>creation time (ctime): {props.creationTime}</p>
                        <p>modification time (mtime): {props.modificationTime}</p>
                        
                    </div>
                </div>
            }
        </ZooGuardConsumer>
    );
}

export default NodeData;
