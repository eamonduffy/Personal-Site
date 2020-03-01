import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { IoLogoJavascript, IoIosInfinite } from 'react-icons/io';
import {
  FaJava,
  FaNode,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaAngular,
  FaAws,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';
import { DiMongodb, DiScrum } from 'react-icons/di';

const SkillsContainer = styled.div`
  border: 5px solid #dcdcdc;
  box-shadow: 2px 3px 4px 1px #313131;
  height: 450px;
  width: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  text-align: center;
`;

const Title = styled.h3`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  color: white;
  border-bottom: 2px solid white;
  text-shadow: 2px 2px 1px #000000;
`;

const P = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  color: white;
  text-shadow: 1px 1px 1px #000000;
  font-size: 18px;
`;

const D = styled.p`
  margin-left: 60px;
  color: white;
  text-shadow: 1px 1px 2px #000000;
  font-size: 19px;
  border-bottom: 2px solid white;
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <Row>
        <Title>Skills</Title>
      </Row>
      <Row>
        <D>Primary</D>
      </Row>
      <Row>
        <Col>
          <Row>
            <IoLogoJavascript
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px', textShadow: '1px 1px 6px black' }}
            />
            <P>JavaScript</P>
          </Row>
          <Row>
            <FaNode color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>Node.js</P>
          </Row>
        </Col>
        <Col>
          <Row>
            <FaJava color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>Java</P>
          </Row>
          <Row>
            <FaPython
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px' }}
            />
            <P>Python</P>
          </Row>
        </Col>
        <Col>
          <Row>
            <FaHtml5 color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>HTML</P>
          </Row>
          <Row>
            <FaCss3Alt
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px' }}
            />
            <P>CSS</P>
          </Row>
        </Col>
      </Row>
      <Row>
        <D>Other</D>
      </Row>
      <Row>
        <Col>
          <Row>
            <FaReact color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>React.js</P>
          </Row>
          <Row>
            <FaVuejs color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>Vue.js</P>
          </Row>
          <Row>
            <FaAngular
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px' }}
            />
            <P>Angular</P>
          </Row>
        </Col>
        <Col>
          <Row>
            <DiMongodb
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px' }}
            />
            <P>MongoDB</P>
          </Row>
          <Row>
            <FaAws color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>AWS</P>
          </Row>
          <Row>
            <FaGitAlt
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px' }}
            />
            <P>Git.js</P>
          </Row>
        </Col>
        <Col>
          <Row>
            <IoIosInfinite
              color="#DCDCDC"
              size="25"
              style={{ marginLeft: '60px' }}
            />
            <P>DevOps</P>
          </Row>
          <Row>
            <DiScrum color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>Agile</P>
          </Row>
          <Row>
            <FaLinux color="#DCDCDC" size="25" style={{ marginLeft: '60px' }} />
            <P>Linux</P>
          </Row>
        </Col>
      </Row>
    </SkillsContainer>
  );
}
