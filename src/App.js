import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Academia from './components/Academia';
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return(
      <div>
        <NavBar></NavBar>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Hackathons></Hackathons>
        <Projects></Projects>
        <Academia></Academia>
      </div>
    );
  }
}

export default App;