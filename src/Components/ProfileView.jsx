import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import ImgCarousel from './ImgCarousel';
import me from '../img/meProfile.PNG';

const ProView = styled.div`
  z-index: 100;
`;

const Name = styled.h1`
  margin: 15px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-shadow: 2px 3px 3px #000000;
`;

export default function ProfileView(props) {
  return (
    <ProView>
      <Row>
        <Col>
          <ImgCarousel></ImgCarousel>
        </Col>
        <Col>
          <Row>
            <Name>John Eamon Duffy</Name>
          </Row>
        </Col>
      </Row>
    </ProView>
  );
}
