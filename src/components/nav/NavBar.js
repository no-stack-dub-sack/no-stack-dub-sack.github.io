import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.header`
  background: #e0e0eb;
  height: 60px;
  opacity: 0.9;
  position: fixed;
  width: 100%;
  z-index: 4;
`;

const NavRight = styled.div`
  display: inline-block;
  float: right;
  height: 59px;
`;

const navStyles = () => {
  return `
    color: #5b6d71;
    font-family: arial;
    font-size: 20px;
    font-weight: bold;
    height: inherit;
    padding: 20px 15px;
    text-decoration: none;
  `;
}

const NavLeft = styled.div`
  ${navStyles()}
  display: inline-block;
  height: 59px;
  font-family: Lobster;
  float: left;
`;

const NavLink = styled.a`
  ${navStyles()}
  display: ${props => props.display};
  font-family: Montserrat;
  opacity: 1;
  text-align: right;
  transition: 500ms opacity ease-in-out, 800ms background ease;
  &:hover {
    color: white;
    text-shadow: 1px 1px 100px black;
  }
  ${props => props.isStatic ? `
    @media (max-width: 720px) {
      display: none;
    }
  `:`
    padding: 10px 15px 10px;
    &:last-of-type {
      padding-bottom: 20px;
    }
    @media (min-width: 720px) {
      display: none;
    }
  ` }
  ${props => props.isHidden && `
    opacity: 0.01;
    visibility: hidden;
  `}
  ${props => props.isActive && `
    background: white;
    &:hover {
      color: #a2a2d0;
    }
  `}

`;

const Hamburger = styled.i`
  color: #5b6d71;
  display: inline-block;
  padding: 14px 18px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  @media (min-width: 720px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  background: #e0e0eb;
  position: absolute;
  transition: top 300ms ease;
  width: 100%;
  z-index: -3 !important;
  ${props => props.isOpen
    ? 'top: 55px;'
    : 'top: -180px;'
  }
`;

const NavItems = ({ display, isStatic, hide, pos }) => (
  <div>
    <NavLink isActive={pos === 'home'} display={display} isHidden={hide} isStatic={isStatic} href="#home">Home</NavLink>
    <NavLink isActive={pos === 'about'} display={display} isHidden={hide} isStatic={isStatic} href="#about">About</NavLink>
    <NavLink isActive={pos === 'portfolio'} display={display} isHidden={hide} isStatic={isStatic} href="#projects">Portfolio</NavLink>
    <NavLink isActive={pos === 'contact'} display={display} isHidden={hide} isStatic={isStatic} href="#contact">Contact</NavLink>
  </div>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      position: 'home'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    var last_known_scroll_position = 0;
    var viewHeight = window.innerHeight;
    var ticking = false;
    var position;
    var threshold = (viewHeight/3);
    var window1 = (viewHeight) - threshold;
    var window2 = (viewHeight*2) - threshold;
    var window3 = (viewHeight*3) - threshold;

    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (last_known_scroll_position < window1) {
          position = 'home';
        }
        if (last_known_scroll_position >= window1 && last_known_scroll_position < window2) {
          position = 'about';
        }
        if (last_known_scroll_position >= window2 && last_known_scroll_position < window3) {
          position = 'portfolio';
        }
        if (last_known_scroll_position >= window3) {
          position = 'contact';
        }
        if (this.state.position !== position) {
          this.setState({ position });
        }
        ticking = false;
      }.bind(this));
    }
    ticking = true;
  }

  toggleDropdown = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }

  render() {
    return (
      <NavWrapper>
        <NavLeft>
          Peter A. Weinberg
        </NavLeft>
        <NavRight>
          <NavItems pos={this.state.position} display='inline-block' isStatic={true} />
          <Hamburger onClick={this.toggleDropdown} className="fa fa-bars fa-2x"/>
        </NavRight>
        <Dropdown isOpen={this.state.isDropdownOpen}>
          <NavItems pos={this.state.position} hide={!this.state.isDropdownOpen} display="block" />
        </Dropdown>
      </NavWrapper>
    );
  }
}

export default NavBar;
