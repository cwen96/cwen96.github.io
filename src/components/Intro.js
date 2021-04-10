import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="jumbotron vertical-center">
        <div className="overlay"></div>
        <div className="inner" id="intro">
          <h1 id="transparent-white">Hey,<br />I'm Chris</h1>
          <div id="line"></div>
          <p id="overlay-desc">SFU Computer Engineering</p>
        </div>
      </div>
    )
  }
}
