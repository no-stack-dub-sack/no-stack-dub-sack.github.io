import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import carouselData from '../../assets/carouselData';

var darkGreen = '#16693c';
var lightGreen = '#4db47c';

const Container = styled.div`
  background: #8ACDEA;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  .fromRight-enter {
    position: absolute;
    top: 0;
    left: -100%;
  }

  .fromRight-enter.fromRight-enter-active {
    left: 0;
    z-index: 2;
    transition: left 600ms ease-in;
  }

  .fromLeft-leave {
    position: absolute;
    top: 0;
    left: 0;
  }

  .fromLeft-leave.fromLeft-leave-active {
    left: -100%;
    transition: left 600ms ease-in;
  }
`;

const LeftTopPanel = styled.div`
  display: inline-block;
  height: 60%;
  width: 60%;
  min-width: 600px;
  float: left;
  background: #594db4;
  position: relative;
`;

const RightTopPanel = styled.div`
  display: inline-block;
  height: 70%;
  width: 40%;
  float: right;
  background: #b44d5a;
`;

const LeftBottomPanel = styled.div`
  display: inline-block;
  height: 40%;
  width: 60%;
  float: left;
  background: ${lightGreen};
`;

const RightBottomPanel = styled.div`
  display: inline-block;
  height: 30%;
  width: 40%;
  float: right;
  background: #b47e4d;
`;

const Carousel = styled.div`
  height: 100%;
  width: 100%;
`;

const CarouselContainer = Carousel.extend`

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

const Controls = styled.div`
  width: 100%;
`;

const IndicatorContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  border-bottom: 2px solid ${darkGreen};
  border-top: 2px solid ${darkGreen};
  height: 50px;
  width: 70%;
  div {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const Indicator = styled.span`
  background: ${lightGreen};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex-grow: 1;
  height: 100%;
  border-right: 2px solid ${darkGreen};
  transition: background 600ms;
  width: auto;
  &.active, &:hover {
    background: ${darkGreen};;
  }
`;

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid ${darkGreen};
  border-left: none;
  position: relative;
  height: 50px;
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
  }
`;

const Picker = styled.div`
  width: 420px;
  color: ${darkGreen};
  margin: 10px auto;
  font-size: 20px;
  div {
    margin-left: 15px;
  }
`;

class Projects extends React.Component {
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
    const carousel = (
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
    );
    return (
      <Container id="projects">
        <LeftTopPanel>
          { carousel }
        </LeftTopPanel>
        <RightTopPanel>

        </RightTopPanel>
        <LeftBottomPanel>
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
          <Picker>
            <span>Open Source</span>
            <div onClick={this.changeContent} className="ui slider checkbox">
              <input type="checkbox" name="newsletter" />
              <label></label>
            </div>
            <span>Games & Demonstrations</span>
          </Picker>
        </LeftBottomPanel>
        <RightBottomPanel>

        </RightBottomPanel>
      </Container>
    );
  }
}

export default Projects;

// <Dropdown>
//   <Select value={this.state.category} onChange={this.changeContent}>
//     <option value="openSource">Open Source</option>
//     <option value="codePens">Games and Demonstrations</option>
//   </Select>
// </Dropdown>
// <CSSTransitionGroup
//   transitionName={this.state.direction}
//   transitionEnterTimeout={600}
//   transitionLeaveTimeout={600}
//   transitionAppear={true}
//   transitionAppearTimeout={600}>
//   <CarouselContainer
//     key={currentImage}
//     onMouseOut={this.handleMouseLeave}
//     onMouseOver={this.handleMouseEnter}
//     >
//     <a
//       href={currCategoryObj.hrefs[currentIndex]}
//       rel="noopener noreferrer"
//       target="_blank"
//       >
//       <ThumbnailBox img={currentImage}>
//         <Overlay shadow={this.state.category === 'openSource' && true}>
//           <span
//             className="inner-description"
//             dangerouslySetInnerHTML={{
//               __html: currCategoryObj.captions[currentIndex]
//             }}
//           />
//         </Overlay>
//       </ThumbnailBox>
//     </a>
//   </CarouselContainer>
// </CSSTransitionGroup>
// <InfoContainer>
//   <InfoTrigger className="big info circle icon" />
//   <Info
//     className="inner-description"
//     dangerouslySetInnerHTML={{
//       __html: currCategoryObj.captions[currentIndex]
//     }}
//   />
// </InfoContainer>
// <ButtonContainer
  // onMouseOut={this.handleMouseLeave}
  // onMouseOver={this.handleMouseEnter}
//   >
//   <Button
//     className="big chevron left icon"
//     onClick={this.carouselLeft}
//   />
//   <Button
//     className="big chevron right icon"
//     onClick={this.carouselRight}
//   />
// </ButtonContainer>
// <IndicatorContainer
//   onMouseOut={this.handleMouseLeave}
//   onMouseOver={this.handleMouseEnter}
//   >
//   { indicators }
// </IndicatorContainer>



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
    bottom: 23%;
    margin-left: -50%;
    width: 100%;
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
  font-family: Montserrat;
  max-height: 150px;
  overflow-y: scroll;
  padding: 20px;
  position: absolute;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  top: 50px;
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
  &:hover {
    display: block;
  }
`;
