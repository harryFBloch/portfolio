import React, {Component} from 'react'
import { Navbar} from 'react-materialize'

export default class NavBarComponent extends Component{

  render() {
      return (
        <Navbar brand="Harry Bloch's Portfolio" right >
          <li><a onClick={() => document.getElementById('About').scrollIntoView()}>About</a></li>
          <li><a onClick={() => document.getElementById('Projects').scrollIntoView()}>Projects</a></li>
          <li><a onClick={() => document.getElementById('Blog').scrollIntoView()}>Blog</a></li>
          <li><a onClick={() => document.getElementById('Contact').scrollIntoView()}>Contact</a></li>
        </Navbar>
      )
    }
}
