import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="divider container"></div>
        <div className="exp-color">
          <div className ="new-section" id="experience">
            <h1 className="title">Experience</h1>
            <br />
            <div className="container">
              <h2 className="subsection">Technical Skills</h2>
              <ul>
                <li><b>Software: </b>Python, C/C++, Java</li>
                <li><b>Hardware Design: </b>Verilog, VHDL</li>
                <li><b>Web Development: </b>HTML, CSS, JavaScript, React</li>
                <li><b>Other: </b>Linux, Git, Bash, Vim</li>
              </ul>
              <br />
              <h2 className="subsection">Technical Projects</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/rushHour.png" className="img-fluid" alt="Responsive"></img>
                      <br />
                      <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Rush Hour Game (Java)</h3> <span>Data Structures and Programming</span>
                  <br />
                  <a href="http://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                  <br />
                  <span>Jan 2021 - May 2021</span>
                  <ul>
                    <li>Created a Rush Hour game where the user has to move cars of various lengths out of the way in order 
                      to clear a path for the red car to exit the parking lot.</li>
                    <br />
                    <li>Used a hashmap to keep track of the coordinates of each car on the game board for efficient data access.</li>
                    <br/>
                    <li>Implemented unit testing to systematically test edge cases, invalid cases, and normal cases.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/bst.png" className="img-fluid" alt="Responsive"></img>
                      <br />
                      <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Binary Search Tree (C++)</h3> <span>Software Design & Analysis for Engineers</span>
                  <br />
                  <a href="http://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                  <br />
                  <span>Oct 2020</span>
                  <ul>
                    <li>Successfully implemented the binary search algorithm using C++ to efficiently search for a specified key. </li>
                    <br />
                    <li>Maintained abstraction by using classes to improve code re-usability and maintain modularity for easier debugging. </li>
                    <br/>
                    <li>Used the Visual Studio debugger and pair programming in order to debug complex issues and integrate ideas. </li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/lineFollowingRobot.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Line Following Robot (C/C++)</h3> <span>Introduction to Microcontrollers</span>
                  <br />
                  <a href="https://www.kpu.ca/about" target="_blank" rel="noreferrer">Kwantlen Polytechnic University</a>
                  <br />
                  <span>Apr 2020 - May 2020</span>
                  <ul>
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
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/TPU.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Google Tensor Processing Unit (VHDL)</h3>
                  <span>Fundamentals of Digital Logic and Design</span>
                  <br />
                  <a href="http://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                  <br />
                  <span>Nov 2020 - Dec 2020</span>
                  <ul>
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
              <h2 className="subsection">Personal Projects</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/githubPages.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Personal Website (HTML/CSS + React)</h3>
                  <span>Aug 2020 - Present</span>
                  <ul>
                    <li>Created this web page using HTML, CSS, JavaScript, and the Bootstrap framework to track professional and academic achievements.</li>
                    <br />
                    <li>Used the React framework to organize sections and to maintain modularity.</li>
                    <br />
                    <li>Implemented JavaScript for fade in animations on user scroll for a natural viewing experience.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/wordCloud.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Word Cloud Generator (Python)</h3>
                  <span>Aug 2020</span>
                  <ul>
                    <li>Successfully created a program that generates a word cloud with the most frequent words appearing the largest and the least common words appearing the smallest.</li>
                    <br />
                    <li>Implemented the TkInter Python library for the program’s GUI that prompts the user to upload a text file for a more intuitive user experience.</li>
                    <br />
                    <li>Maintained a healthy code base by using Git and GitHub for version control.</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <h2 className="subsection">Research</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/jericho.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3>Jericho Stewardship Group</h3> <span>Vancouver, BC</span>
                  <br /> <span>Sep 2017 - Apr 2018</span>
                  <br /> <span className="role">Research Consultant</span>
                  <ul>
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
              <h2 className="subsection">Education</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/sfuLogo.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h4>BASc, Computer Engineering</h4> 
                  <span>
                    <a href="https://www.sfu.ca/about.html" target="_blank" rel="noreferrer">Simon Fraser University</a>
                    <br />
                    Burnaby, BC
                    <br />
                    Sep 2020 - Present
                  </span>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/ubcLogo.png" className="img-fluid" alt="Responsive"></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h4>BSc, Environmental Sciences</h4> <span><a href="https://www.ubc.ca/about/" target="_blank" rel="noreferrer">University of British Columbia</a><br />Vancouver, BC<br />Sep 2014 - May 2018</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}