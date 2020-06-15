import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ChildrenList from './Components/ChildrenList/ChildrenList'
import NodeData from './Components/NodeData/NodeData'
import { ZooGuardProvider } from './Components/ZooGuardContext';
import { goToPath } from './Components/utility'
import Grid from '@material-ui/core/Grid';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currPath: '',
      currChildren: [],
      currData: {
        nodeData: '',
        creationTime: ''
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

          <Grid style={{marginTop:35, width:'100%'}} container spacing={5}>

            <Grid item xs={3} >
              <ChildrenList />
            </Grid>

            <Grid item xs={6}>
              <NodeData
                nodeData={this.state.currData.nodeData}
                creationTime={this.state.currData.creationTime}
                modificationTime={this.state.currData.modificationTime}
                numberOfChildren={this.state.currChildren.length}
              />
            </Grid>
          </Grid>
        </div>
      </ZooGuardProvider>
    );
  }
}

export default App;
