import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const Container = styled.div`
  background: url(/images/backgrounds/graff.jpg) no-repeat center center;
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

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
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -225px;
  margin-left: -400px;
  @media (max-width: 850px) {
    margin-top: -168.75px;
    margin-left: -300px;
  }
  @media (max-width: 650px) {
    margin-top: -150px;
    margin-left: -266.67px;
  }
  @media (max-width: 560px) {
    margin-top: -112.5px;
    margin-left: -200px;
  }
  @media (max-width: 430px) {
    margin-top: -84.375px;
    margin-left: -150px;
  }
`;

const ButtonContainer = styled.div`
  width: 800px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  margin-left: -400px;
  @media (max-width: 850px) {
    bottom: 22%;
  }
  @media (max-width: 650px) {
    bottom: 25%;
  }
  @media (max-width: 560px) {
    bottom: 30%;
    width: 500px;
    margin-left: -250px;
  }
  @media (max-width: 430px) {
    bottom: 27%;
  }
`;

const Button = styled.i`
  display: inline-block;
  cursor: pointer;
  width: 400px;
  text-align: center;
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
    opacity: 0.01;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 500ms ease;
    text-align: center;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    .inner-description {
      opacity: 1;
    }
  }
`;

const Span = styled.span`
  font-family: Montserrat;
  text-shadow: 1px 1px 10px white;
`;

const Indicator = styled.div`
  height: 10px;
  width: 10px;
  margin: 5px;
  border-radius: 100%;
  display: inline-block;
  background: black;
  transition: background 400ms;
  cursor: pointer;
  &.active {
    background: #c4c6c0;
  }
`;

const IndicatorContainer = styled.div`
  width: 100px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  margin-left: -50px;
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
  position: absolute;
  font-size: 15px;
  top: 15%;
  left: 46%;
  transform: translate(0%, -50%);
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
    ],
    hrefs: [
      'https://fccan.com'
    ],
    captions: [
      `freeCodeCamp has an incredible and vibrant international community. We
      built this app specifically to try and cultivate relationships among
      experienced campers.
      <br /><br />
      Currently, the FCC Forum, Gitter, and other resources provide ample
      opportunities for campers at any skill level. We wanted to create an
      environment specifically for more experienced campers who are looking
      for advanced collaborative projects or mentorship opportunities,
      as a mentor or mentee.
      <br /><br />
      Our authentication process verifies the FCC progress of users, and only
      admits students who have completed at least one FCC Certificate.
      <br /><br />
      Our goal is to create a focused community of like-minded individuals who
      can benefit from each others' culminated experience and expertise, whether
      in new technologies, programming skills, or career advice.`,
    ],
    indicators: ['_0']
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: '/images/carousel/gameOfLife.gif',
      direction: 'initialize',
      content: 'codePens'
    }
  }
  carouselRight = () => {
    this.setState({ direction: 'fromLeft' }, () => {
      let nextImage = carouselData[this.state.content].images.indexOf(this.state.currentImage) + 1;
      if (nextImage === carouselData[this.state.content].images.length) {
        nextImage = 0;
      }
      this.setState({ currentImage: carouselData[this.state.content].images[nextImage] });
    });
  }

  carouselLeft = () => {
    this.setState({ direction: 'fromRight' }, () => {
      let nextImage = carouselData[this.state.content].images.indexOf(this.state.currentImage) - 1;
      if (nextImage < 0) {
        nextImage = carouselData[this.state.content].images.length - 1;
      }
      this.setState({ currentImage: carouselData[this.state.content].images[nextImage] });
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
    if (this.state.content === 'codePens')
      this.setState({ content: 'openSource' });
    else
      this.setState({ content: 'codePens' });
  }

  render() {
    const { currentImage } = this.state;
    const item = <Image src={currentImage} key={currentImage} />;
    const _indicators = carouselData[this.state.content].indicators.map((el, idx) => (
      <Indicator
        className={carouselData[this.state.content].images.indexOf(currentImage) === idx ? 'active' : ''}
        id={el}
        key={el}
        onClick={this.goToImage}
        />
    ));
    return (
      <Container id="projects">
        <Select onChange={this.changeContent} name="select">
          <option value="Open Source">Open Source</option>
          <option defaultValue value="Code Pens">Code Pens</option>
        </Select>
        <CSSTransitionGroup
          transitionName={this.state.direction}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          transitionAppear={true}
          transitionAppearTimeout={600}>
          <Carousel key={currentImage}>
            <a href={carouselData[this.state.content].hrefs[carouselData[this.state.content].images.indexOf(currentImage)]}>
              <ThumbnailBox img={currentImage}>
                <Overlay>
                  <Span
                    className="inner-description"
                    dangerouslySetInnerHTML={{
                      __html: carouselData[this.state.content].captions[carouselData[this.state.content].images.indexOf(currentImage)]
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
