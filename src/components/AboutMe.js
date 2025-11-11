import React, { Component } from "react";
import FadeInSection from './FadeInSection';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="gray new-section" id="about">
        <h1 className="title">About Me</h1>
        <FadeInSection>
          <div className="container">
            {/*Image carousel element*/}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
              {/**
               *               <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>

              </ol>
               * 
               */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/*Intro*/}
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                    <p className="text-center w-75">
                      I'm a Computer Engineering new grad with hands-on experience building production REST and gRPC microservices, mobile and web applications, automated testing pipelines,
                      embedded systems, and bare metal applications using VHDL and Vitis HLS.
                      <br /><br />
                      I've contributed to projects such as Trulioo's identity verfication software, real-time transcription AR glasses, automated test data creation tools, and analog and digital noise filters.

                      <br /><br />
                      A collection of my projects are detailed below.
                    </p>
                  </div>
                  <div className="carousel-space"></div>
                </div>
              </div>
              {/** 
               *<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              */}
            </div>
          </div>
          <div className="end-section"></div>
        </FadeInSection >
      </div >
    )
  }
}