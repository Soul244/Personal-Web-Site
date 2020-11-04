import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-styled-flexboxgrid';
import handleViewport from 'react-in-viewport';
import { useSpring, config } from 'react-spring';

import {
  Container,
  ImageContainer,
  Image,
  Description,
  Heading,
  Number,
  RightContainer,
  LeftContainer,
  RightContainerBackground,
  TechologiesContainer,
  HEIGHT_VH
} from './Project.style';
import AnimatedIcon from '../AnimatedIcon';

const Project = ({
  heading,
  number,
  image,
  description,
  backgroundColor,
  color,
  isReverse,
  technologies,
  inViewport,
  forwardedRef
}) => {
  const leftAnim = useSpring({
    config: { ...config.default, duration: 500, delay: 1500 },
    height: inViewport ? HEIGHT_VH : 0,
    y: inViewport ? 0 : isReverse ? -80 : 80
  });

  const rightAnim = useSpring({
    config: { ...config.slow, duration: 500, delay: 1500 },
    y: inViewport ? 0 : 80,
    opacity: inViewport ? 1 : 0
  });

  return (
    <Container ref={forwardedRef}>
      <Number color={color} isReverse={isReverse}>
        {number}
      </Number>
      <Row style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}>
        <Col xs={12} sm={6}>
          <LeftContainer
            $backgroundColor={backgroundColor}
            style={{ height: leftAnim.height.interpolate(height => `${height}vh`) }}
          >
            <ImageContainer>
              <Image src={image} alt={heading} />
            </ImageContainer>
          </LeftContainer>
        </Col>
        <Col xs={12} sm={6}>
          <RightContainer
            style={{
              transform: rightAnim.y.interpolate(y => `translateY(${y}px)`)
            }}
          >
            <Heading color={color}>{heading}</Heading>
            <Description color={color}>{description}</Description>
            <Heading color={color} as="h3">
              Technologies
            </Heading>
            <TechologiesContainer>
              {technologies.map((technology, i) => (
                <AnimatedIcon key={`${heading}-technology-${i}`} color={color} {...technology} />
              ))}
            </TechologiesContainer>
            <RightContainerBackground $backgroundColor={backgroundColor} />
          </RightContainer>
        </Col>
      </Row>
    </Container>
  );
};

Project.defaultProps = {
  color: 'black',
  isReverse: false,
  technologies: []
};

Project.propTypes = {
  heading: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string,
  isReverse: PropTypes.bool,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  )
};

const ProjectViewport = handleViewport(Project);

export default ProjectViewport;
