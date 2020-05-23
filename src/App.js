import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ChildrenList from './Components/ChildrenList/ChildrenList'
import NodeData from './Components/NodeData/NodeData'


function App() {
  return (
    <div className="App">
      <NavBar />

      <ChildrenList style={{ float: 'left' }} />

      <NodeData />
    </div>
  );
}

export default App;
