import React, { useState, forwardRef } from 'react';
import { animated, useSpring, interpolate, config } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import { FaGithubSquare, FaLinkedin, FaCloudDownloadAlt } from 'react-icons/fa';

import {
  Container,
  NameContainer,
  Name,
  SecondName,
  UpText,
  Button,
  IconsContainer,
  IconContainer,
  MyImage,
  MyImageContainer,
  ImageBorder,
  DownloadIconContainer,
  ButtonText,
  Link
} from './NameComponent.style';
import ScrollDown from '../ScrollDown/ScrollDown';

const NameComponent = forwardRef((_, ref) => {
  const [toggle, setToggle] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [centerText, bounds] = useMeasure({ polyfill: ResizeObserver });

  const negativeMargin = -(bounds.width / 2);

  const textAnim = useSpring({
    from: {
      textY: 0,
      height: 0,
      centerTextScale: 1,
      centerTextNegativeMargin: 0,
      mainTextScale: 1,
      upTextOpacity: 0
    },
    config: config.default,
    textY: 20,
    height: 110,
    scale: toggle ? 1.2 : 1,
    centerTextScale: toggle ? 0 : 1,
    centerTextNegativeMargin: toggle ? negativeMargin : 0,
    upTextOpacity: toggle ? 1 : 0
  });

  const imageAnim = useSpring({
    from: {
      scale: 0.7
    },
    config: config.default,
    scale: 1
  });

  const iconAnim = useSpring({
    from: {
      opacity: 0,
      y: -20
    },
    config,
    opacity: hovered ? 1 : 0,
    y: hovered ? 0 : -20
  });

  const transformText = interpolate(
    [textAnim.textY, textAnim.scale],
    (y, scale) => `translate3d(0,${y}px,0) scale(${scale})`
  );

  const imageScale = imageAnim.scale.interpolate(scale => `scale(${scale})`);

  const transformIcon = iconAnim.y.interpolate(y => `translate3d(0,${y}px,0) `);

  const buttonWidth = iconAnim.opacity
    .interpolate({
      range: [0, 1],
      output: [95, 160]
    })
    .interpolate(width => `${width}px`);

  const buttonTextMargin = iconAnim.opacity
    .interpolate({ range: [0, 1], output: [-30, 0] })
    .interpolate(width => `${width}px`);

  return (
    <Container ref={ref}>
      <MyImageContainer>
        <MyImage src="me.webp" alt="hasan can gedik" style={{ transform: imageScale }} />
        <ImageBorder />
      </MyImageContainer>

      <NameContainer>
        <Name
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          onClick={() => setToggle(!toggle)}
          $toggle={toggle}
          style={{
            height: textAnim.height,
            transform: transformText
          }}
        >
          <animated.span style={{ marginRight: textAnim.centerTextNegativeMargin }}>
            Hasan
          </animated.span>
          <UpText style={{ opacity: textAnim.upTextOpacity }}>↓ Just call me as Hasan</UpText>
          <SecondName
            ref={centerText}
            style={{
              transform: textAnim.centerTextScale.interpolate(scale => `scale(${scale})`)
            }}
          >
            Can
          </SecondName>
          <animated.span style={{ marginLeft: textAnim.centerTextNegativeMargin }}>
            Gedik
          </animated.span>
        </Name>
      </NameContainer>
      <Button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href="/cv.pdf"
        download
        style={{ width: buttonWidth }}
      >
        <DownloadIconContainer
          style={{
            opacity: iconAnim.opacity,
            transform: transformIcon
          }}
        >
          <FaCloudDownloadAlt />
        </DownloadIconContainer>
        <ButtonText style={{ marginLeft: buttonTextMargin }}>Resume</ButtonText>
      </Button>
      {/* <IconsContainer>
        <Link href="https://www.linkedin.com/in/hasan-can-gedik/" target="_blank">
          <IconContainer>
            <FaLinkedin style={{ color: '#2867B2' }} />
          </IconContainer>
        </Link>
        <Link href="https://github.com/Soul244" target="_blank">
          <IconContainer>
            <FaGithubSquare style={{ color: '#24292e' }} />
          </IconContainer>
        </Link>
      </IconsContainer> */}
      <ScrollDown />
    </Container>
  );
});

export default NameComponent;
