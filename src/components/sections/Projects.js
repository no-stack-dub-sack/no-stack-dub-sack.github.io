import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import carouselData from '../../assets/carouselData';

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
    bottom: 27%;
  }
  @media (max-width: 430px) {
    bottom: 15%;
    margin-left: -50%;
    width: 100%;
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
  @media (max-width: 430px) {
    margin: 0 40px 0 40px;
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
  transition: all 400ms;
  width: 12px;
  &.active {
    background: #fbc689;
    transform: scale(1.3);
  }
  &:hover {
    transform: scale(1.3);
  }
`;

const IndicatorContainer = styled.div`
  bottom: 15.5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 50%;
  margin-left: -100px;
  position: absolute;
  width: 200px;
  transition: bottom 200ms;
  z-index: 0;
  @media (max-width: 850px) {
    bottom: 22.5%;
  }
  @media (max-width: 650px) {
    bottom: 25.5%;
  }
  @media (max-width: 560px) {
    bottom: 27.5%;
  }
  @media (max-width: 430px) {
    bottom: 15.5%;
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
  z-index: 1;
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
  @media (max-width: 650px) {
    font-size: 11.5px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    .inner-description {
      opacity: 1;
    }
  }
  @media (max-width: 560px) {
    display: none;
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
    margin: 100px auto 0 auto;
  }
`;

const InfoContainer = CarouselContainer.extend`
  position: relative;
  height: 65px !important;
  // outline: 1px dotted white;
  z-index: 1;
  @media (min-width: 561px) {
    display: none;
  }
`;

const InfoTrigger = styled.i`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow:
    2px 2px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  -webkit-text-stroke: 1px black;
  &:hover + div {
    display: block;
  }
`;

const Info = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  display: none;
  height: 150px;
  overflow-y: scroll;
  padding: 20px;
  position: absolute;
  width: 100%;
  word-wrap: break-word;
  top: 50px;
  &:hover {
    display: block;
  }
`;

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
    const currCategoryObj = carouselData[category];
    const currentIndex = currCategoryObj.images.indexOf(currentImage);
    const indicators = currCategoryObj.images.map((el, idx) => (
      <Indicator
        className={currCategoryObj
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
              href={currCategoryObj.hrefs[currentIndex]}
              rel="noopener noreferrer"
              target="_blank"
              >
              <ThumbnailBox img={currentImage}>
                <Overlay shadow={this.state.category === 'openSource' && true}>
                  <span
                    className="inner-description"
                    dangerouslySetInnerHTML={{
                      __html: currCategoryObj.captions[currentIndex]
                    }}
                  />
                </Overlay>
              </ThumbnailBox>
            </a>
          </CarouselContainer>
        </CSSTransitionGroup>
        <InfoContainer>
          <InfoTrigger className="big info circle icon" />
          <Info
            className="inner-description"
            dangerouslySetInnerHTML={{
              __html: currCategoryObj.captions[currentIndex]
            }}
          />
        </InfoContainer>
        <ButtonContainer
          onMouseOut={this.handleMouseLeave}
          onMouseOver={this.handleMouseEnter}
          >
          <Button
            className="big chevron left icon"
            onClick={this.carouselLeft}
          />
          <Button
            className="big chevron right icon"
            onClick={this.carouselRight}
          />
        </ButtonContainer>
        <IndicatorContainer
          onMouseOut={this.handleMouseLeave}
          onMouseOver={this.handleMouseEnter}
          >
          { indicators }
        </IndicatorContainer>
      </Container>
    );
  }
}

export default Projects;
