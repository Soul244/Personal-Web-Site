import React, { useContext } from 'react';
import { useSpring } from 'react-spring';
import MenuContext from './MenuContext';
import { Border, Container, Link } from './MenuItem.style';

function MenuItem(props) {
  const { isScrolled } = useContext(MenuContext);

  const { fontSize } = useSpring({
    from: {
      fontSize: 1.4
    },
    fontSize: isScrolled ? 1 : 1.4
  });

  return (
    <Container>
      <Link style={{ fontSize: fontSize.interpolate(size => `${size}rem`) }} {...props} />
      <Border />
    </Container>
  );
}

export default MenuItem;
