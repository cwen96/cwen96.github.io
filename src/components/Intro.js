import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="jumbotron vertical-center">
        <div className="overlay"></div>
        <div className="inner" id="intro">
          <h1 className="jumbotron__name">Hey,<br />I'm Chris</h1>
          <div className="jumbotron__line"></div>
          <p className="jumbotron__description">Software developer</p>
        </div>
      </div>
    )
  }
}
