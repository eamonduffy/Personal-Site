import React from "./node_modules/react";
import styled, { css } from "./node_modules/styled-components";
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";
import { Button, Col, Row, Container } from "./node_modules/react-bootstrap";

const Button1 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container1 = styled.div`
  text-align: center;
  // background: green;
`;

var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42"
};

const RedContainer = styled.div`
  background: red;

  ${props =>
    props.moved &&
    css`
      background: palevioletred;
      color: white;
      margin-left: 100px;
    `}
`;

function Test() {
  return (
    <Container1>
      <h1> My Site </h1>
      {/* Font Awesome stuff */}{" "}
      <div>
        <FontAwesomeIcon icon={["fab", "facebook"]} />{" "}
        <FontAwesomeIcon icon={["fab", "github"]} size="3x" />{" "}
        {/* <FontAwesomeIcon icon={["fab", "linkedin"]} /> */}{" "}
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} color="blue" />
      </div>
      {/* Custom Button */} <Button1> Normal Button </Button1>{" "}
      <Button1 primary> Primary Button </Button1>
      {/* bootstrap button */} <Button> Hello </Button>
      {/* Testing bootstrap grid layout */}{" "}
      <Container
        style={{
          backgroundColor: bgColors.Blue
        }}
      >
        <Row className="justify-content-md-center">
          <Col
            style={{
              backgroundColor: bgColors.Yellow
            }}
          >
            {" "}
            1 of 3{" "}
          </Col>{" "}
          <Col> Variable width content </Col>{" "}
          <Col>
            <RedContainer> 3 of 3 </RedContainer>{" "}
          </Col>{" "}
          <Col>
            <RedContainer> 4 of 3 </RedContainer>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </Container1>
  );
}

export default App;
