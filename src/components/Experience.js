import React, { Component } from "react";
import FadeInSection from './FadeInSection';

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="fade-in-section"></div>
        <div className="divider container"></div>
        <div className="proj-color">
          <div className ="new-section" id="Experience">
            <div className="container">
              <h1 className="title">Experience</h1>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/trulioo.png" className="img-fluid" alt="Responsive"></img>
                      <br />
                      <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Trulioo</h3>
                  <span>Quality Assurance Engineer Intern - Automation </span>
                  <div>Vancouver, BC</div>
                  <span className="date">Aug 2021 - Apr 2022</span>
                  <ul className="remove-bullets">
                    <li>Developed automation test scripts using C# and Selenium to reduce manual testing during release.</li>
                    <br />
                    <li>Used React, JavaScript, and TypeScript to develop the frontend + backend for an internal test data creation tool to reduce 
                        time spent on manual test data creation.</li>
                    <br/>
                    <li>Used BitBucket for code review and Jira to keep track of development tasks.</li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="end-section"></div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    )
  }
}