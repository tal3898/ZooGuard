import React from 'react';
import './NavBar.css';


function NavBar() {
  return (
    <div className="navbar-div">
      <img src="zoo.png" style={{ height: '100%', float: 'left' }} />
      <span style={{ fontSize: '3.5em', fontFamily:'Verdana', float:'left', marginTop: 10, color:'#1a1c1b' }}>ZooGuard</span>
    </div>
  );
}

export default NavBar;
