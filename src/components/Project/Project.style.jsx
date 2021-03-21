import { animated } from 'react-spring';
import styled from 'styled-components';

export const HEIGHT_VH = 70;

export const Container = styled.div`
  position: relative;
`;

export const Number = styled.span`
  position: absolute;
  z-index: 1;
  top: 2%;
  left: ${({ isReverse }) => (isReverse ? null : '2%')};
  right: ${({ isReverse }) => (isReverse ? '2%' : null)};
  margin: 0;
  padding: 1rem;

  color: ${props => props.color};
  font-size: 4rem;
  opacity: 0.6;
  border-radius: 16px;
  @media (max-width: 992px) {
    font-size: 3rem;
  }
`;

// LEFT
export const LeftContainer = styled(animated.figure)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  box-sizing: border-box;
  background-color: ${props => props.$backgroundColor};
  overflow: hidden;
`;

export const ImageContainer = styled.figcaption`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  max-height: 70%;
  max-width: 70%;
  padding: 2rem;
  object-fit: cover;
  filter: drop-shadow(0px 5px 12px rgba(0, 0, 0, 0.25));
`;

// RIGHT
export const RightContainer = styled(animated.div)`
  min-height: ${HEIGHT_VH}vh;
  position: relative;
  padding: 2.5rem;
  box-sizing: border-box;
  overflow: hidden;
`;

export const RightContainerBackground = styled(animated.div)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.$backgroundColor};
`;

export const Heading = styled.h3`
  position: relative;
  color: ${props => props.color};
  font-size: 2rem;
  text-transform: uppercase;
  :first-child {
    margin: 0 0 2rem 0;
  }
  :not(:first-child) {
    margin: 2rem 0;
  }
`;

export const Description = styled.p`
  color: ${props => props.color};
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const TechologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;
