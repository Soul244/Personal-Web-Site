import styled, { keyframes } from 'styled-components';

// <section id="section10" class="demo">
//   <h1>Scroll Down Button #10</h1>
//   <a href="#thanks"><span></span>Scroll</a>
// </section>

export const Container = styled.div`
  position: absolute;
  left: calc(50% - 30px);
  bottom: 5%;
`;

export const Link = styled.a`
  position: relative;
  padding-top: 60px;
`;

const anim = keyframes`
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
`;

export const Elips = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid ${props => props.theme.textColor};
  border-radius: 50px;
  box-sizing: border-box;
  :before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: ${props => props.theme.textColor};
    border-radius: 100%;
    animation: ${anim} 2s infinite;
    box-sizing: border-box;
  }
`;
