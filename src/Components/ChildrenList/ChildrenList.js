import React from 'react';
import './ChildrenList.css';


function ChildrenList() {

    const list = ['tal', 'inon', 'mgr_ido'];

    const getChildRow = (childName) => {
        return (
            <div className="child-row">
                <p style={{margin:0, marginLeft: 10, fontSize:20}}>{childName}</p>
            </div>
        )
    }

    return (
      <div className="children-card">
          <div className="path-container" style={{paddingLeft: 10}}>
            <i id="goBackBtn" style={{float:'left', marginRight:10}} className="back-button fas fa-undo-alt"></i>
            <p> /aa/bbb/ccc</p>
          </div>
        
        { list.map(el => getChildRow(el))
        }
        </div>
    );
  }
  
  export default ChildrenList;
  