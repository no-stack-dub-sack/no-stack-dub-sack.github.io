import React from 'react';
import styled from 'styled-components';
import Carousel, { darkGreen, lightGreen } from './Carousel';
import logoData from '../../assets/logoData';
import { absoluteCenter } from '../../styleUtils';

const Container = styled.div`
  background: #8ACDEA;
  height: 100vh;
  position: relative;
`;

const RightPanel = styled.div`
  background: #b44d5a;
  display: inline-block;
  float: right;
  height: 70%;
  position: relative;
  width: 40%;
  div {
    ${absoluteCenter()}
    color: #7a1b28;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    width: 320px;
  }
`;

const LeftBottomPanel = styled.div`
  background: ${darkGreen};
  display: inline-block;
  float: left;
  height: 30%;
  position: relative;
  width: 100%;
`;

const LogosContainer = styled.div`
  ${absoluteCenter('useMargins')}
  height: 50px;
  margin-left: -50%;
  margin-top: -25px;
  width: 100%;
`;

const LogoWrap = styled.div`
  background: ${props => props.color};
  display: inline-block;
  height: 50px;
  position: relative;
  width: 14.285%;
  img,
  span {
    ${absoluteCenter()}
    transition: all 300ms ease-in;
  }
  img {
    max-height: 100px;
    width: auto;
  }
  span {
    color: ${props => props.textColor};
    font-family: Montserrat;
    font-size: 22px;
    opacity: 0.01;
  }
  &:hover img {
    left: 25%;
    top: -50%;
    transform: scale(0.01);
    + span {
      opacity: 1;
    }
  }
`;

const Picker = styled.div`
  color: ${darkGreen};
  font-size: 20px;
  margin: 10px auto;
  width: 420px;
  div {
    margin-left: 15px;
  }
`;

const Logo = ({ alt, color, label, src, textColor }) => (
  <LogoWrap color={color} textColor={textColor}>
    <img src={src} alt={alt} />
    <span>{label}</span>
  </LogoWrap>
);

const Projects = () => {
  const logos = logoData.map(el => (
    <Logo
      key={el.color}
      color={el.color}
      textColor={el.textColor}
      src={el.src}
      alt={el.alt}
      label={el.label}
    />
  ));
  return (
    <Container>
      <Carousel />
      <RightPanel>
        <div>
          <h2>{'Core Competencies'}</h2>
          {`JavaScript, ReactJS, Redux, Sass/Less, CSS3, HTML5, Git.`}
          <br /><br />
          {` Understanding of jQuery, NodeJS, ExpressJS, MongoDB.`}
        </div>
      </RightPanel>
      <LeftBottomPanel>
        <LogosContainer>
          { logos }
        </LogosContainer>
      </LeftBottomPanel>
    </Container>
  );
}
export default Projects;

// <Picker>
//   <span>Open Source</span>
//   <div onClick={this.changeContent} className="ui slider checkbox">
//     <input type="checkbox" name="newsletter" />
//     <label></label>
//   </div>
//   <span>Games & Demonstrations</span>
// </Picker>



// <Logo src="http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502332172/react_j93sss.png" alt="react logo"/>
// <Logo src="http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502332172/three-logos_tt8ovy.png" alt="html5, css3, and JavaScript logos"/>
// <Logo src="http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502332171/redux_pnndqj.png" alt="redux logo"/>
// <Logo src="http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502332172/sass_ul7oxq.svg" alt="sass logo"/>
// <Logo src="http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502332171/git_nwdm2n.svg" alt="git logo"/>
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

// const InfoContainer = CarouselContainer.extend`
//   position: relative;
//   height: 65px !important;
//   // outline: 1px dotted white;
//   z-index: 1;
//   @media (min-width: 561px) {
//     display: none;
//   }
// `;

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
