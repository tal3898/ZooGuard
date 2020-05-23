import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ChildrenList from './Components/ChildrenList/ChildrenList'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <ChildrenList/>
    </div>
  );
}

export default App;
