import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #8ACDEA;
  height: 100vh;
`;

const LeftPanel = styled.div`
  background: #EDE6F2;
  display: inline-block;
  float: left;
  height: 100vh;
  position: relative;
  width: 40%;
  @media (max-width: 920px) {
    display: none;
  }
  &:hover {
    div:first-of-type {
      left: -100%;
    }
  }
`;

const AboutTextContainer = styled.div`
  font-size: 18px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1079px) {
    font-size: 14px;
  }
`;

const LeftOverlay = styled.div`
  align-items: center;
  background: #7e519e;
  color: #ae7fe4;
  display: flex;
  flex-direction: row;
  font-family: Montserrat;
  font-size: 30px;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: left .5s;
  width: 100%;
  z-index: 2;
`;

const LeftPanelHide = LeftPanel.extend`
  display: none;
  padding: 80px 50px;
  font-size: 18px;
  line-height: 20px;
  @media (max-width: 920px) {
    display: inline-block;
    height: 50vh;
    width: 100vw;
  }
  @media (max-width: 690px) {
    padding: 60px 50px;
  }
  @media (max-width: 555px) {
    padding: 20px 10px;
    font-size: 13px;
  }
`;

const RightPanel = styled.div`
  background: #8ACDEA;
  color: #EDE6F2;
  display: inline-block;
  float: right;
  font-family: Montserrat;
  height: 80vh;
  position: relative;
  width: 60%;
  @media (max-width: 920px) {
    height: 30vh;
    width: 100vw;
  }
  @media (max-width: 600px) {
    height: 35vh;
  }
  @media (max-width: 400px) {
    height: 40vh;
  }
  div {
    font-size: 20px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 430px;
    span:first-of-type {
      line-height: 65px;
      font-size: 72px;
    }
    @media (max-width: 400px) {
      font-size: 16px;
      width: auto;
      span:first-of-type {
        line-height: 50px;
        font-size: 60px;
      }
    }
  }
`;

const IconBlock = styled.div`
  background: ${props => props.color};
  display: inline-block;
  height: 100%;
  position: relative;
  transition: all .5s;
  width: 20%;
  span {
    color: ${props => props.color};
    cursor: pointer;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    opacity: 0.01;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all .5s;
    @media (max-width: 1200px) and (min-width: 921px) {
      font-size: 20px;
    }
    @media (max-width: 725px) {
      font-size: 20px;
    }
    @media (max-width: 490px) {
      font-size: 16px;
    }
  }
  &:hover {
    background: ${props => props.overlayColor};
    span {
      opacity: 1.0;
    }
    a {
      opacity: 0.01;
    }
  }
  @media (max-width: 490px) {
    i {
      font-size: 40px !important;
    }
  }
`;

const Link = styled.a`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  opacity: 1;
  position: relative;
  text-decoration: none;
  transition: all .5s;
  width: 100%;
  &:hover {
    color: white;
  }
`;

const BlockContainer = styled.div`
  background: orange;
  display: inline-block;
  float: right;
  height: 20vh;
  width: 60%;
  @media (max-width: 920px) {
    width: 100vw;
  }
  @media (max-width: 600px) {
    height: 15vh;
  }
  @media (max-width: 400px) {
    height: 10vh;
  }
`;

const Highlight = styled.span`
  color: ${props => props.color};
  font-weight: bold;
`;

const Icon = ({ href, icon, color }) => (
  <Link href={href} rel="noopener noreferrer" target="_blank">
      <i style={{ color: color }}className={`huge ${icon} icon`} aria-hidden="true" />
  </Link>
);

const AboutText = () => (
  <div>
    {'My name is '}<Highlight color="black">{'Peter A. Weinberg'}</Highlight>{`, and
    I am a `}<Highlight color="red">{'self-taught'}</Highlight>{` JavaScript Developer
    with an affinity for Open Source Software
    and learning all things Web. I am also a Core Team member at freeCodeCamp.`}
    <br /><br />
    {`About 18 months ago, I had never written a single line of code. Since that
    time, through `}<Highlight color="#337ab7">{'freeCodeCamp '}</Highlight>{' and various'}
    <Highlight color="#337ab7"> OSS </Highlight>{` contributions, I have gained a
    strong foundation in modern web development and a new direction.`}
    <br /><br />
    {'I have a '}<Highlight color="#337ab7">{'passion'}</Highlight>{` for learning, problem
    solving, and creating things that never might have been. I spend every free
    second I have pursuing this passion. It's all about`}
    <Highlight color="#337ab7">{' the journey'}</Highlight>{`, and I can't wait to
    see where this one takes me.`}
  </div>
);

const Home = () => (
  <Container id="home">
    <LeftPanel>
      <LeftOverlay>The Journey</LeftOverlay>
      <AboutTextContainer>
        <AboutText />
      </AboutTextContainer>
    </LeftPanel>
    <RightPanel>
      <div>
        <span>Peter A. Weinberg</span><br /><br />
        <span>Greater NYC Based Web Developer &</span><br />
        <span>Open Source Contributor</span>
      </div>
    </RightPanel>
    <BlockContainer>
      <IconBlock overlayColor="#a29aa3" color="#746D75">
        <Icon color="#a29aa3" href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
        <span>LinkedIn</span>
      </IconBlock>
      <IconBlock overlayColor="#538252" color="#B9FFB7">
        <Icon color="#538252" href="https://github.com/no-stack-dub-sack" icon="github" />
        <span>GitHub</span>
      </IconBlock>
      <IconBlock overlayColor="#3f3c40" color="#9b959c">
        <Icon color="#3f3c40" href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free code camp" />
        <span>fCC</span>
      </IconBlock>
      <IconBlock overlayColor="#904d2a" color="#FFC09F">
        <Icon color="#904d2a" href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
        <span>CodePen</span>
      </IconBlock>
      <IconBlock overlayColor="#602b0e" color="#d67e4f">
        <Icon color="#602b0e" href="https://codepen.io/collection/DoMvpy/" icon="file text" />
        <span>Resume</span>
      </IconBlock>
    </BlockContainer>
    <LeftPanelHide>
      <LeftOverlay>The Journey</LeftOverlay>
      <AboutText />
    </LeftPanelHide>
  </Container>
);

export default Home;
