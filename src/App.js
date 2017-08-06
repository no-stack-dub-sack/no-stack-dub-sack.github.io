import React, { Component } from 'react';
import NavBar from './components/nav/NavBar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
