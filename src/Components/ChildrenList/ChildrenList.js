import React from 'react';
import './ChildrenList.css';
import { ZooGuardConsumer } from '../ZooGuardContext'

function ChildrenList() {

    const goToPath = (path, context) => {
        var requestingPath = path;
        if (requestingPath == '') {
            requestingPath = '/';
        }

        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: requestingPath
            })
        }

        fetch('/nodeData', requestOptions)
            .then(response => response.json())
            .then(responseData => {
                context.currPath = path;
                context.currChildren = responseData.children;
                context.currData = responseData.data;
                context.updateContext(context);
            }).catch(error => {
                console.error("NG error: ", error)
            });;
    };

    const getChildRow = (childName, context) => {
        return (
            <div key={childName} onClick={() => goToPath(context.currPath + '/' + childName, context)} className="child-row">
                <p style={{ margin: 0, marginLeft: 10, fontSize: 20 }}>{childName}</p>
            </div>
        )
    }

    const goBack = (context) => {
        var prevPath = context.currPath.substring(0, context.currPath.lastIndexOf('/'));
        goToPath(prevPath, context);
    }



    return (
        <ZooGuardConsumer>
            {(context) =>
                <div className="children-card">
                    <div className="path-container" style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 12 }}>
                        <i className="back-button fas fa-undo-alt" onClick={() => goBack(context)} style={{ float: 'left', marginRight: 10, marginTop: 5 }}></i>
                        <span> {context.currPath != "" ? context.currPath : '/'} </span>
                    </div>

                    <div className="children-container">
                        {context.currChildren.map(child => getChildRow(child, context))
                        }
                    </div>
                </div>

            }
        </ZooGuardConsumer>

    );
}

export default ChildrenList;
