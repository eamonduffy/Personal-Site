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
  background-color: rgba(124, 124, 124, 0.7);
  height: 85vh;
  border-radius: 10px;
  margin-top: 50px;
`;

export default function LeftView() {
  return (
    <Container>
      <View>
        <Row>
          <Col>
            <ProfileNavBtn />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectsNavBtn />
          </Col>
        </Row>
        <Row>
          <Col>
            <GithubNavBtn />
          </Col>
        </Row>
        <Row>
          <Col>
            <LinkedinNavBtn />
          </Col>
        </Row>
        <Row>
          <Col>
            <FacebookNavBtn />
          </Col>
        </Row>
      </View>
    </Container>
  );
}
