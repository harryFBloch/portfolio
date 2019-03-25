import React, {Component} from 'react'
import {Carousel, Row} from 'react-materialize'
import BlogComponent from '../components/blogComponent'


export default class BlogContainer extends Component{

  render(){
    return (
      <Row >
      <h2 className = "center-text" id="Blog">Blogs</h2>
      <Carousel options={{fullWidth: true,indicators: true}} className="white-text center" >
        <BlogComponent link="https://harryfbloch.github.io/goalie-tracker_react_redux_final_project"
        title="Goalie-Tracker React/Redux Final Project"
        description="For my final project at flatiron school I was tasked with using all my knowledge learn in the course to create a single page web app..."/>

        <BlogComponent link="https://harryfbloch.github.io/storytime_javascript_project"
        title="StoryTime JavaScript Project"
        description="For this months project at flatiron school I was tasked with going back over my last project Storytime that is a full rails app, and add an api to the project along with ajax calls instead of reloading the page every time a button is pressed..."/>

        <BlogComponent link="https://harryfbloch.github.io/the_importance_of_event_listeners"
        title="The Importance Of Event Listeners"
        description="The importance of using event listeners in java script cannot be stressed enough..."/>

        <BlogComponent link="https://harryfbloch.github.io/storytime_rails_project"
        title="Storytime Rails Project"
        description="For my third project for the flatiron school online web developer bootcamp. I chose to create a web app called storytime..."/>

        <BlogComponent link="https://harryfbloch.github.io/has-many_trough_tutorial"
        title="has-many trough Tutorial"
        description="For this tutorial I am going to show you to create a simple has_many through association using rails..."/>

        <BlogComponent link="https://harryfbloch.github.io/coinfolio_sinatra_project"
        title="Coinfolio Sinatra Project"
        description="For my second project at Flatiron school we were challenged with creating a CRUD MVC app using the sinatra gem..."/>

        <BlogComponent link="https://harryfbloch.github.io/satoshi_gem"
        title="Satoshi Gem"
        description="For my first project at Flatiron School we had to make a CLI gem. The gem should scrape information from the web, then get input form the user and then show more information..."/>

        <BlogComponent link="https://harryfbloch.github.io/warning_career_change_ahead"
        title="Warning!!! Career Change Ahead"
        description="After taking a few months off from coding to run a 3D printing company. I have decided to go down a different path, and learn web development..."/>

</Carousel>
      </Row>
    )
  }
}
