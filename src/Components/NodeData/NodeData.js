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
                            <p>Are you sure you want to delete node?</p>
                            <Button  onClick={() => deleteNode(context)} variant="contained" color="primary">
                                בוודאי
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
                            <p>Enter node name</p>
                            <TextField value={newNodeName} onChange={(event)=> setNewNodeName(event.target.value)} id="standard-basic" label="node name" />

                            <Button  onClick={() => addNode(context)} variant="contained" color="primary">
                                Add
                            </Button>
                        </center>
                    </Popup>

                    <div style={{}} className="data-container">
                        <Button style={{ position: 'absolute', right: 20 }} onClick={() => setIsAddPopupOpen(true)} variant="contained" color="primary">
                            Add
                        </Button>
                        <Button style={{ position: 'absolute', right: 70 }} onClick={() => setIsDeletePopupOpen(true)} variant="contained" color="secondary">
                            Delete
                        </Button>
                        <p>data: {props.nodeData}</p>
                        <p>creation time (ctime): {props.creationTime}</p>
                        <p>modification time (mtime): {props.modificationTime}</p>
                        <p>Number of children: {props.numberOfChildren}</p>
                    </div>
                </div>
            }
        </ZooGuardConsumer>
    );
}

export default NodeData;
