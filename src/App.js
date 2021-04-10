import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import ContactMe from './components/ContactMe';

class App extends Component {
  render() {
    return(
      <div>
        <NavBar></NavBar>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Hackathons></Hackathons>
        <ContactMe></ContactMe>
      </div>
    );
  }
}

export default App;