import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ChildrenList from './Components/ChildrenList/ChildrenList'
import NodeData from './Components/NodeData/NodeData'
import { ZooGuardProvider } from './Components/ZooGuardContext';
import { goToPath } from './Components/utility'

class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currPath: '',
      currChildren: ['tal', 'b'],
      currData: {
        nodeData: 'f2',
        creationTime: 'd2'
      },
      updateContext: (newState) => {
        this.setState(newState)
      }

    };

  }

  componentDidMount() {
    goToPath('', this.state);
  }

  render() {
    return (
      <ZooGuardProvider value={this.state} >
        <div onClick={() => this.state.updateContext(this.state)} className="App">
          <NavBar />

          <div style={{ float: 'left', width: '22%', marginRight: 100 }}>
            <ChildrenList />
          </div>

          <div style={{marginTop:'5vh', float:'left'}}>
            <NodeData
              nodeData={this.state.currData.nodeData}
              creationTime={this.state.currData.creationTime}
              modificationTime={this.state.currData.modificationTime}
              numberOfChildren={this.state.currChildren.length}
            />
          </div>
        </div>
      </ZooGuardProvider>
    );
  }
}

export default App;
