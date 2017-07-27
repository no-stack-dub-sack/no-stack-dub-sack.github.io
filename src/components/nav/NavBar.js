import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

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
    padding: 18px 15px;
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
  transition: 500ms opacity ease-in-out;
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

const NavItems = ({ display, isStatic, hide }) => (
  <div>
    <NavLink display={display} isHidden={hide} isStatic={isStatic} href="#home">Home</NavLink>
    <NavLink display={display} isHidden={hide} isStatic={isStatic} href="#about">About</NavLink>
    <NavLink display={display} isHidden={hide} isStatic={isStatic} href="#projects">Portfolio</NavLink>
    <NavLink display={display} isHidden={hide} isStatic={isStatic} href="#projects">Contact</NavLink>
  </div>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    }
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
          <NavItems display='inline-block' isStatic={true} />
          <Hamburger onClick={this.toggleDropdown} className="fa fa-bars fa-2x"/>
        </NavRight>
        <Dropdown isOpen={this.state.isDropdownOpen}>
          <NavItems hide={!this.state.isDropdownOpen} display="block" />
        </Dropdown>
      </NavWrapper>
    );
  }
}

export default NavBar;
