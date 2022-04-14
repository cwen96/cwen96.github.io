import React, { Component } from "react";
import FadeInSection from './FadeInSection';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="divider container"></div>
        <div className="container">
          <div className ="new-section" id="academia">
            <h1 className="title">Academia</h1>
            <h2 className="subsection">Research</h2>
            <FadeInSection>
            <div className="row">
              <div className="col-sm">
                <div className="text-center">
                  <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/jericho.png" className="img-fluid" alt="Responsive"></img>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-9">
                <h3 className="subtitle">Jericho Stewardship Group</h3>
                <span>Research Consultant</span>
                <div>Vancouver, BC</div>
                <span className="date">Sep 2017 - Apr 2018</span>
                <ul className="remove-bullets">
                  <li>Worked in a team of 4 to research the conditions of Jericho Beach Park for the purpose of reintroducing salmon into the park.</li>
                  <br />
                  <li>Conducted analysis on various abiotic conditions of Jericho Beach Park including evapotranspiration, fluvial geomorphology, and precipitation. </li>
                  <br />
                  <li>Worked with ArcGIS to obtain elevation and streamflow data.</li>
                  <br />
                  <li>Consolidated annual rainfall data and ArcGIS data into Excel and used this data to suggest viable salmon spawning stream routes.</li>
                  <br />
                  <li>Worked with team members to collect additional data from experts and important stakeholder groups from UBC and the City of Vancouver.</li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            </FadeInSection>
            <h2 className="subsection">Education</h2>
            <FadeInSection>
            <div className="row">
              <div className="col-sm">
                <div className="text-center">
                  <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/sfuLogo.png" className="img-fluid" alt="Responsive"></img>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-9">
                <h4 className="subtitle">BASc, Computer Engineering</h4> 
                <span>
                  <a href="https://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                  <br />
                  Burnaby, BC
                  <br />
                  <div className="date">
                      Sep 2020 - Present
                  </div>
                </span>
                <p>
                  I am currently pursuing a degree in Computer Engineering from Simon Fraser University and expect to complete my degree by 2024.
                  My interests in this topic area include full stack software development, hardware design, and machine learning. <br /><br />
                  A collection of projects that I am currently working on as well as projects that I have completed can be found on my GitHub&nbsp;
                  <a href="https://github.com/cwen96" target="blank">here</a>.
                </p>
              </div>
            </div>
            <br />
            <br />
            </FadeInSection>
            <FadeInSection>
            <div className="row">
              <div className="col-sm">
                <div className="text-center">
                  <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/ubcLogo.png" className="img-fluid" alt="Responsive"></img>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-9">
                <h4 className="subtitle">BSc, Environmental Sciences</h4>
                <span>
                  <a href="https://www.ubc.ca/about/" target="_blank" rel="noreferrer">University of British Columbia</a>
                  <br />
                  Vancouver, BC
                  <br />
                  <div className="date">Sep 2014 - May 2018</div>
                </span>
                <p>
                  I graduated from the University of British Columbia with a degree in Environmental Sciences in 2018.
                  My interests in this topic area include topography, marine ecology, and atmospheric chemistry.
                  <br />
                  <br />
                  I spent the latter half of my degree working as a research consultant with the&nbsp;
                  <a href="http://jerichostewardship.ca/" target="blank">Jericho Stewardship Group</a>.
                      My research team collected streamflow data using ArcGIS and used this data along with secondary research to make a recommendation to
                      the Jericho Stewardship Group regarding the possibility of reintroducing salmon into Jericho Beach Park (full report available&nbsp;
                      <a href="https://github.com/cwen96/Jericho-Beach-Park-Research-Project" target="blank">here</a>).
                </p>
              </div>
            </div>
            <div className="end-section"></div>
            </FadeInSection>
          </div>
        </div>
      </div>
    )
  }
}