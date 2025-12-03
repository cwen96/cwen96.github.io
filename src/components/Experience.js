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
                    <div><b>Junior Software Engineer</b></div>
                    <div>Vancouver, BC</div>
                    <span className="date">Sep 2022 - Apr 2023</span>
                    <ul className="remove-bullets">
                      <li>
                        Built and delivered 5 proof-of-concept features that shaped product roadmap decisions and accelerated feature development.
                      </li>
                      <br />
                      <li>
                        Designed and implemented REST API endpoints and a gRPC + protobuf prototype for secure image storage and retrieval.
                      </li>
                      <br />
                      <li>
                        Built a JWT-based authorization layer to meet security requirements and harden image access control in staging and production.
                      </li>
                      <br />
                      <li>
                        Implemented a cross-platform user data entry flow (Web, iOS, Android) using the MVC architecture.
                      </li>
                      <br />
                      <li>
                        Diagnosed crashes and implemented fixes on iOS and Android clients.
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
                    <div><b>Junior QA Engineer</b></div>
                    <div>Vancouver, BC</div>
                    <span className="date">Sep 2021 - Apr 2022</span>
                    <ul className="remove-bullets">
                      <li>
                        Automated functional and regression tests using C# and Selenium, reducing manual QA time by up to 30%.
                      </li>
                      <br />
                      <li>
                        Developed an internal tool (React frontend, TypeScript backend) to automate test data generation, cutting environment setup
                        time from 2 hours to 10 minutes
                      </li>
                      <br />
                      <li>
                        Collaborated with dev and QA teams to design new automated tests, achieving 100% coverage on major new features.
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
