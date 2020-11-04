import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const MyImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  user-select: none;
`;

export const MyImage = styled(animated.img)`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  vertical-align: middle;
  transition: transform 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.2) !important;
  }
`;

export const ImageBorder = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 275px;
  height: 275px;
  border-radius: 50%;
  border: 2px solid black;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled(animated.h1)`
  margin: 0 0 2rem 0;
  color: ${props => props.theme.textColor};
  font-size: 4rem;
  text-align: center;
  user-select: none;
  overflow: ${props => (props.$toggle ? null : 'hidden')};
  cursor: pointer;
  @media (max-width: 992px) {
    font-size: 3rem;
  }
`;

export const SecondName = styled(animated.span)`
  display: inline-block;
  color: ${props => props.theme.textColorDisabled};
  margin: 0 0.5rem;
`;

export const UpText = styled(animated.span)`
  position: absolute;
  top: -10px;
  left: 0;
  font-size: 1rem;
  color: ${props => props.theme.textColorDisabled};
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.span`
  cursor: pointer;
  transition: opacity 0.15s linear;
  svg {
    margin: 0 0.5rem;
    font-size: 2.8rem !important;
  }
  :hover {
    opacity: 0.7;
  }
`;

export const Button = styled(animated.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  margin-bottom: 2rem;
  padding: 0.75rem 1.25rem;
  color: ${props => props.theme.textColor};
  background-color: transparent;
  border: ${props => `2px solid ${props.theme.textColor}`};
  border-radius: 32px;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  :hover {
    color: ${props => props.theme.menuColor};
    border-color: ${props => props.theme.menuColor};
  }
  :focus,
  :hover {
    outline: none;
  }
`;

export const DownloadIconContainer = styled(animated.span)`
  svg {
    margin: 0 0.5rem 0 0;
    font-size: 1.6rem !important;
  }
`;

export const ButtonText = styled(animated.span)``;

export const Link = styled.a`
  text-decoration: none;
  :hover {
    color: ${props => props.theme.textColorHover};
  }
`;
