import React from 'react';
import styled from 'styled-components';
import Carousel, { darkGreen } from '../common/Carousel';
import carouselData from '../../assets/carouselData';
import Logos from '../common/Logos';
import {
  absoluteCenter,
  carouselReactTransitions,
  flexCenter
} from '../../styleUtils';

const Container = styled.div`
  background: #8ACDEA;
  height: 100vh;
  position: relative;
`;

export const LeftPanel = styled.div`
  background: #5d4dd4;
  display: inline-block;
  float: left;
  height: 70%;
  position: relative;
  width: 60%;
  ${carouselReactTransitions()}
  @media (max-width: 975px) {
    width: 100%;
  }
`;

const RightPanel = styled.div`
  background: #b44d5a;
  display: inline-block;
  float: right;
  height: 70%;
  position: relative;
  width: 40%;
  div:first-of-type {
    ${absoluteCenter()}
    color: #7a1b28;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    width: 320px;
  }
  @media (max-width: 975px) {
    width: 100%;
    height: 30%;
    div:last-of-type {
      bottom: auto;
      top: 10px;
    }
    div:first-of-type {
      top: 58%;
      font-size: 18px;
      line-height: 19px;
    }
  }
`;

const BottomPanel = styled.div`
  background: ${darkGreen};
  display: inline-block;
  float: left;
  height: 30%;
  position: relative;
  width: 100%;
  @media (max-width: 975px) {
    display: none;
  }
`;

const Picker = styled.div`
  ${flexCenter()}
  bottom: 12px;
  height: 30px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 100%;
  span {
    color: #8b313d;
    display: inline-block;
    font-size: 18px;
    transition: all 150ms ease-in;
    &.selected {
      color: #7a1b28;
    }
  }
  section {
    background: #7a1b28;
    border-radius: 20px;
    cursor: pointer;
    display: inline-block;
    height: 30px;
    margin: 0 10px;
    position: relative;
    width: 80px;
    span {
      background: #b44d5a;
      border-radius: 20px;
      display: block;
      height: 26px;
      left: 0;
      margin: 2px;
      position: absolute;
      width: 40px;
      &.active {
        left: 36px;
      }
    }
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstImgOfCategory: carouselData.openSource.images[0],
      category: 'openSource',
      buttonActive: false
    }
  }

  changeCarouselCategory = () => {
    if (this.state.category === 'openSource') {
      this.setState({
        buttonActive: !this.state.buttonActive,
        category: 'codePens',
        firstImgOfCategory: carouselData.codePens.images[0],
      });
    } else {
      this.setState({
        buttonActive: !this.state.buttonActive,
        category: 'openSource',
        firstImgOfCategory: carouselData.openSource.images[0],
      });
    }
  }

  render() {
    const selectionInitialized = (this.state.category === 'openSource');
    return (
      <Container id="projects">
        <Carousel
          selectionInitialized={selectionInitialized}
          category={this.state.category}
          firstImgOfCategory={this.state.firstImgOfCategory}
        />
        <RightPanel>
          <div>
            <h2>{'Core Competencies'}</h2>
            {`JavaScript, ReactJS, Redux, Sass/Less, CSS3, HTML5, Git.`}
            <br /><br />
            {` Understanding of jQuery, NodeJS, ExpressJS, MongoDB.`}
          </div>
          <Picker>
            <span className={selectionInitialized ? 'selected' : ''}>
              Open Source
            </span>
            <section onClick={this.changeCarouselCategory}>
              <span className={this.state.buttonActive ? 'active' : ''} />
            </section>
            <span className={!selectionInitialized ? 'selected' : ''}>
              Games/Demos
            </span>
          </Picker>
        </RightPanel>
        <BottomPanel>
          <Logos />
        </BottomPanel>
      </Container>
    );
  }
}

export default Projects;
