import React from 'react';
import styled from 'styled-components';
import Icons from '../common/Icons';
import AboutText from '../common/AboutText';

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
  div:last-of-type {
    font-size: 20px;
    line-height: 22px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
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
        <span>Greater NYC Based Web Developer & Open Source Contributor</span><br />
      </div>
    </RightPanel>
    <Icons />
    <LeftPanelHide>
      <LeftOverlay>The Journey</LeftOverlay>
      <AboutText />
    </LeftPanelHide>
  </Container>
);

export default Home;
