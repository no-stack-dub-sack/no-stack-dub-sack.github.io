import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: url(/images/backgrounds/graff.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const AboutMe = styled.div`
  display: inline-block;
  font-family: Montserrat;
  font-size: 14px;
  background: #e0e0eb;
  opacity: 0.9;
  padding: 20px;
  max-width: 500px;
  margin-right: 15px;
  margin-top: 50px;
  padding-bottom: 20px;
  @media (max-width: 930px) {
    margin: 20px;
  }
`;

const Highlight = styled.span`
  color: ${props => props.color};
  font-weight: bold;
`;

const Me = styled.img`
  background-image: url(/images/me.JPG);
  background-size: cover;
  background-position: right center;
  background-clip: padding-box;
  height: 300px;
  width: 300px;
  border-radius: 100%;
  display: inline-block;
  margin-left: 15px;
  margin-top: 30px;
  @media (max-width: 930px) {
    display: none;
  }
`;

const Logos = styled.div`
  margin: -100px auto 0 auto;
  @media (max-width: 1170px) {
    display: none;
  }
  @media (max-height: 725px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: ${props => props.height ? props.height : '150px'};
  width: auto;
  &:first-of-type {
    margin-right: 10px;
  }
  &:nth-of-type(2) {
    margin-right: 8px;
  }
`;

const About = () => (
  <Container id="about">
    <AboutMe>
      <h2>{'The Journey'}</h2>
      {'My name is '}<Highlight color="black">{'Peter A. Weinberg'}</Highlight>{`, and
      I am a `}<Highlight color="red">{'self-taught'}</Highlight>{` JavaScript Developer
      with an affinity for Open Source Software
      and learning all things Web.`}
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
      <h2>{'Core Competencies'}</h2>
      {`JavaScript, ReactJS, Redux, SASS/LESS, CSS, HTML, Git. Understanding of
      NodeJS, ExpressJS, MongoDB, Test-Driven Development.`}
    </AboutMe>
    <Me />
    <Logos>
      <Logo height="100px" src="images/logos/freeCodeCamp-alternative.png" alt="free code camp logo"/>
      <Logo src="images/logos/react.png" alt="react logo"/>
      <Logo src="images/logos/three-logos.png" alt="html5, css3, and JavaScript logos"/>
      <Logo src="images/logos/redux.png" alt="redux logo"/>
      <Logo src="images/logos/sass.svg" alt="sass logo"/>
      <Logo src="images/logos/git.svg" alt="git logo"/>
    </Logos>
  </Container>
);

export default About;
