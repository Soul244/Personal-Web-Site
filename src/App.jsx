import React, { useEffect, useState } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import NameComponent from './components/NameComponent';
import Project from './components/Project';
import Menu, { MenuItem } from './components/Menu';
import AnimatedHeading from './components/AnimatedHeading';
import projects from './data/projects';
import Cursor from './components/Cursor/Cursor';

function App() {
  const [cursor, setCursor] = useState({
    display: 'block',
    border: 'border: 2px solid black',
    background: 'transparent',
    x: 0,
    y: 0
  });

  const onMouseMove = e => {
    setCursor({
      display: 'block',
      border: 'border: 2px solid black',
      background: 'transparent',
      x: e.clientX,
      y: e.clientY
    });
  };

  const onMouseDown = e => {
    setCursor({
      ...cursor,
      x: e.clientX,
      y: e.clientY,
      border: 'border: 2px solid cornflowerBlue',
      background: 'cornflowerBlue'
    });
  };

  const onMouseUp = e => {
    setCursor({
      ...cursor,
      x: e.clientX,
      y: e.clientY,
      border: '',
      background: ''
    });
  };

  const onMouseLeave = e => {
    setCursor({ ...cursor, x: e.clientX, y: e.clientY, display: 'none' });
  };

  const onMouseEnter = e => {
    setCursor({ ...cursor, x: e.clientX, y: e.clientY, display: '' });
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <Grid fluid style={{ padding: 0 }}>
      <Menu>
        <MenuItem href="#my-works">My Works</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <Row>
        <Col xs={12}>
          <NameComponent />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}>
              <AnimatedHeading>My Works</AnimatedHeading>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id="my-works">
        <Col xs={12}>
          {projects.map((project, i) => (
            <Row key={`project-${i}`}>
              <Col xs={12}>
                <Project number={`0${i + 1}`} {...project} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
