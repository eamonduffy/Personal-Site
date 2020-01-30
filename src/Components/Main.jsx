import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import Nav from './Nav';
import TheView from '../Components/TheView';

function App() {
  return (
    <div>
      <Row>
        <Nav />
      </Row>
      <Row>
        <TheView />
      </Row>
    </div>

  );
}
export default App;
