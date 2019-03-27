import React, { Component } from 'react'
import {Row} from 'react-materialize'
import {Parallax} from 'react-parallax'

export default class ParalaxComponent extends Component {

  render(){
    return (
      <Row>
      <Parallax bgImage={this.props.image} strength={500}>
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
      </Row>
     )
  }
}
