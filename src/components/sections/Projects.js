import React from 'react';
import styled from 'styled-components';
import { Carousel as fromCarousel } from 'react-responsive-carousel';

const Container = styled.div`
  background: url(/images/backgrounds/graff.jpg) no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  padding: 20px;
  background: blue;
  margin: 20px;
  font-size: 20px;
  display: inline-block;
`;

const Image = styled.img`
  height: 600px;
  width: auto;
`;

const Carousel = styled(fromCarousel)`
  margin: auto 150px;
`;

const Legend = styled.a`
  text-decoration: none;
`;
const images = [
  '/images/carousel/ticTacDough.gif',
  '/images/carousel/gameOfLife.gif',
  '/images/carousel/flatCalc.gif',
  '/images/carousel/phishCalc.gif',
  '/images/carousel/simon.gif',
];


const Projects = () => (
  <Container id="projects">
    <Carousel axis="horizontal" showThumbs={false} infiniteLoop={true} dynamicHeight showStatus={false} showArrows={true} emulateTouch>
      <div>
        <img src={images[0]} alt=""/>
        <Legend
          className="legend"
          href="https://codepen.io/no_stack_dub_sack/full/YGNRxO"
          rel="noopener noreferrer"
          target="_blank"
          >
          Unbeatable Tic-Tac-Dough game: jQuery, Pug, LESS
        </Legend>
      </div>
      <div>
        <img src={images[1]} alt=""/>
        <Legend
          className="legend"
          href="https://codepen.io/no_stack_dub_sack/pen/bBpWvv"
          rel="noopener noreferrer"
          target="_blank"
          >
          Conway's Game of Life: ReactJS, Sass
        </Legend>
      </div>
      <div>
        <img src={images[2]} alt=""/>
        <Legend
          className="legend"
          href="https://codepen.io/no_stack_dub_sack/pen/jrxpKP"
          rel="noopener noreferrer"
          target="_blank"
          >
          Flat Design Calculator (Designed for freeCodeCamp <a href="#">chalenge</a>): ReactJS, Sass
        </Legend>
      </div>
      <div>
        <img src={images[3]} alt=""/>
        <Legend
          className="legend"
          href="https://codepen.io/no_stack_dub_sack/full/KrbYaa"
          rel="noopener noreferrer"
          target="_blank"
          >
          Skeuomorphic Calculator: jQuery, Less, HTML
        </Legend>
      </div>
      <div>
        <img src={images[4]} alt=""/>
        <Legend
          className="legend"
          href="https://codepen.io/no_stack_dub_sack/full/KrbYaa"
          rel="noopener noreferrer"
          target="_blank"
          >
          Simon game: ReactJS, Sass
        </Legend>
      </div>
    </Carousel>
  </Container>
);


export default Projects;
