import React, { Component } from 'react';
import {Container} from 'react-materialize'
import NavBarComponent from './components/navbarComponent'
import ParalaxComponent from './components/paralaxComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent/>
        <Container>
          <ParalaxComponent/>
          <h1>hello world</h1>
          <h1>hello world</h1>
          <h1>hello world</h1>
          <h1>hello world</h1>
          <ParalaxComponent/>
        </Container>
      </div>
    );
  }
}

export default App;
