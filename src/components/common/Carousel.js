import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import carouselData from '../../assets/carouselData';
import { LeftPanel } from '../sections/Projects';
import {
  absoluteCenter,
  fadeOutFadeIn,
  fadeOutFadeIn2,
  flexCenter
} from '../../styleUtils';

export var darkGreen = '#16693c';
export var lightGreen = '#4db47c';

const CarouselContainer = styled.div`
  height: 90%;
  position: relative;
  width: 100%;
  // @media (max-width: 400px) {
  //   height: 50%;
  //
`;

const Carousel = styled.div`
  height: 100%;
  width: 100%;
`;

const ThumbnailBox = Carousel.extend`
  background: url(${props => props.img}) no-repeat center center;
  background-size: cover;
`;

const Overlay = Carousel.extend`
  background: rgba(0, 0, 0, 0.01);
  border-radius: inherit;
  position: relative;
  transition: background 500ms ease;
  z-index: 1;
  .inner-description {
    ${absoluteCenter()}
    color: white;
    font-size: 16px;
    opacity: 0.01;
    text-align: center;
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
  }
  @media (max-width: 650px) {
    font-size: 11.5px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const Controls = styled.div`
  width: 100%;
  height: 10%;
`;

const IndicatorContainer = styled.div`
  background: ${lightGreen};
  border-bottom: 2px solid ${darkGreen};
  border-top: 2px solid ${darkGreen};
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  transition: transform 900ms;
  vertical-align: top;
  width: 70%;
  div {
    ${flexCenter()}
    animation: ${fadeOutFadeIn} 2s;
    height: 100%;
    transition: 2s;
  }
  &.flip {
    transform: rotateX(180deg);
    transform-style: preserve-3d;
    div {
      animation: ${fadeOutFadeIn2} 1s;
    }
  }
`;

const Indicator = styled.span`
  background: ${lightGreen};
  border: 2px solid ${darkGreen};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block !important;
  height: 20px;
  margin: 3px;
  transition: all 600ms ease-in;
  width: 20px;
  &.active, &:hover {
    background: ${darkGreen};
    transform: scale(1.2);
  }
`;

const Button = styled.div`
  background: ${lightGreen};
  border-left: none;
  border: 2px solid ${darkGreen};
  box-sizing: border-box;
  color: ${darkGreen};
  cursor: pointer;
  display: inline-block;
  height: 100%;
  position: relative;
  transition: all 600ms;
  width: 15%;
  i {
    ${absoluteCenter()}
  }
  &:hover {
    background: ${darkGreen};
    color: ${lightGreen};
  }
  &:last-of-type {
    border-left: 2px solid ${darkGreen};
  }
`;

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 'http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320451/FCCAN_ykaig8.gif',
      direction: 'initialize',
      category: 'openSource',
      intervalId: setInterval(() => this.carouselRight(), 5000),
      firstLoad: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.state.category) {
      this.state.intervalId && clearInterval(this.state.intervalId);
      this.setState({
        category: nextProps.category,
        currentImage: nextProps.firstImgOfCategory,
        direction: 'fromLeft',
        intervalId: setInterval(() => this.carouselRight(), 5000)
      });
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
      <LeftPanel>
        <CarouselContainer>
          <CSSTransitionGroup
            transitionName={this.state.direction}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppearTimeout={600}>
            <Carousel
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
                  <Overlay>
                    <span
                      className="inner-description"
                      dangerouslySetInnerHTML={{
                        __html: currCategoryObj.captions[currentIndex]
                      }}
                    />
                  </Overlay>
                </ThumbnailBox>
              </a>
            </Carousel>
          </CSSTransitionGroup>
        </CarouselContainer>
        <Controls
          onMouseOut={this.handleMouseLeave}
          onMouseOver={this.handleMouseEnter}
          >
          <Button onClick={this.carouselLeft}>
            <i className="big chevron left icon" />
          </Button>
          <IndicatorContainer
            className={!this.props.selectionInitialized ? 'flip' : 'flipBack'}
            >
            <div>
              { indicators }
            </div>
          </IndicatorContainer>
          <Button onClick={this.carouselRight}>
            <i className="big chevron right icon" />
          </Button>
        </Controls>
      </LeftPanel>
    );
  }
}

export default CarouselComponent;
