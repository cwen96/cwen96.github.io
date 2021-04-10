import React, { Component } from "react";

export default class Hackathons extends Component {
  render() {
    return(
      <div>
        <div className="divider container"></div>
        <div>
          <div className="new-section" id="hackathons">
            <h1 className="title">Hackathons</h1>
            <br />
            <div className="container">
              <br />
              <h2 className="subsection">nwHacks</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/nwHacks.png" className="img-fluid" alt="Responsive"></img>
                      <br />
                      <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Speech-to-Text Processing App</h3>
                  <span>Jan 2021</span>
                  <ul>
                    <li>Used Python to implement the Google Cloud Speech-to-Text API to transcribe audio files for text processing.</li>
                    <br />
                    <li>Used the Python spaCy NLP library to identify the 5 main topics of the transcribed audio file and identify sentences that relate to the 5 main topics.</li>
                    <br />
                    <li>Worked with 2 designers using Figma to construct the app’s front-end UI.</li>
                  </ul>
                </div>
              </div>
              <br />
              <h2 className="subsection">Hack the Northeast</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/htne.png" className="img-fluid" alt="Responsive"></img>
                      <br />
                      <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Political Bias Detection App</h3>
                  <span>Jan 2021</span>
                  <ul>
                    <li>Created a Google Chrome extension using Python that analyzes the text of an online news article and lets the user know 
                      if the article is politically left leaning, right leaning, or centrist.</li>
                    <br />
                    <li>Trained a machine learning algorithm using over 200 data points to identify a text input as left leaning or right leaning with over 85% accuracy.</li>
                    <br />
                    <li>Built the app using Google Cloud’s AutoML Natural Language API, Python, React, JavaScript, and Flask.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}