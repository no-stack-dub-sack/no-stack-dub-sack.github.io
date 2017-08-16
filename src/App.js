import React, { Component } from 'react';
import NavBar from './components/nav/NavBar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Projects />
      </div>
    );
  }
}

export default App;
