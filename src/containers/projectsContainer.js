import React, {Component} from 'react'
import {Carousel, Row} from 'react-materialize'
import BlogComponent from '../components/blogComponent'

export default class ProjectsContainer extends Component{

  render(){
    return (
      <Row >
      <h2 className = "center-text" id="Projects">Projects</h2>
        <Carousel options={{fullWidth: true,indicators: true}} className="white-text center" >

        <BlogComponent link="https://goalie-tracker-front.herokuapp.com/"
        title="Goalie Tracker"
        description="Creates a seamless way for users to track hockey goalie statistics that most sites do not track."/>

        <BlogComponent link="https://serene-garden-41546.herokuapp.com/"
        title="Story Time"
        description="Users create short stories with other users one sentence at a time."/>

        <BlogComponent link="https://afternoon-temple-22179.herokuapp.com/"
        title="Coinfolio"
        description="Users sign up, add coins and track their portfolio."/>

        <BlogComponent link="https://github.com/harryFBloch/satoshi"
        title="Satoshi"
        description="CLI ruby gem to look up current crypto currency prices and graphs in the terminal."/>

        <BlogComponent link="https://itunes.apple.com/us/app/ar-mini-golf/id1272185400?ls=1&mt=8"
        title="AR Mini Golf"
        description="Premiered at #36 for sports games in the app store."/>

        <BlogComponent link="https://itunes.apple.com/us/app/head-chef/id1201367971?ls=1&mt=8"
        title="Head Chef"
        description="Modern cookbook."/>

        <BlogComponent link="https://itunes.apple.com/us/app/memoryatlas/id1130009833?mt=8"
        title="Memory Atlas"
        description="Simple app that allows the user to post videos and pictures on a map, and allows user to search around the globe for other people's memories. 2.4k downloads in 2016."/>

        </Carousel>
      </Row>
    )
  }
}
