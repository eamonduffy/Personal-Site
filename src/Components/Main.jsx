import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import LeftView from '../Components/LeftView';
import RightView from '../Components/RightView';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <LeftView />
        </Col>
        <Col xs={10}>
          <RightView></RightView>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
