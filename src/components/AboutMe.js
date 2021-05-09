import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="gray new-section" id="about">
        <h1 className="title">About Me</h1>
        <div className="container">
          <p>I am a caffeine fuelled college student with a passion for computer engineering, environmental science, lifelong learning, and entrepreneurship.
            I enjoy creating programs during my spare time to solve interesting problems and to improve my programming skills.</p>
          <br />
          <p>I graduated from the University of British Columbia with a degree in Environmental Sciences in 2018.
            My interests in this topic area include topography, marine ecology, and atmospheric chemistry.
              I spent the latter half of my degree working as a research consultant with the&nbsp;
              <a href="http://jerichostewardship.ca/" target="blank">Jericho Stewardship Group</a>.
                My team collected streamflow data from ArcGIS and used this data along with secondary research to make a recommendation to
                the Jericho Stewardship Group regarding the possibility of reintroducing salmon into Jericho Beach Park (full report available&nbsp;
                  <a href="https://github.com/cwen96/Jericho-Beach-Park-Research-Project" target="blank">here</a>).</p>
          <br />
          <p> I am currently pursuing a second degree in Computer Engineering from Simon Fraser University and expect to complete my degree by 2024.
            My interests in this topic area include front end development, algorithms, and topics in ML & AI.
              A collection of projects that I am currently working on as well as projects that I have completed can be found on my GitHub&nbsp;
              <a href="https://github.com/cwen96" target="blank">here</a>.</p>
        </div>
        <div className="end-section"></div>
      </div>
    )
  }
}