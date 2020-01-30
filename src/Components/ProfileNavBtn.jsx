import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';

const Button = styled.button`
  border-radius: 50px;
  border-width: 0px;
  height: 75px;
  width: 75px;
  text-align: center;
  margin: 10px;
  background-color: #7c7c7c;
  :hover {
    background-color: #353535;
  }
`;

export default function ProfileNavBtn() {
  return (
    <Container>
      <Button>
        <div style={{ color: '#565656' }}>
          <FiUser size={50} />
        </div>
      </Button>
    </Container>
  );
}
