import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: url(/images/backgrounds/nyc.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
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
  margin: auto;
  max-width: 600px;
  text-align: center;
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
  width: 184px;
`;

const Link = styled.a`
  color: white;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const IconWrap = styled.div`
  align-items: center;
  background: #337ab7;
  border-radius: 8px;
  border: 1px solid #2e6da4;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  margin: 3px;
  position: relative;
  text-decoration: none;
  transform: scale(1);
  transition: 200ms ease-in transform, 200ms linear z-index;
  width: 40px;
  z-index: 1;
  &:hover {
    box-shadow: 1px 1px 30px 1px black;
    font-family: monospace !important;
    transform: scale(1.6);
    z-index: 2;
  }
`;

const Button = ({ href, icon }) => (
  <Link href={href} rel="noopener noreferrer" target="_blank">
    <IconWrap>
      <i className={`fa fa-${icon}`} aria-hidden="true" />
    </IconWrap>
  </Link>
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
      <ButtonContainer>
        <Button href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
        <Button href="https://github.com/no-stack-dub-sack" icon="github" />
        <Button href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
        <Button href="https://codepen.io/no_stack_dub_sack/" icon="codepen" />
      </ButtonContainer>
    </InnerContainer>
  </Container>
);

export default Home;
