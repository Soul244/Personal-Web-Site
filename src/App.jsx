import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import NameComponent from './components/NameComponent';
import Project from './components/Project';
import Menu, { MenuItem } from './components/Menu';
import AnimatedHeading from './components/AnimatedHeading';
import projects from './data/projects';
import Cursor from './components/Cursor';

function App() {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <Cursor />
      <Menu>
        <MenuItem href="#works">Works</MenuItem>
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
      <Row id="works">
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
