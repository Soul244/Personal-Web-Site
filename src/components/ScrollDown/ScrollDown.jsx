import React from 'react';
import { Container, Elips, Link } from './ScrollDown.style';

function ScrollDown(props) {
  return (
    <Container>
      <Link {...props}>
        <Elips />
        Scroll
      </Link>
    </Container>
  );
}

export default ScrollDown;
