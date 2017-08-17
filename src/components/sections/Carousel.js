import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import carouselData from '../../assets/carouselData';

export var darkGreen = '#16693c';
export var lightGreen = '#4db47c';

const LeftTopPanel = styled.div`
  display: inline-block;
  height: 70%;
  width: 60%;
  float: left;
  background: #594db4;
  position: relative;

  .fromRight-enter {
    position: absolute;
    top: 0;
    left: -100%;
  }

  .fromRight-enter.fromRight-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: left 600ms ease-in;
  }

  .fromRight-leave {
    position: absolute;
    top: 0;
    opacity: 1;
  }

  .fromRight-leave.fromRight-leave-active {
    position: absolute;
    top: 0;
    opacity: 1;
  }

  .fromLeft-enter {
    position: absolute;
    top: 0;
    opacity: 1;
  }

  .fromLeft-enter.fromLeft-enter-active {
    position: absolute;
    top: 0;
    opacity: 1;
  }

  .fromLeft-leave {
    position: absolute;
    top: 0;
    left: 0;
  }

  .fromLeft-leave.fromLeft-leave-active {
    position: absolute;
    top: 0;
    left: -100%;
    transition: left 600ms ease-in;
  }
`;

const CarouselContainer = styled.div`
  height: 90%;
  width: 100%;
  position: relative;
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
    color: white;
    font-family: Montserrat;
    font-size: 16px;
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
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  background: ${lightGreen};
  border-bottom: 2px solid ${darkGreen};
  border-top: 2px solid ${darkGreen};
  height: 100%;
  width: 70%;
  div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Indicator = styled.span`
  background: ${lightGreen};
  box-sizing: border-box;
  display: inline-block !important;
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin: 3px;
  border: 2px solid ${darkGreen};
  transition: all 600ms ease-in;
  &.active, &:hover {
    background: ${darkGreen};
    transform: scale(1.2);
  }
`;

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid ${darkGreen};
  background: ${lightGreen};
  border-left: none;
  position: relative;
  height: 100%;
  width: 15%;
  color: ${darkGreen};
  transition: all 600ms;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background: ${darkGreen};
    color: ${lightGreen};
  }
  &:last-of-type {
    border-right: none;
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
      firstSideActive: true
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
      <LeftTopPanel>
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
          <IndicatorContainer>
            <div>
              { indicators }
            </div>
          </IndicatorContainer>
          <Button onClick={this.carouselRight}>
            <i className="big chevron right icon" />
          </Button>
        </Controls>
      </LeftTopPanel>
    );
  }
}

export default CarouselComponent;
