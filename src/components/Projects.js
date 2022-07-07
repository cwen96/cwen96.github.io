import React, { Component } from "react";
import FadeInSection from './FadeInSection';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="fade-in-section"></div>
        <div className="divider container"></div>
        <div className="proj-color">
          <div className ="new-section" id="projects">
            <div className="container">
              <h1 className="title">Projects</h1>
              <h2 className="subsection">Academic Projects</h2>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/rushHour.png" className="img-fluid" alt="Responsive"></img>
                      <br />
                      <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Rush Hour Game (Java)</h3>
                  <span>Data Structures and Programming</span>
                  <br />
                  <a href="http://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                  <br />
                  <span className="date">Jan 2021 - May 2021</span>
                  <ul className="remove-bullets">
                    <li>Created a Rush Hour game where the user has to move cars out of the way in order to clear a path
                      for the target car to exit the board.</li>
                    <br />
                    <li>Created a solver using Breadth-First Search to find a solution to a given board and output a step-by-step 
                      solution to a file.</li>
                    <br/>
                    <li>Implemented unit testing to systematically test edge cases, invalid cases, and normal cases.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              </FadeInSection>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/lineFollowingRobot.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Line Following Robot (C/C++)</h3> <span>Introduction to Microcontrollers</span>
                  <br />
                  <a href="https://www.kpu.ca/about" target="_blank" rel="noreferrer">Kwantlen Polytechnic University</a>
                  <br />
                  <span className="date">Apr 2020 - May 2020</span>
                  <ul className="remove-bullets">
                    <li>Developed a program using C to communicate with a microcontroller and several IR sensors in order to guide a robot through a complex line path. </li>
                    <br />
                    <li>Constructed multiple test tracks to identify and debug unexpected behaviour.</li>
                    <br />
                    <li>Demonstrated effective time management and teamwork skills by delegating tasks through a project schedule in order to meet important deadlines. </li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              </FadeInSection>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/TPU.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Google Tensor Processing Unit (VHDL)</h3>
                  <span>Fundamentals of Digital Logic and Design</span>
                  <br />
                  <a href="http://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                  <br />
                  <span className="date">Nov 2020 - Dec 2020</span>
                  <ul className="remove-bullets">
                    <li>Used VHDL to design and implement a Tensor Processing Unit (TPU) that mimics the functionality of Google's TPUv1 that was introduced in 2016 to process ML workloads.</li>
                    <br />
                    <li>Designed each component from the ground up using the engineering design process with minimal guidance from the instructor.</li>
                    <br />
                    <li>Verified the correct functionality of the components by creating testbenches to simulate the design in ModelSim.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              </FadeInSection>
              <h2 className="subsection">Personal Projects</h2>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/githubPages.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Personal Website (HTML/CSS + React)</h3>
                  <span className="date">Aug 2020 - Jun 2021</span>
                  <ul className="remove-bullets">
                    <li>Created this web page using HTML, CSS, JavaScript, and the Bootstrap framework to track professional and academic achievements.</li>
                    <br />
                    <li>Used React for the website's front-end for a more modular approach to web development.</li>
                    <br />
                    <li>Implemented fade in animations using JavaScript for a more aesthetic viewing experience.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              </FadeInSection>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/snake.png" className="img-fluid" alt="Responsive"></img>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Snake (Python)</h3>
                  <span className="date">Jun 2021</span>
                  <ul className="remove-bullets">
                    <li>Created a fully functioning Snake game complete with a UI using pygame.</li>
                    <br />
                    <li>Implemented a scoring system that tracks the user's current score and also the user's high score.</li>
                    <br />
                    <li>Reimplemented the game using JavaScript for future use on another website currently under development.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              </FadeInSection>
              <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/wordCloud.png" className="img-fluid" alt="Responsive"></img>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Word Cloud Generator (Python)</h3>
                  <span className="date">Aug 2020</span>
                  <ul className="remove-bullets">
                    <li>Successfully created a program that generates a word cloud with the most frequent words appearing the largest and the least common words appearing the smallest.</li>
                    <br />
                    <li>Implemented the TkInter Python library for the program’s GUI that prompts the user to upload a text file for a more intuitive user experience.</li>
                    <br />
                    <li>Maintained a healthy code base by using Git and GitHub for version control.</li>
                  </ul>
                </div>
              </div>
              <div className="end-section"></div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    )
  }
}