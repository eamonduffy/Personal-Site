import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import ImgCarousel from './ImgCarousel';
import me from '../img/meProfile.PNG';
import profilePic from '../img/3.jpg';
import AboutMe from './AboutMe';
import Skills from './Skills';

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

const Title = styled.h3`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-shadow: 2px 3px 3px #000000;
`;

const ProfilePic = styled.img`
  height: 100%;
  width: 95%;
  margin: 20px;
  margin-left: 20%;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 black;
`;

export default function ProfileView(props) {
  return (
    <ProView>
      <Row>
        <Name>John Eamon Duffy</Name>
      </Row>
      <Row>
        <Title>Software Engineer</Title>
      </Row>
      <Row>
        <Col>
          <AboutMe />
        </Col>
        <Col>
          <Skills />
        </Col>
      </Row>
    </ProView>
  );
}
