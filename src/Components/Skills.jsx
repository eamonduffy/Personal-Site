import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  background-color: rgba(124, 124, 124, 0.8);
  border-left: 6px solid #595959;
  height: 30vh;
  width: 600px;
  margin-top: 15px;
  margin-left: 15%;
  border-radius: 3px;
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
    </SkillsContainer>
  );
}
