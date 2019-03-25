import React, {Component} from 'react'
import { Navbar, NavItem} from 'react-materialize'
import {NavLink} from 'react-router-dom'

export default class NavBarComponent extends Component{

  render() {
      return (
        <Navbar brand="Harry Bloch's Portfolio" right >
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </Navbar>
      )
    }
}
