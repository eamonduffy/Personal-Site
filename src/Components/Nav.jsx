import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// COMPONENTS
import ProfileNavBtn from './ProfileNavBtn';
import LinkedinNavBtn from './LinkedinNavBtn';
import ProjectsNavBtn from './ProjectsNavBtn';
import GithubNavBtn from './GithubNavBtn';
import FacebookNavBtn from './FacebookNavBtn';

const View = styled.div`
  // background-color: rgba(124, 124, 124, 0.5);
  height: 15vh;
  width: 100%;
`;

export default function Nav(props) {
  return (
    <View>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>

        <Col>
          {/* Instead of {..props} you can use 'openProfile={props.openProfile}' ::::: Each button has two examples of how to pass up*/}
          <ProfileNavBtn {...props} />
        </Col>
        <Col>
          <ProjectsNavBtn openProjects={props.openProjects} />
        </Col>
        <Col>
          <GithubNavBtn />
        </Col>
        <Col>
          <LinkedinNavBtn />
        </Col>
        <Col>
          <FacebookNavBtn />
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </View>
  );
}
