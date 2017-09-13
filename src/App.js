import React, { Component } from 'react';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  position: relative;

  .c-hamburger--htra.is-active span {
    transform: rotate(${props => props.pos === 'bottom' ? '450deg' : '270deg'});
  }

  .c-hamburger span,
  .c-hamburger span::before,
  .c-hamburger span::after {
    background-color:
    ${props => props.pos === 'bottom' ? '#7a1b28' : '#EDE6F2'};
  }
`;

const ButtonContainer = styled.div`
  opacity: 1;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  transition: opacity .5s;
  ${ props => props.pos === 'scrolling' &&
    'opacity: 0.01;'
  }

  ${ props => props.pos === 'bottom' &&
    `
    @media (max-width: 975px) {
      top: auto;
      bottom: 0;
    }
    `
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      position: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    var viewHeight = window.innerHeight;
    var ticking = false, position;
    var scrollPosition = window.scrollY;
    var window1 = viewHeight - (viewHeight/1.5);

    if (!ticking) {
      window.requestAnimationFrame(function() {
        console.log(scrollPosition, viewHeight)
        if (scrollPosition > window1) {
          position = 'scrolling';
        }
        if (scrollPosition === viewHeight) {
          position = 'bottom'
        }
        if (this.state.position !== position) {
          this.setState({ position });
        }
        ticking = false;
      }.bind(this));
    }
    ticking = true;
  }

  toggleHamburger = (e) => {
    e.preventDefault();

    var selector = this.state.position === 'bottom'
      ? '#home'
      : '#projects';

    this.hamburger.classList.contains("is-active") === true
      ? this.hamburger.classList.remove("is-active")
      : this.hamburger.classList.add("is-active");

    if (this.state.count % 2 !== 0) {
      document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
      });
    }

    this.setState({ count: this.state.count+1 });
  }

  render() {
    return (
      <AppContainer pos={this.state.position}>
        <ButtonContainer pos={this.state.position}>
          <button
            onClick={this.toggleHamburger}
            ref={(button) => { this.hamburger = button }}
            className="c-hamburger c-hamburger--htra"
            >
            <span></span>
          </button>
        </ButtonContainer>
        <Home />
        <Projects />
      </AppContainer>
    );
  }
}

export default App;
