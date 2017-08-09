import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: url(/images/backgrounds/nyc2.jpeg) no-repeat center center;
  background-size: cover;
  background-attachment: scroll;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const InnerContainer = styled.div`
  max-width: 860px;
`;

const Name = styled.div`
  color: White;
  font-family: Passion One;
  font-size: 72px;
  opacity: 0.7;
  text-align: center;
  text-shadow: 4px 5px 10px black;
`;

const TagLine = styled.div`
  color: white;
  font-family: Montserrat;
  font-size: 24px;
  margin: 30px auto 10px auto;
  max-width: 600px;
  text-align: center;
  line-height: 26px;
  text-shadow: 4px 5px 10px black;
`;

const HR = styled.hr`
  box-shadow: 2px 2px 5px black;
  margin: 10px 30px 10px 30px;
  min-width: 800px;
  @media (max-width: 850px) {
    min-width: 0;
    max-width: 700px;
  }
`;

const ButtonContainer = styled.div`
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // outline: 1px dotted white;
`;

export const Link = styled.a`
  color: white;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const Grow = styled.div`
  transform: scale(1);
  transition: 200ms ease-in transform, 200ms linear z-index, 300ms ease box-shadow;
  z-index: 1;
  &:hover {
    box-shadow: 1px 1px 30px 1px black;
    font-family: monospace !important;
    transform: scale(1.6);
    z-index: 2;
  }
`;

export const IconWrap = Grow.extend`
  align-items: center;
  // background: #337ab7;
  border-radius: 8px;
  // border: 1px solid #2e6da4;
  border: 3px solid white;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 55px;
  justify-content: center;
  margin: 3px;
  position: relative;
  width: 55px;
  text-shadow: 2px 2px 10px black;
  box-shadow: 1px 1px 30px 1px black;
  &:hover {
    box-shadow: 5px 5px 60px 1px black;
  }
`;

const Button = ({ href, icon }) => (
  <Link href={href} rel="noopener noreferrer" target="_blank">
    <IconWrap className="shadowHack">
      <i className={`fa fa-${icon} fa-2x`} aria-hidden="true" />
    </IconWrap>
  </Link>
);

export const Buttons = () => (
  <ButtonContainer>
    <Button href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
    <Button href="https://github.com/no-stack-dub-sack" icon="github" />
    <Button href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
    <Button href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
  </ButtonContainer>
);

const Home = () => (
  <Container id="home">
    <InnerContainer>
      <Name>
        PETER A WEINBERG
      </Name>
      <TagLine>
        Greater NYC Based Web Developer & Constant Student of Javascript
      </TagLine>
      <HR />
      <Buttons />
    </InnerContainer>
  </Container>
);

export default Home;
