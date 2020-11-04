import styled from 'styled-components';

export const Container = styled.span`
  position: absolute;
  z-index: 999;
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.2s ease;
  transition-property: background, border, transform;
  transform-origin: 150% 150%;
`;
