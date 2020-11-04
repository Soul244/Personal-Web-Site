import { animated } from 'react-spring';
import styled, { css, keyframes } from 'styled-components';

const positionAbsolute = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ImageContainer = styled(animated.figcaption)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const imageCover = css`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const Image = styled.img`
  ${imageCover};
  animation: 0.3 linear;
  :hover {
    filter: drop-shadow(0 15px 5px gray);
  }
`;

export const BlueBackground = styled.img`
  ${imageCover};
  ${positionAbsolute}
  z-index: -2;
`;

const cloudAnimation = keyframes`
  0% {margin-left: 0%;}
	100% {margin-left: -100%;}
`;

export const Clouds = styled.img`
  ${positionAbsolute}
  top:50px;
  z-index: -1;

  width: 200%;
  height: 100vh;
  object-fit: cover;

  animation: ${cloudAnimation} 25s linear infinite;
`;

export const Credit = styled.a`
  position: absolute;
  bottom: 25px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  transition: opacity 0.15s linear;
  :hover {
    opacity: 0.7;
  }
`;

export const InfoText = styled.h2`
  position: absolute;
  margin: 0;
  color: ${props => props.theme.menuColor};
  font-size: 2rem;
  mix-blend-mode: difference;
  transition: opacity 0.15s linear;
  text-decoration: underline;
`;
