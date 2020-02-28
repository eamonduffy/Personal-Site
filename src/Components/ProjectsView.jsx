import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const ProView = styled.div`
  z-index: 100;
`;

const Name = styled.h1`
  margin: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-shadow: 2px 3px 3px #000000;
`;

const ProjectContainer = styled.div`
  border: 5px solid #dcdcdc;
  box-shadow: 2px 3px 4px 1px #313131;
  height: 150px;
  width: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  text-align: center;
`;

const ProjectTitle = styled.h4`
  margin-left: 40px;
  color: white;
  text-shadow: 2px 3px 3px #000000;
`;

export default function ProjectsView(props) {
  return (
    <ProView>
      <Row>
        <Name>Projects</Name>
      </Row>
      <Row>
        <Col>
          <ProjectContainer>
            <Row>
              <ProjectTitle>QU Weather</ProjectTitle>
            </Row>
          </ProjectContainer>
        </Col>
        <Col></Col>
      </Row>
    </ProView>
  );
}
