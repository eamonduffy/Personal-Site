import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// COMPONENTS

const View = styled.div`
  background-color: rgba(124, 124, 124, 0.5);
  height: 84vh;
  width: 100%;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 15px;
`;

export default function TheView() {
  return <View></View>;
}
