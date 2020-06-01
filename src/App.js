import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ChildrenList from './Components/ChildrenList/ChildrenList'
import NodeData from './Components/NodeData/NodeData'
import { ZooGuardProvider } from './Components/ZooGuardContext';


class App extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      currPath: '/in',
      currChildren: ['a', 'b'],
      updateContext: (newState) => {
        this.setState(newState)
      }

    };
  }

  render() {
    return (
      <ZooGuardProvider value={this.state} >
        <div onClick={() => this.state.updateContext(this.state)} className="App">
          <NavBar />

          <ChildrenList style={{ float: 'left' }} />

          <NodeData />
        </div>
      </ZooGuardProvider>
    );
  }
}

export default App;
