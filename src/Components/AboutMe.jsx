import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap'
import { FaRegBuilding } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'

const AboutContainer = styled.div`
  border: 5px solid #DCDCDC;
  box-shadow: 2px 3px 4px 1px #313131;
  height: 50vh;
  width: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  text-align: center;
`;

const Title = styled.h3`
  // margin: 15px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  color: white;
  border-bottom: 2px solid white;
  text-shadow: 2px 3px 3px #000000;
`;

const P = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  color: white;
  text-shadow: 2px 3px 3px #000000;
  font-size: 15px;
`

const D = styled.p`
  margin-left: 19px;
  margin-right: 19px;
  margin-top: 20px;
  color: white;
  text-shadow: 2px 3px 3px #000000;
  font-size: 17px;
`

export default function AboutMe() {
  return (
    <AboutContainer>
      <Row>
        <Title>About Me</Title>
      </Row>
      <Row>
        <Col>
          <Row>
            <FaHome color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>Connecticut, USA</P>
          </Row>
          <Row>
            <FaRegBuilding color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P> The Hartford, Inc.</P>
          </Row>
        </Col>
        <Col>
          <Row>
            <IoMdSchool color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P> Quinnipiac University</P>
          </Row>
          <Row>
            <AiOutlineMail color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P> <a href="mailto:eamon.duffy0@gmail.com?Subject=Hello%20Eamon" style={{ color: 'white' }}>eamon.duffy0@gmail.com</a></P>
          </Row>
        </Col>
      </Row>
      <Row>
        <D>Currently a Senior at Quinnipiac University studying Software Engineering. I primarily do web development (front-end and back-end) but I also do work in
          DevOps and Object-Oriented Programming. I do a lot of things on top of being a developer such as hiking and climbing (Bouldering specifically). I'm preparing
          myself to go on a cross country trip over the summer once I graduate and can't wait to explore all the national parks. I'm hoping to find time to finish a blog
          site where I can share my trip and future trips, so look forward to that. If you want to contact me my email is above so feel free to reach out even if its to discuss outside
          of the tech realm!</D>
      </Row>

    </AboutContainer>
  );
}
