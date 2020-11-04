import React, { useEffect, useState } from 'react';
import { Container } from './Menu.style';
import MenuContext from './MenuContext';

function Menu(props) {
  const [offsetY, setOffsetY] = useState();

  function handleScroll() {
    const { pageYOffset } = window;
    setOffsetY(pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = offsetY > 60;

  return (
    <MenuContext.Provider value={{ isScrolled }}>
      <Container isScrolled={isScrolled} {...props} />
    </MenuContext.Provider>
  );
}

export default Menu;
