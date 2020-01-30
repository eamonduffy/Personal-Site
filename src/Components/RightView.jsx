import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// COMPONENTS
import SidenavBtn from './ProfileNavBtn';

const View = styled.div`
  background-color: rgba(124, 124, 124, 0.7);
  height: 85vh;
  border-radius: 10px;
  margin-top: 50px;
`;

export default function RightView() {
  return (
    <Container>
      <View></View>
    </Container>
  );
}
