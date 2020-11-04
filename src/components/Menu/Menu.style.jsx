import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isScrolled ? 'white' : 'transparent')};
  box-shadow: ${props => (props.isScrolled ? '  0 1px 6px 0 rgba(32, 33, 36, 0.28)' : 'none')};
  transition: background-color 0.3s, box-shadow 0.3s;
`;
