import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const Container = styled.div`
  background: url(/images/backgrounds/graff.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  .initialize-appear,
  .fromRight-enter {
    transform: translateX(-200%);
  }

  .initialize-appear.initialize-appear-active,
  .fromRight-enter.fromRight-enter-active {
    transform: translateX(0);
    transition: transform 600ms ease-in;
  }

  .fromRight-leave {
    transform: translateX(0);
  }

  .fromRight-leave.fromRight-leave-active {
    transform: translateX(200%);
    transition: transform 600ms ease-in;
  }

  .fromLeft-enter {
    transform: translateX(200%);
  }

  .fromLeft-enter.fromLeft-enter-active {
    transform: translateX(0);
    transition: transform 600ms ease-in;
  }

  .fromLeft-leave {
    transform: translateX(0);
  }

  .fromLeft-leave.fromLeft-leave-active {
    transform: translateX(-200%);
    transition: transform 600ms ease-in;
  }
`;

const CarouselContainer = styled.div`
  height: 450px;
  transition: height 200ms, width 200ms;
  width: 800px;
  @media (max-width: 850px) {
    height: 337.5px;
    width: 600px;
  }
  @media (max-width: 650px) {
    height: 300px;
    width: 533.34px;
  }
  @media (max-width: 560px) {
    height: 225px;
    width: 400px;
  }
  @media (max-width: 430px) {
    height: 168.75;
    width: 300px;
  }
`;

const Carousel = CarouselContainer.extend`
  left: 50%;
  margin-left: -400px;
  margin-top: -225px;
  position: absolute;
  top: 50%;
  transition: margin-top 200ms, margin-left 200ms;
  @media (max-width: 850px) {
    margin-left: -300px;
    margin-top: -168.75px;
  }
  @media (max-width: 650px) {
    margin-left: -266.67px;
    margin-top: -150px;
  }
  @media (max-width: 560px) {
    margin-left: -200px;
    margin-top: -112.5px;
  }
  @media (max-width: 430px) {
    margin-left: -150px;
    margin-top: -84.375px;
  }
`;

const ButtonContainer = styled.div`
  bottom: 15%;
  left: 50%;
  margin-left: -400px;
  position: absolute;
  transition: bottom 200ms;
  width: 800px;
  @media (max-width: 850px) {
    bottom: 22%;
  }
  @media (max-width: 650px) {
    bottom: 25%;
  }
  @media (max-width: 560px) {
    bottom: 30%;
    margin-left: -250px;
    width: 500px;
  }
  @media (max-width: 430px) {
    bottom: 27%;
  }
`;

const Button = styled.i`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 400px;
  @media (max-width: 560px) {
    width: 250px;
  }
`;

const Image = styled.img`
  height: 300px;
  width: auto;
`;

const ThumbnailBox = CarouselContainer.extend`
  background: url(${props => props.img}) no-repeat center center;
  background-size: cover;
  border-radius: 20px;
`;

const Overlay = CarouselContainer.extend`
  background: rgba(0, 0, 0, 0.01);
  border-radius: inherit;
  position: relative;
  transition: background 500ms ease;
  .inner-description {
    color: white;
    font-family: Montserrat;
    left: 50%;
    opacity: 0.01;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 500ms ease;
    width: 90%;
    a {
      color: #337ab7;
      text-decoration: none;
      font-weight: bold;
    }
    span {
      color: #c13c1f;
      font-weight: bold;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    .inner-description {
      opacity: 1;
    }
    ${props => props.shadow && `
      @media (max-width: 560px) {
        box-shadow: 100px 100px 1px 1000px black;
        z-index: 2;
      }
    `}
  }
`;

const Indicator = styled.div`
  background: black;
  border-radius: 100%;
  cursor: pointer;
  display: inline-block;
  height: 10px;
  margin: 5px;
  transition: background 400ms;
  width: 10px;
  &.active {
    background: #c4c6c0;
  }
`;

const IndicatorContainer = styled.div`
  bottom: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 50%;
  margin-left: -100px;
  position: absolute;
  width: 200px;
  transition: bottom 200ms;
  @media (max-width: 850px) {
    bottom: 22%;
  }
  @media (max-width: 650px) {
    bottom: 25%;
  }
  @media (max-width: 560px) {
    bottom: 30%;
  }
  @media (max-width: 430px) {
    bottom: 27%;
  }
`;

const Select = styled.select`
  font-size: 15px;
  margin: 40px !important;
`;

const Dropdown = styled.div`
  margin: 80px auto 0 auto;
  transition: margin 200ms;
  width: 200px;
  @media (max-width: 850px) {
    margin: 135px auto 0 auto;
  }
  @media (max-width: 650px) {
    margin: 160px auto 0 auto;
  }
  @media (max-width: 560px) {
    margin: 200px auto 0 auto;
  }
  @media (max-width: 430px) {
    margin: 230px auto 0 auto;
  }
`;

const carouselData = {
  codePens: {
    images: [
      '/images/carousel/gameOfLife.gif',
      '/images/carousel/ticTacDough.gif',
      '/images/carousel/flatCalc.gif',
      '/images/carousel/phishCalc.gif',
      '/images/carousel/simon.gif'
    ],
    hrefs: [
      'https://codepen.io/no_stack_dub_sack/full/YGNRxO',
      'https://codepen.io/no_stack_dub_sack/full/bBpWvv',
      'https://codepen.io/no_stack_dub_sack/full/jrxpKP',
      'https://codepen.io/no_stack_dub_sack/full/KrbYaa',
      'https://codepen.io/no_stack_dub_sack/full/KrbYaa'
    ],
    captions: [
      'Conway\'s Game of Life: ReactJS, Sass',
      'Unbeatable Tic-Tac-Dough game: jQuery, Pug, LESS',
      'Flat Design Calculator (Designed for <a href="#">this</a> freeCodeCamp challenge): ReactJS, Sass',
      'Skeuomorphic Calculator: jQuery, Less, HTML',
      'Simon game: ReactJS, Sass'
    ],
    indicators: ['_0', '_1', '_2', '_3', '_4']
  },
  openSource: {
    images: [
      '/images/oss/FCCAN.gif',
      '/images/oss/reactChallenges.gif',
      '/images/oss/fccTests.gif',
          ],
    hrefs: [
      'https://fcc-alumni.com',
      'http://hysterical-amusement.surge.sh/',
      'https://codepen.io/collection/npZPmR/'
    ],
    captions: [
      `<a target="_blank" rel="noopener noreferrer"
      href="https://fcc-alumni.com">freeCodeCamp Alumni Network:</a>
      A mentorship driven Social network built for
      the freeCodeCamp community. By far the biggest project I've created from scratch
      &mdash; I coded about 80-90% of this application as
      an exercise in learning full-stack JavaScript development. Current
      Membership: 192! You can read an article I wrote about this project for
      freeCodeCamp's Medium publication <a href="https://medium.freecodecamp.org/the-freecodecamp-alumni-network-a-homegrown-mentorship-network-for-fcc-alumni-529e4531c34f"
      target="_blank" rel="noopener noreferrer">here</a>.
      <br /><br />
      <span>Technologies:</span> ReactJS,
      Redux, React-Redux, React-Router, Docker, ExpressJS, NodeJS, Mongoose,
      MongoDB, Axios, PassportJS, Styled-Components, Sass, Semantic-UI, & more.
      <br /><br />
      Check out our repo at <a target="_blank" rel="noopener noreferrer"
      href="https://github.com/FCC-Alumni/alumni-network">
      https://github.com/FCC-Alumni/alumni-network</a>`,

      `<a target="_blank" rel="noopener noreferrer" href="http://hysterical-amusement.surge.sh/">
      Interactive ReactJS Challenges:</a> This project was developed for <a
      href="http://beta.freecodecamp.com/en/challenges/react/introduction-to-the-react-challenges"
      target="_blank" rel="noopener noreferrer">beta.freeCodeCamp.com.</a> freeCodeCamp has been working on
      a major curriculum expansion for several months, and these challenges will eventually
      be an integral part of the Frontend Libraries Certificate section. I contributed several
      challenges to this project, including designing and writing the challenges, developing
      the code, and writing the unit tests.
      <br /><br />
      The testing framework, primarily developed by <a href="http://sean-smith.me/"
      target="_blank" rel="noopener noreferrer">Sean Smith</a>, tests React code
      in the browser using AirBnB's Enzyme library, and includes live rendering/output
      when code is changed.
      <br /><br />
      <span>Technologies:</span> ReactJS, Enzyme, React-CodeMirror, & more.
      <br /><br />
      Check out the repo at <a href="https://github.com/bonham000/fcc-react-tests-module/"
      target="_blank" rel="noopener noreferrer">https://github.com/bonham000/fcc-react-tests-module/</a>`,

      `<a target="_blank" rel="noopener noreferrer" href="https://codepen.io/collection/npZPmR/">
      Frontend Test Suites:</a> This project was also developed for the freeCodeCamp curriculum expansion.
      As more and more students join and utilize freeCodeCamp’s learning platform, we realized we needed
      a standardized way to measure completion of required projects. A test suite was created for each &mdash;
      as students code, they pass/fail tests and receive feedback and helpful errors along the way!
      <br /><br />
      The testing framework was developed by myself and another freeCodeCamp contributor, while I
      developed most of the individual test suites. We bundled the code using Webpack, and serve
      it over a CDN created from our repo. Student’s can then include the test framework in
      their projects (in a CodePen or locally) via a script tag.
      <br /><br />
      <span>Technologies:</span> JavaScript, Mocha, Chai, jQuery, Selenium, Webpack
      <br /><br />
      Check out the repo at <a href="https://github.com/freeCodeCamp/testable-projects-fcc"
      target="_blank" rel="noopener noreferrer">https://github.com/freeCodeCamp/testable-projects-fcc</a>`
    ],
    indicators: ['_0', '_1', '_2']
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: '/images/oss/FCCAN.gif',
      direction: 'initialize',
      content: 'openSource'
    }
  }

  carouselRight = () => {
    this.setState({ direction: 'fromLeft' }, () => {
      const { content } = this.state;
      let nextImage = carouselData[content].images.indexOf(this.state.currentImage) + 1;
      if (nextImage === carouselData[content].images.length) {
        nextImage = 0;
      }
      this.setState({
        currentImage: carouselData[content].images[nextImage]
      });
    });
  }

  carouselLeft = () => {
    this.setState({ direction: 'fromRight' }, () => {
      const { content } = this.state;
      let nextImage = carouselData[content].images.indexOf(this.state.currentImage) - 1;
      if (nextImage < 0) {
        nextImage = carouselData[content].images.length - 1;
      }
      this.setState({
        currentImage: carouselData[content].images[nextImage]
      });
    });
  }

  goToImage = (e) => {
    const index = e.target.id.slice(1);
    this.setState({
      currentImage: carouselData[this.state.content].images[index],
      direction: index > 2 ? 'fromLeft' : 'fromRight'
    });
  }

  changeContent = () => {
    if (this.state.content === 'codePens') {
      this.setState({
        content: 'openSource',
        currentImage: carouselData.openSource.images[0],
        direction: 'fromRight'
      });
    } else {
      this.setState({
        content: 'codePens',
        currentImage: carouselData.codePens.images[0],
        direction: 'fromRight'
      });
    }
  }

  render() {
    const { currentImage, content } = this.state;
    const item = <Image src={currentImage} key={currentImage} />;
    const _indicators = carouselData[content].indicators.map((el, idx) => (
      <Indicator
        className={carouselData[content]
          .images.indexOf(currentImage) === idx ? 'active' : ''}
        id={el}
        key={el}
        onClick={this.goToImage}
        />
    ));
    return (
      <Container id="projects">
        <Dropdown>
          <Select onChange={this.changeContent} name="select">
            <option value="Open Source">Open Source</option>
            <option value="Code Pens">Code Pens</option>
          </Select>
        </Dropdown>
        <CSSTransitionGroup
          transitionName={this.state.direction}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          transitionAppear={true}
          transitionAppearTimeout={600}>
          <Carousel key={currentImage}>
            <a
              href={carouselData[content]
                .hrefs[carouselData[content]
                .images.indexOf(currentImage)]}
              rel="noopener noreferrer"
              target="_blank">
              <ThumbnailBox img={currentImage}>
                <Overlay shadow={this.state.content === 'openSource' && true}>
                  <span
                    className="inner-description"
                    dangerouslySetInnerHTML={{
                      __html: carouselData[content]
                        .captions[carouselData[content]
                        .images.indexOf(currentImage)]
                    }} />
                  </Overlay>
                </ThumbnailBox>
            </a>
          </Carousel>
        </CSSTransitionGroup>
        <ButtonContainer>
          <Button
            className="fa fa-chevron-left fa-2x"
            onClick={this.carouselLeft}
            />
          <Button
            className="fa fa-chevron-right fa-2x"
            onClick={this.carouselRight}
            />
        </ButtonContainer>
        <IndicatorContainer>
          {_indicators}
        </IndicatorContainer>
      </Container>
    );
  }
}

export default Projects;
