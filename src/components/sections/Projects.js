import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const Container = styled.div`
  background: url(http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320461/graff_h23ddb.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: scroll;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  .fromRight-enter {
    transform: translateX(-200%);
  }

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

  .initialize-appear,
  .fromLeft-enter {
    transform: translateX(200%);
  }

  .initialize-appear.initialize-appear-active,
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

const Carousel = styled.div`
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

const CarouselContainer = Carousel.extend`
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
  margin-left: -250px;
  position: absolute;
  transition: bottom 200ms;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 850px) {
    bottom: 22%;
    margin-left: -200px;
    width: 400px;
  }
  @media (max-width: 650px) {
    bottom: 25%;
    margin-left: -150px;
    width: 300px;
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
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  text-align: center;
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  -webkit-text-stroke: 1px black;
  font-size: 33px;
  @media (max-width: 560px) {
    width: 250px;
  }
`;

const ThumbnailBox = Carousel.extend`
  background: url(${props => props.img}) no-repeat center center;
  background-size: cover;
  border-radius: 20px;
`;

const Overlay = Carousel.extend`
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
    span {
      color: #c13c1f;
      font-weight: bold;
    }
    a,
    span.blue {
      color: #337ab7;
      text-decoration: none;
      font-weight: bold;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    .inner-description {
      opacity: 1;
    }
    ${props => props.shadow && `
      @media (max-width: 650px) {
        box-shadow: 100px 100px 1px 1000px black;
        z-index: 2;
      }
    `}
  }
`;

const Indicator = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 100%;
  box-shadow: 2px 1px black;
  cursor: pointer;
  display: inline-block;
  height: 12px;
  margin: 5px;
  transition: background 500ms;
  width: 12px;
  &.active {
    background: #fbc689;
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
  box-shadow: 4px 4px black;
  font-size: 15px;
  margin: 40px !important;
`;

const Dropdown = styled.div`
  margin: 80px auto 0 auto;
  transition: margin 200ms;
  width: 290px;
  @media (max-width: 850px) {
    margin: 135px auto 0 auto;
  }
  @media (max-width: 650px) {
    margin: 160px auto 0 auto;
  }
  @media (max-width: 560px) {
    margin: 50px auto 0 auto;
  }
`;

const carouselData = {
  codePens: {
    images: [
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320400/gameOfLife_kgdytl.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320401/ticTacDough_hhndio.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320400/flatCalc_vnjjnd.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320401/simon_mcvkb1.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320400/phishCalc_ofdobg.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320403/markdown_tyuddu.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320400/recipes_hrctci.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320400/drums_g1wh4y.gif',
    ],
    hrefs: [
      'https://codepen.io/no_stack_dub_sack/full/bBpWvv',
      'https://codepen.io/no_stack_dub_sack/full/YGNRxO',
      'https://codepen.io/no_stack_dub_sack/full/jrxpKP',
      'https://codepen.io/no_stack_dub_sack/full/KrbYaa',
      'https://codepen.io/no_stack_dub_sack/full/KrbYaa',
      'https://codepen.io/no_stack_dub_sack/full/JbPZvm/',
      'https://codepen.io/no_stack_dub_sack/full/GNEJWx/',
      'https://codepen.io/no_stack_dub_sack/full/woQzNW/'
    ],
    captions: [
      'Conway\'s Game of Life: ReactJS, Sass<br />(Designed for <a target="_blank" rel="noopener noreferrer" href="http://beta.freecodecamp.com/en/challenges/front-end-frameworks-projects/build-a-javascript-calculator">this</a> freeCodeCamp challenge)',
      'Unbeatable Tic-Tac-Dough game: jQuery, Pug, LESS',
      'Flat Design Calculator: ReactJS, Sass<br />(Designed for <a target="_blank" rel="noopener noreferrer" href="http://beta.freecodecamp.com/en/challenges/coding-interview-take-home-projects/build-the-game-of-life">this</a> freeCodeCamp challenge)',
      'Simon game: ReactJS, Sass',
      'Skeuomorphic Calculator: jQuery, Less, HTML',
      'Markdown Previewer and Editing Toolbar: ReactJS, MarkedJS, Sass<br />(Designed for <a target="_blank" rel="noopener noreferrer" href="http://beta.freecodecamp.com/en/challenges/front-end-frameworks-projects/build-a-markdown-previewer">this</a> freeCodeCamp challenge)',
      'Simple CRUD Recipe App: ReactJS, Sass<br />(Designed for <a target="_blank" rel="noopener noreferrer" href="http://beta.freecodecamp.com/en/challenges/coding-interview-take-home-projects/build-a-recipe-box">this</a> freeCodeCamp challenge)',
      'Basic Drum Machine: ReactJS, Sass<br />(Designed for <a target="_blank" rel="noopener noreferrer" href="http://beta.freecodecamp.com/en/challenges/front-end-frameworks-projects/build-a-drum-machine">this</a> freeCodeCamp challenge)',
    ]
  },
  openSource: {
    images: [
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320451/FCCAN_ykaig8.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320449/reactChallenges_pnwxun.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320449/fccTests_arjgge.gif',
      'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320450/arrays_f0oxgc.gif'
          ],
    hrefs: [
      'https://fcc-alumni.com',
      'http://hysterical-amusement.surge.sh/',
      'https://codepen.io/collection/npZPmR/',
      'http://beta.freecodecamp.com/en/challenges/basic-data-structures/add-items-to-an-array-with-push-and-unshift'
    ],
    captions: [
      `<span class='blue'>freeCodeCamp Alumni Network:</span> A mentorship driven
      Social network built for the freeCodeCamp community. By far the biggest project
      I've created from scratch &mdash; I coded about 80-90% of this application as
      an exercise in learning full-stack JavaScript development. Current Membership:
      192! You can read an article I wrote about this project for freeCodeCamp's
      Medium publication <a href="https://goo.gl/Rw8Ndk" target="_blank" rel="
      noopener noreferrer">here</a>.
      <br /><br />
      <span>Technologies:</span> ReactJS,
      Redux, React-Redux, React-Router, Docker, ExpressJS, NodeJS, Mongoose,
      MongoDB, Axios, PassportJS, Styled-Components, Sass, Semantic-UI, & more.
      <br /><br />
      Check out our repo at <a target="_blank" rel="noopener noreferrer"
      href="https://github.com/FCC-Alumni/alumni-network">
      https://github.com/FCC-Alumni/alumni-network</a>`,

      `<span class='blue'>Interactive ReactJS Challenges:</span> This project was
      developed for <a href="http://beta.freecodecamp.com/en/challenges/react/
      introduction-to-the-react-challenges" target="_blank" rel="noopener noreferrer">
      beta.freeCodeCamp.com.</a> freeCodeCamp has been working on a major curriculum
      expansion for several months, and these challenges will eventually be an integral
      part of the Frontend Libraries Certificate section. I contributed several challenges
      to this project, including designing and writing the challenges, developing the
      code, and writing the unit tests.
      <br /><br />
      The testing framework, primarily developed by <a href="http://sean-smith.me/"
      target="_blank" rel="noopener noreferrer">Sean Smith</a>, tests React code in
      the browser using AirBnB's Enzyme library, and includes live rendering/output
      when code is changed.
      <br /><br />
      <span>Technologies:</span> ReactJS, Enzyme, React-CodeMirror, & more.
      <br /><br />
      Check out the repo at <a href="https://github.com/bonham000/fcc-react-tests-module/"
      target="_blank" rel="noopener noreferrer">https://github.com/bonham000/fcc-react-
      tests-module/</a>`,

      `<span class='blue'>Frontend Test Suites:</span> This project was also developed
      for the freeCodeCamp curriculum expansion. As more and more students join and
      utilize freeCodeCamp’s learning platform, we realized we needed a standardized
      way to measure completion of required projects. A test suite was created for
      each &mdash; as students code, they pass/fail tests and receive feedback and
      helpful errors along the way!
      <br /><br />
      The testing framework was developed by myself and another freeCodeCamp contributor,
      while I developed most of the individual test suites. We bundled the code using
      Webpack, and serve it over a CDN created from our repo. Student’s can then include
      the test framework in their projects (in a CodePen or locally) via a script tag.
      <br /><br />
      <span>Technologies:</span> JavaScript, Mocha, Chai, jQuery, Selenium, Webpack
      <br /><br />
      Check out the repo at <a href="https://github.com/freeCodeCamp/testable-projects-fcc"
      target="_blank" rel="noopener noreferrer">https://github.com/freeCodeCamp/testable-
      projects-fcc</a>`,

      `<span class="blue">FCC Basic Data Structure (Array) Challenges:</span> As a
      freeCodeCamp Core Team member, I have made many contributions, mostly in the
      form of adding new projects to the freeCodeCamp ecosystem, like the <a href=
      "https://github.com/freeCodeCamp/testable-projects-fcc" target="_blank" rel=
      "noopener noreferrer">Frontend Test Suite</a> and the <a href=
      "https://github.com/bonham000/fcc-react-tests-module/" target="_blank" rel=
      "noopener noreferrer">new React Curriculum</a>. However, in addition to several
      challenge fixes, UI tweaks, and updates that are now in production, I also
      contributed a series of challenges to the yet-to-be-released beta curriculum
      for the Basic Data Structures section. While another contributor covered Objects,
      I designed, coded and implemented a series of 11 challenges, meant to familiarize
      students with the basic concepts surrounding JavaScript Arrays and their common methods.
      <br /><br />
      <span>Technologies:</span> JavaScript, JSON, NodeJS, Chai
      <br /><br />
      Check out the freeCodeCamp repo here: <a target="_blank" rel="noopener noreferrer"
      href="https://github.com/freeCodeCamp/freeCodeCamp/">https://github.com/freeCodeCamp/freeCodeCamp/</a>`
    ]
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320451/FCCAN_ykaig8.gif',
      direction: 'initialize',
      category: 'openSource',
      intervalId: setInterval(() => this.carouselRight(), 5000)
    }
  }

  handleMouseEnter = () => {
    this.state.intervalId && clearInterval(this.state.intervalId);
  }

  handleMouseLeave = () => {
    this.setState({ intervalId: setInterval(() => this.carouselRight(), 5000) });
  }

  carouselRight = () => {
    this.setState({ direction: 'fromLeft' }, () => {
      const { category } = this.state;
      let nextImage = carouselData[category].images.indexOf(this.state.currentImage) + 1;
      if (nextImage === carouselData[category].images.length) {
        nextImage = 0;
      }
      this.setState({
        currentImage: carouselData[category].images[nextImage]
      });
    });
  }

  carouselLeft = () => {
    this.setState({ direction: 'fromRight' }, () => {
      const { category } = this.state;
      let nextImage = carouselData[category].images.indexOf(this.state.currentImage) - 1;
      if (nextImage < 0) {
        nextImage = carouselData[category].images.length - 1;
      }
      this.setState({
        currentImage: carouselData[category].images[nextImage]
      });
    });
  }

  goToImage = (e) => {
    const index = e.target.id.slice(1);
    this.setState({
      currentImage: carouselData[this.state.category].images[index],
      direction: 'fromLeft'
    });
  }

  changeContent = () => {
    if (this.state.category === 'codePens') {
      this.setState({
        category: 'openSource',
        currentImage: carouselData.openSource.images[0],
        direction: 'fromLeft'
      });
    } else {
      this.setState({
        category: 'codePens',
        currentImage: carouselData.codePens.images[0],
        direction: 'fromLeft'
      });
    }
  }

  render() {
    const { currentImage, category } = this.state;
    const _indicators = carouselData[category].images.map((el, idx) => (
      <Indicator
        className={carouselData[category]
          .images.indexOf(currentImage) === idx ? 'active' : ''}
        id={`_${idx}`}
        key={el}
        onClick={this.goToImage}
        />
    ));
    return (
      <Container id="projects">
        <Dropdown>
          <Select value={this.state.category} onChange={this.changeContent}>
            <option value="openSource">Open Source</option>
            <option value="codePens">Games and Demonstrations</option>
          </Select>
        </Dropdown>
        <CSSTransitionGroup
          transitionName={this.state.direction}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          transitionAppear={true}
          transitionAppearTimeout={600}>
          <CarouselContainer
            key={currentImage}
            onMouseOut={this.handleMouseLeave}
            onMouseOver={this.handleMouseEnter}
            >
            <a
              href={carouselData[category]
                .hrefs[carouselData[category]
                .images.indexOf(currentImage)]}
              rel="noopener noreferrer"
              target="_blank"
              >
              <ThumbnailBox img={currentImage}>
                <Overlay shadow={this.state.category === 'openSource' && true}>
                  <span
                    className="inner-description"
                    dangerouslySetInnerHTML={{
                      __html: carouselData[category]
                        .captions[carouselData[category]
                        .images.indexOf(currentImage)]
                    }} />
                  </Overlay>
                </ThumbnailBox>
            </a>
          </CarouselContainer>
        </CSSTransitionGroup>
        <ButtonContainer
          onMouseOut={this.handleMouseLeave}
          onMouseOver={this.handleMouseEnter}
          >
          <Button
            className="fa fa-chevron-left fa-2x"
            onClick={this.carouselLeft}
            />
          <Button
            className="fa fa-chevron-right fa-2x"
            onClick={this.carouselRight}
            />
        </ButtonContainer>
        <IndicatorContainer
          onMouseOut={this.handleMouseLeave}
          onMouseOver={this.handleMouseEnter}
          >
          {_indicators}
        </IndicatorContainer>
      </Container>
    );
  }
}

export default Projects;
