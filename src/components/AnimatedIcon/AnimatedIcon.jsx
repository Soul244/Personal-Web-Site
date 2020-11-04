import React from 'react';
import PropTypes from 'prop-types';
import { Container, IconContainer } from './AnimatedIcon.style';

function AnimatedIcon({ icon, name, color, backgroundColor }) {
  return (
    <Container color={color} backgroundColor={backgroundColor}>
      <IconContainer>{icon}</IconContainer>
      {name}
    </Container>
  );
}

AnimatedIcon.defaultProps = {
  color: 'black'
};

AnimatedIcon.propTypes = {
  icon: PropTypes.any.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default AnimatedIcon;
