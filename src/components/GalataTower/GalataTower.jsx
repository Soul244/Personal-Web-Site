import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import MouseTooltip from './MouseTooltip';

import {
  ImageContainer,
  Image,
  BlueBackground,
  Clouds,
  Credit,
  InfoText
} from './GalataTower.style';

const config = { mass: 5, tension: 200, friction: 200, duration: 350 };

function GalataTower() {
  const [images, setImages] = useState({
    blueBackground: false,
    clouds: false,
    galata: false
  });

  const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);

  const [image, { height }] = useMeasure();

  const props = useSpring({
    config,
    height: images.blueBackground && images.clouds && images.galata ? height : 0
  });

  const handleLoad = key => {
    setImages(oldState => {
      return {
        ...oldState,
        [key]: true
      };
    });
  };

  const toggleMouseTooltip = val => {
    setIsMouseTooltipVisible(val);
  };

  return (
    <>
      <a
        href="https://en.wikipedia.org/wiki/Galata_Tower"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageContainer style={{ ...props }}>
          <BlueBackground src="/blue_background.webp" onLoad={() => handleLoad('blueBackground')} />
          <Clouds src="/clouds.webp" onLoad={() => handleLoad('clouds')} />
          <Image
            ref={image}
            src="/galata_tower.webp"
            alt="galata tower"
            onLoad={() => handleLoad('galata')}
            onMouseEnter={() => toggleMouseTooltip(true)}
            onMouseLeave={() => toggleMouseTooltip(false)}
          />
          <MouseTooltip visible={isMouseTooltipVisible} offsetX={25}>
            <InfoText>Galata Tower. Most beautiful thing in Istanbul</InfoText>
          </MouseTooltip>
        </ImageContainer>
      </a>
      <Credit href="https://unsplash.com/photos/T3jvNXWWpy0" target="_blank">
        Credit
      </Credit>
    </>
  );
}

GalataTower.propTypes = {};

export default GalataTower;
