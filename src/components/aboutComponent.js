import React from 'react'
import {Row, Col} from 'react-materialize'
import ParalaxComponent from './paralaxComponent'
import ProfilePic from '../profilePic2.jpg'

export default function AboutCompoent(){
  return (
    <Row>
      <Col s={6}>
        <ParalaxComponent image={ProfilePic}/>
      </Col>
      <Col s={6}>
        <h2 id="About">About Me</h2>
        <p>
          Full Stack Developer with experience in iOS and Culinary. Studying cooking gave me considerable experience with organization and time management - two skills that translate very well to writing code. I turned to coding when I made a simple Frogger-like game through a tutorial, and found a passion for logic I never knew I had. I have experience working with a team and understand the importance of writing clean, readable code. I am passionate about the Rangers, working out and learning new technologies.
        </p>
      </Col>
    </Row>
  )
}
