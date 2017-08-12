import React from 'react';
import styled from 'styled-components';
require('smoothscroll-polyfill').polyfill()

const NavWrapper = styled.header`
  background: #e0e0eb;
  height: 60px;
  opacity: 0.9;
  position: fixed;
  width: 100vw;
  z-index: 4;
  padding-right: 15px;
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

const NavLink = styled.div`
  ${navStyles()}
  cursor: pointer;
  display: ${props => props.cssDisplayValue};
  font-family: Montserrat;
  opacity: 1;
  text-align: right;
  transition: 500ms opacity ease-in-out, 200ms background ease;
  &:hover {
    color: white;
    text-shadow: 1px 1px 100px black;
  }
  ${props => props.isStatic ? `
    @media (max-width: 720px) {
      display: none;
    }
  `:`
    padding: 2-px 32px 2-px;
    &:last-of-type {
      padding-bottom: 20px;
    }
    @media (min-width: 721px) {
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
  @media (min-width: 721px) {
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

const NavItems = ({ display, isStatic, hide, pos, handleClick }) => (
  <div>
    <NavLink
      isActive={pos === 'home'}
      cssDisplayValue={display}
      isHidden={hide}
      isStatic={isStatic}
      id="__home"
      onClick={handleClick}
      >
      Home
    </NavLink>
    <NavLink
      isActive={pos === 'about'}
      cssDisplayValue={display}
      isHidden={hide}
      isStatic={isStatic}
      id="__about"
      onClick={handleClick}
      >
      About
    </NavLink>
    <NavLink
      isActive={pos === 'portfolio'}
      cssDisplayValue={display}
      isHidden={hide}
      isStatic={isStatic}
      id="__projects"
      onClick={handleClick}
      >
      Portfolio
    </NavLink>
    <NavLink
      isActive={pos === 'contact'}
      cssDisplayValue={display}
      isHidden={hide}
      isStatic={isStatic}
      id="__contact"
      onClick={handleClick}
      >
      Contact
    </NavLink>
  </div>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isMobile: false,
      position: 'home'
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.throttleResizeEvent, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener("resize", this.throttleResizeEvent, false);
  }

  handleScroll = (e) => {
    var viewHeight = window.innerHeight;
    var ticking = false, position;
    var scrollPosition = window.scrollY;

    var threshold = (viewHeight/3);
    var window1 = (viewHeight) - threshold;
    var window2 = (viewHeight*2) - threshold;
    var window3 = (viewHeight*3) - threshold;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (scrollPosition < window1) {
          position = 'home';
        }
        if (scrollPosition >= window1 && scrollPosition < window2) {
          position = 'about';
        }
        if (scrollPosition >= window2 && scrollPosition < window3) {
          position = 'portfolio';
        }
        if (scrollPosition >= window3) {
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

  throttleResizeEvent = (e) => {
    var resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        this.handleResize();
      }.bind(this), 66);
    }
  }

  handleResize = () => {
    var viewWidth = window.innerWidth;

    // to prevent smooth scrolling on mobile
    // see line 230
    if (viewWidth <= 500 && !this.state.isMobile) {
      this.setState({ isMobile: true });
    } else if (viewWidth > 500 && this.state.isMobile) {
      this.setState({ isMobile: false });
    }

    // close dropdown if open when resize so not
    // annoyingly open when resize back down
    if (viewWidth > 720 && this.state.isDropdownOpen) {
      this.setState({ isDropdownOpen: false });
    }
  }

  smoothScrollToSection = ({ target: { id } }) => {
    const hook = id.slice(2);
    document.querySelector(`#${hook}`).scrollIntoView({
      behavior: `${!this.state.isMobile ? 'smooth' : 'instant'}`
    });
    this.setState({ isDropdownOpen: false });
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
          <NavItems
            display='inline-block'
            handleClick={this.smoothScrollToSection}
            isStatic={true}
            pos={this.state.position}
            />
          <Hamburger
            onClick={this.toggleDropdown}
            className="fa fa-bars fa-2x"
            />
        </NavRight>
        <Dropdown isOpen={this.state.isDropdownOpen}>
          <NavItems
            display="block"
            handleClick={this.smoothScrollToSection}
            hide={!this.state.isDropdownOpen}
            pos={this.state.position}
            />
        </Dropdown>
      </NavWrapper>
    );
  }
}

export default NavBar;
