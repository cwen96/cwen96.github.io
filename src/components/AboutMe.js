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
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/*Intro*/}
                <br />
                <img className="d-block w-75 mx-auto" src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/cover.png" alt="First slide"></img>
                <div className="carousel-space"></div>
              </div>
              {/*World map*/}
              <div className="carousel-item">
                <img className="d-block w-75 mx-auto" src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/worldMap.png" alt="Second slide"></img>
              </div>
              {/*NYC*/}
              <div className="carousel-item">
                <img className="d-block w-75 mx-auto" src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/nyc.png" alt="Third slide"></img>
              </div>
              {/*Times Square*/}
              <div className="carousel-item">
                <img className="d-block w-75 mx-auto" src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/timesSquare.png" alt="Fourth slide"></img>
              </div>
              {/*Banff*/}
              <div className="carousel-item">
                <img className="d-block w-75 mx-auto" src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/banff.png" alt="Fifth slide"></img>
              </div>
              {/*Lake Louise*/}
              <div className="carousel-item">
                <img className="d-block w-75 mx-auto" src="https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/lakeLouise.png" alt="Sixth slide"></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="end-section"></div>
        </FadeInSection>
      </div>
    )
  }
}