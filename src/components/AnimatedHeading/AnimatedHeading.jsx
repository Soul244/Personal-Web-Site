import React from 'react';
import handleViewport from 'react-in-viewport';
import { useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import mergeRefs from 'react-merge-refs';

import { Container } from './AnimatedHeading.style';

const AnimatedHeading = ({ forwardedRef, inViewport, ...rest }) => {
  const [heigthRef, bounds] = useMeasure();

  const anim = useSpring({
    from: {
      height: 0,
      y: 30
    },
    y: 0,
    height: bounds.height > 0 ? (inViewport ? bounds.height : 0) : 1
  });

  const transform = anim.y.interpolate(y => `translate3d(0,${y}px,0)`);

  return (
    <Container
      style={{ transform, height: anim.height.interpolate(h => `${h}px`) }}
      ref={mergeRefs([forwardedRef, heigthRef])}
      {...rest}
    />
  );
};

const AnimatedHeadingViewport = handleViewport(AnimatedHeading);

export default AnimatedHeadingViewport;
