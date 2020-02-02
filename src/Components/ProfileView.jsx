import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import ImgCarousel from './ImgCarousel'
import me from '../img/meProfile.PNG'

const ProView = styled.div`
  z-index: 100;
`
const ImgContainer = styled.div`
  display: absolute;
  margin-left: auto;
  margin-right:auto;
  text-align: center;
  position: relative;
  top: 80%;
`


export default function ProfileView(props) {

  return (
    <ProView>
      <Row>
        <Col>
          <ImgCarousel></ImgCarousel>
          {/* <ImgContainer><img src={me} /></ImgContainer> */}
        </Col>
        <Col></Col>
      </Row>
    </ProView>
  );
}
