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
                      <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/trulioo.png" className="img-fluid" alt="trulioo-logo"></img>
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
                    <div>Software Engineering Intern</div>
                    <div>Vancouver, BC</div>
                    <span className="date">Sep 2022 - Apr 2023</span>
                    <ul className="remove-bullets">
                      <li>
                        Implemented REST API endpoints using Kotlin to fetch, store, and delete user images from a database.
                      </li>
                      <br />
                      <li>
                        Parsed JWTs to ensure that users have the permissions to access an image stored in the database.
                      </li>
                      <br />
                      <li>
                        Maintained and improved Trulioo's iOS and Android clients.
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
                    <div>QA Engineering Intern </div>
                    <div>Vancouver, BC</div>
                    <span className="date">Sep 2021 - Apr 2022</span>
                    <ul className="remove-bullets">
                      <li>
                        Developed automation test scripts using C# to reduce manual testing during release.
                      </li>
                      <br />
                      <li>
                        Used React, JavaScript, and TypeScript to develop the
                        front-end and back-end for an internal tool to reduce
                        manual test data creation.
                      </li>
                      <br />
                      <li>
                        Systematically tested new features by going through
                        expected cases, edge cases, and errors to ensure full coverage.
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
