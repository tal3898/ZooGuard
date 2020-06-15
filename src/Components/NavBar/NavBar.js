import React from 'react';
import './NavBar.css';


function NavBar() {
  return (
    <div className="navbar-div">
      
        <img src="giraffe.png" style={{ height: '100%', float: 'left' }} />
        <span style={{ fontSize: '4.5em', fontFamily: 'Verdana', float: 'left', marginLeft: 10, marginTop: 5, color: '#1a1c1b' }}>ZooUI</span>
      
    </div>
  );
}

export default NavBar;
