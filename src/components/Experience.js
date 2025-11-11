import React, { Component } from "react";
import FadeInSection from "./FadeInSection";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="fade-in-section"></div>
        <div className="divider container"></div>
        <div className="proj-color">
          <div className="new-section" id="experience">
            <div className="container">
              <h1 className="title">Experience</h1>
              <FadeInSection>
                <div className="row">
                  <div className="col-sm">
                    <div className="text-center">
                      <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/trulioo.png" className="img-fluid shadow" alt="trulioo-logo"></img>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="col-9">
                    <a
                      className="subtitle"
                      href="https://www.trulioo.com/company/about-us"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Trulioo
                    </a>
                    <div><b>Software Engineering Intern</b></div>
                    <div>Vancouver, BC</div>
                    <span className="date">Sep 2022 - Apr 2023</span>
                    <ul className="remove-bullets">
                      <li>
                        Delivered 5 PoC prototypes that influenced product roadmap decisions and accelerated feature maturity.
                      </li>
                      <br />
                      <li>
                        Designed and implemented REST API endpoints and a gRPC + protobuf prototype for secure image storage and
                        retrieval.
                      </li>
                      <br />
                      <li>
                        Built a JWT-based authorization layer to meet internal security requirements and harden image access control in
                        staging and production.
                      </li>
                      <br />
                      <li>
                        Maintained and improved iOS, Web, and Android clients: diagnosed crashes and implemented fixes that reduced
                        crash reports by 10%.
                      </li>
                    </ul>
                    <br />
                    <br />
                    <a
                      className="subtitle"
                      href="https://www.trulioo.com/company/about-us"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Trulioo
                    </a>
                    <div><b>Software QA Engineering Intern</b></div>
                    <div>Vancouver, BC</div>
                    <span className="date">Sep 2021 - Apr 2022</span>
                    <ul className="remove-bullets">
                      <li>
                        Automated functional and regression tests using C# and Selenium, reducing manual QA time by 30% and
                        shortening release cycles.
                      </li>
                      <br />
                      <li>
                        Built a full-stack internal tool (React + TypeScript) to automate test data generation, cutting environment setup
                        time from 4 hours to 10 minutes.
                      </li>
                      <br />
                      <li>
                        Collaborated with dev and QA teams to design new automated tests, achieving near 100% coverage on major
                        new features.
                      </li>
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
    );
  }
}
