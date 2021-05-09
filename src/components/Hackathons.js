import React, { Component } from "react";

export default class Hackathons extends Component {
  render() {
    return(
      <div>
        <div className="divider container"></div>
        <div>
          <div className="new-section" id="hackathons">
            <h1 className="title">Hackathons</h1>
            <div className="container">
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
                  <h3>Speech-to-Text Processing App (Python)</h3>
                  <span>Jan 2021</span>
                  <ul>
                    <li>Created a mobile app that transcribes a video, audio, or text file and then summarizes and organizes 
                      the data into several main topics determined through NLP.</li>
                    <br />
                    <li>Achieved 40% - 50% text condensation for lectures and research articles without omitting key ideas.</li>
                    <br />
                    <li>Built the app using Google Cloud’s Speech-To-Text API for audio/video transcription and Python’s 
                      spaCy NLP library to analyze the transcribed text.</li>
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
              <div className="end-section"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}