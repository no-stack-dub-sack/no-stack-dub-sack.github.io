import React from 'react';
import styled from 'styled-components';
import logoData from '../../assets/logoData';
import { absoluteCenter } from '../../styleUtils';

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

const Logo = ({ alt, color, label, src, textColor }) => (
  <LogoWrap color={color} textColor={textColor}>
    <img src={src} alt={alt} />
    <span>{label}</span>
  </LogoWrap>
);

const LogosMap = () => (
  <LogosContainer>
    {logoData.map(logo => (
      <Logo
        key={logo.color}
        color={logo.color}
        textColor={logo.textColor}
        src={logo.src}
        alt={logo.alt}
        label={logo.label}
        />))}
  </LogosContainer>
);

export default LogosMap;
