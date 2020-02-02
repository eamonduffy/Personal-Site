import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';

const Button = styled.button`
  display: block;
  border-radius: 50px;
  border-width: 0px;
  height: 75px;
  width: 75px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  background-color: rgba(155, 155, 155);
  transition: 0.3s;
  box-shadow: 0 10px 10px -2px rgba(0, 0, 0, 0.4);
  outline: none !important;

  :hover {
    background-color: #6cc644;
  }
`;

const IconStyle = styled.div`
  color: #4f4f4f;
  transition: 0.5s;

  :hover {
    color: rgba(237, 237, 237, 0.76);
  }
`;

export default function ProfileNavBtn(props) {
  return (
    <Container>
      <Button onClick={props.openProjects}>
        <IconStyle>
          {/* <div style={{ color: 'rgba(170, 170, 170, 0.76)' }}> */}
          <FaLaptopCode size={50} />
          {/* </div> */}
        </IconStyle>
      </Button>
    </Container>
  );
}
