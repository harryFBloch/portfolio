import React, {Component} from 'react'
import {Carousel, Row} from 'react-materialize'

export default class BlogComponent extends Component{

  render(){
    return (
      <div className="black-fade carousel-item" s={8} offest={2}>
      <a href={this.props.link} className="white-text"><h2>
      {this.props.title}
      </h2></a>
      <p><a href={this.props.link} className="white-text">
      {this.props.description}
      </a></p>
      </div>
    )
  }
}
