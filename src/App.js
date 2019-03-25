import React, { Component } from 'react';
import {Container, Row} from 'react-materialize'
import NavBarComponent from './components/navbarComponent'
import ParalaxComponent from './components/paralaxComponent.js'
import AboutComponent from './components/aboutComponent'
import BlogContainer from './containers/blogContainer'
import ProjectsContainer from './containers/projectsContainer'
import ContactComponent from './components/contactComponent'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBarComponent/>
        <h1></h1>
        <Container>
          <ParalaxComponent image="https://rapidpurple.com/v2/wp-content/uploads/2013/08/pace-oregon-state-html-css-coding-web-design-660x330.jpg"/>
          <Row>
            <AboutComponent/>
          </Row>
          <ParalaxComponent image="https://backgroundcheckall.com/wp-content/uploads/2017/12/javascript-background-image-3.jpg"/>
          <Row>
            <ProjectsContainer/>
          </Row>
          <ParalaxComponent image="http://www.mobileswall.com/wp-content/uploads/2013/11/640-Programming-Code-l.jpg"/>
          <Row>
            <BlogContainer/>
          </Row>
          <Row>
            <ContactComponent/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
