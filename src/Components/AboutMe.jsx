import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: rgba(124, 124, 124, 0.8);
  border-left: 6px solid #595959;
  height: 30vh;
  width: 600px;
  margin-top: 15px;
  margin-left: 15%;
  border-radius: 3px;
`;

export default function AboutMe() {
  return (
    <AboutContainer>
      <h1>About Me</h1>
    </AboutContainer>
  );
}
