import React from 'react';
import styled from 'styled-components';
import IconData from '../../assets/iconData';

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
    a:first-of-type {
      opacity: 0.01;
    }
  }
  @media (max-width: 490px) {
    i {
      font-size: 40px !important;
    }
  }
`;

const Icon = ({ color, href, icon, iconColor, label }) => (
  <IconBlock overlayColor={color} color={iconColor}>
    <Link href={href} rel="noopener noreferrer" target="_blank">
        <i style={{ color: color }} className={`huge ${icon} icon`} aria-hidden="true" />
    </Link>
    <a href={href} rel="noopener noreferrer" target="_blank">
      <span>
        {label}
      </span>
    </a>
  </IconBlock>
);

const IconMap = () => (
  <BlockContainer>
    {IconData.map(icon => (
      <Icon
        color={icon.color}
        href={icon.href}
        icon={icon.icon}
        iconColor={icon.iconColor}
        label={icon.label}
      />
    ))}
  </BlockContainer>
);

export default IconMap;
