import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const ProView = styled.div`
  z-index: 100;
`

export default function ProjectsView(props) {
  return (
    // <Container>
    //   <h1>Test</h1>
    // </Container>
    <ProView><h1>Projects</h1></ProView>
  );
}
