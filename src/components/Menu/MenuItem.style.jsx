import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(animated.a)`
  padding: 1rem 2rem;
  color: ${props => props.theme.textColor};
  text-align: center;
  text-decoration: none;
  transition: color 0.15s;
  ${Container}:hover && {
    color: ${props => props.theme.menuColor};
  }
`;

export const Border = styled.hr`
  width: 100%;
  height: 3px;
  margin: -8px 0 0 0;
  padding: 0;
  background-color: ${props => props.theme.menuColor};
  border: none;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(-3px);
  transition: opacity 0.15s, transform 0.15s;
  ${Container}:hover && {
    opacity: 1;
    transform: translateY(0px);
  }
`;
