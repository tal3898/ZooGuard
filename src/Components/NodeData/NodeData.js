import React from 'react';
import './NodeData.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ZooGuardConsumer } from '../ZooGuardContext'
import { goBack, goToPath } from '../utility'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Popup from "reactjs-popup";


function NodeData(props) {
    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [newNodeName, setNewNodeName] = React.useState('');

    const toastProperties = {
        autoClose: 6000,
        position: toast.POSITION.BOTTOM_RIGHT,
        pauseOnFocusLoss: false
    };


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
                toast.success("Deleted node successfully", toastProperties);
                console.log('works');
                goBack(context);
            }).catch(error => {
                console.error("NG error: ", error)
            });;
    }

    const addNode = (context) => {
        if (newNodeName == '' || newNodeName.includes('/')) {
            toast.error("Node name cannot be emtpy, or containes \"/\" ", toastProperties);
        } else {
            var newNodePath = context.currPath + '/' + newNodeName;

            var requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    path: newNodePath,
                    newNodeName: newNodeName
                })
            }

            setNewNodeName('');
            setIsAddPopupOpen(false);

            fetch('/node', requestOptions)
                .then(response => response.json())
                .then(responseData => {
                    toast.success("Created node successfully", toastProperties);
                    goToPath(context.currPath, context);
                }).catch(error => {
                    toast.error("An error occurred while trying to create node", toastProperties);
                });;
        }

    }

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
                        <center style={{ padding: 15, marginBottom:15 }}>
                            <h1>Are you sure you want to delete node?</h1>
                            <p style={{ marginBottom: 50 }}>NOTICE: If the node has children, the children will be killed as well. Are you sure you want to kill the children too?</p>
                            <Button onClick={() => deleteNode(context)} variant="contained" color="secondary">
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
                        <center style={{ padding: 10,  marginBottom:15  }}>
                            <h1>Enter new node name</h1>
                            <TextField value={newNodeName} onChange={(event) => setNewNodeName(event.target.value)} id="standard-basic" label="node name" />

                            <Button style={{marginTop:10}} onClick={() => addNode(context)} variant="contained" color="primary">
                                Add
                            </Button>
                        </center>
                    </Popup>

                    <div className="data-container">
                        <Button style={{ marginTop: 15 }} onClick={() => setIsAddPopupOpen(true)} variant="contained" color="primary">
                            Add
                        </Button>
                        <Button style={{ marginTop: 15, marginLeft: 10 }} onClick={() => setIsDeletePopupOpen(true)} variant="contained" color="secondary">
                            Delete
                        </Button>
                        <p>data: {props.nodeData}</p>
                        <p>Number of children: {props.numberOfChildren}</p>
                        <p>creation time (ctime): {props.creationTime}</p>
                        <p>modification time (mtime): {props.modificationTime}</p>

                    </div>
                    <ToastContainer />
                </div>
            }
        </ZooGuardConsumer>
    );
}

export default NodeData;
