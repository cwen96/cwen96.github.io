import React, { Component } from "react";
import FadeInSection from "./FadeInSection";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="fade-in-section"></div>
        <div className="divider container"></div>
        <div className="new-section" id="projects">
          <div className="container">
            <h1 className="title">Projects</h1>
            <h2 className="subsection">Academic Projects</h2>
            <FadeInSection>
              <div className="row">
                <div className="col-sm">
                  <div className="text-center">
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/lineFollowingRobot.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Line Following Robot (C)</h3>
                  <span className="date">Introduction to Microcontrollers</span>
                  <br />
                  <a
                    href="https://www.kpu.ca/about"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kwantlen Polytechnic University
                  </a>
                  <br />
                  <ul className="remove-bullets">
                    <li>
                      Engineered a fully autonomous line-following robot programmed in C on a PIC18F4525 microcontroller,
                      using real-time sensor data to navigate complex track layouts.

                    </li>
                    <br />
                    <li>
                      Implemented real-time sensor feedback control to handle unexpected track conditions including gaps, sharp turns, dead ends, and crossroads.
                    </li>
                    <br />
                    <li>
                      Designed a motor control algorithm using pulse-width modulation, bitmasking, and switch-case logic for decision making and responsive maneuvering.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/pattern-matching.jpg"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Embedded Pattern Memory Game (C)</h3>
                  <span className="date">Embedded and Real Time System Software</span>
                  <br />
                  <a
                    href="http://www.sfu.ca/about.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Simon Fraser University
                  </a>
                  <br />
                  <ul className="remove-bullets">
                    <li>
                      Developed an interactive pattern memory game on the BeagleBone Green using C, where players copy sequences displayed on an 8x8 LED matrix.
                      After each successful round, the sequence that has to be memorized increases in length, challenging the player's memory until an incorrect input triggers a game over state.
                    </li>
                    <br />
                    <li>
                      Programmed LED matrix control via I2C communication using register-level write operations to implement custom display logic.
                    </li>
                    <br />
                    <li>
                      Optimized real-time performance by using sleeps, delay loops, and debouncing to improve responsiveness and prevent premature user input from crashing the game.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/rushHour.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Rush Hour Game (Java)</h3>
                  <span className="date">Data Structures and Programming</span>
                  <br />
                  <a
                    href="http://www.sfu.ca/about.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Simon Fraser University
                  </a>
                  <br />
                  <ul className="remove-bullets">
                    <li>
                      Recreated the "Rush Hour" game where the user has to move cars
                      out of the way in order to clear a path for the target
                      car to exit the board.
                    </li>
                    <br />
                    <li>
                      Created a solver using Breadth-First Search to find a
                      solution to a given board and output a step-by-step
                      solution to a file.
                    </li>
                    <br />
                    <li>
                      Implemented unit testing to systematically ensure correctness and catch bugs during development.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/pong.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">FPGA Pong Game (VHDL + C++ via Vitis HLS)</h3>
                  <span className="date">Advanced Digital Systems Design</span>
                  <br />
                  <a
                    href="http://www.sfu.ca/about.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Simon Fraser University
                  </a>
                  <br />
                  <ul className="remove-bullets">
                    <li>
                      Designed and implemented a real-time Pong game on the Digilent ZedBoard (Zynq-7000 ARM SoC) using VHDL hardware blocks and C++ game logic.
                    </li>
                    <br />
                    <li>
                      Implemented a dual-core system:
                      <li>Core 0: Game logic, VGA output, and menu navigation.</li>
                      <li>Core 1: Audio playback for collisions, menu selection, and game-over sounds using flags stored in shared memory.</li>
                    </li>
                    <br />
                    <li>
                      Designed 2 custom hardware blocks in VHDL:<br />
                      <li>1. Game Object Overlay: Hardware rendered paddles and ball for 60 FPS gameplay.</li>
                      <li>2. 32-bit LFSR Pseudo-Random Number Generator: Used for AI opponent difficulty.</li>
                    </li>
                    <br />
                    <li>
                      Integrated software and hardware subsystems via AXI Lite interconnect, enabling low-latency updates of game state and VGA rendering.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/TPU.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">
                    Google Tensor Processing Unit (VHDL)
                  </h3>
                  <span className="date">Fundamentals of Digital Logic and Design</span>
                  <br />
                  <a
                    href="http://www.sfu.ca/about.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Simon Fraser University
                  </a>
                  <br />
                  <ul className="remove-bullets">
                    <li>
                      Designed and implemented a Tensor Processing Unit (TPU) in VHDL, mimicking the core architecture and functionality of Google's TPUv1 (2016)
                      for accelerating large-scale machine learning workloads.
                    </li>
                    <br />
                    <li>
                      Integrated register and memory modules (URAM, WRAM, 8-bit and 24-bit registers) with the processing unit, ensuring data coherence and low-latency computation.
                    </li>
                    <br />
                    <li>
                      Developed testbenches for each hardware component (STPU, URAM, WRAM, registers) and verified the results using ModelSim.
                    </li>
                    <li>
                      Achieved a fully functional, synthesizable design capable of accelerating small-scale machine learning computations.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/glasses.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">
                    Augmented Reality (AR) Transcription Glasses (Python + C++)
                  </h3>
                  <ul className="remove-bullets">
                    <li>
                      Designed and prototyped AR glasses capable of real-time transcription using a custom optical display system,
                      improving accessibility for the hearing impaired.
                    </li>
                    <br />
                    <li>
                      Implemented a 3-microphone beamforming algorithm in C++ to suppress background noise from lateral and rear
                      sources, improving transcription accuracy by 25%.
                    </li>
                    <br />
                    <li>
                      Optimized OpenAI Whisper-based transcription models to run efficiently on a Raspberry Pi 5, reducing average
                      inference latency to under 500ms.
                    </li>
                    <br />
                    <li>
                      Developed automated test pipelines to benchmark transcription accuracy and latency under varying noise
                      conditions.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/githubPages.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">
                    Personal Website (HTML/CSS + React)
                  </h3>
                  <ul className="remove-bullets">
                    <li>
                      Created this web page using HTML, CSS, JavaScript, and
                      the Bootstrap framework to track my academic and
                      professional journey
                    </li>
                    <br />
                    <li>
                      Used React for the website's front-end for a more
                      modular approach to web development.
                    </li>
                    <br />
                    <li>
                      Implemented fade in animations using JavaScript for a
                      more natural viewing experience.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/snake.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Snake (Python)</h3>
                  <ul className="remove-bullets">
                    <li>
                      Created a fully functioning Snake game complete with a
                      user interface using pygame.
                    </li>
                    <br />
                    <li>
                      Implemented a scoring system that tracks the user's
                      current score and also the user's high score.
                    </li>
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
                    <img
                      src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/wordCloud.png"
                      className="img-fluid shadow"
                      alt="Responsive"
                    ></img>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="subtitle">Word Cloud Generator (Python)</h3>
                  <ul className="remove-bullets">
                    <li>
                      Created a program that generates a word
                      cloud with the most frequent words appearing the largest
                      and the least common words appearing the smallest.
                    </li>
                    <br />
                    <li>
                      Used the TkInter Python library for the program's UI.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="end-section"></div>
            </FadeInSection>
          </div>
        </div >
      </div >
    );
  }
}
