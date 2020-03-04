import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillTool } from 'react-icons/ai';
import { FaRegBuilding, FaGitAlt } from 'react-icons/fa';

const ProView = styled.div`
  z-index: 100;
  height: 83vh;
  @media (max-width: 1400px) {
    overflow-y: scroll;
    overflow-x: hidden;
  }`;


const Name = styled.h1`
  margin: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-shadow: 2px 3px 3px #000000;

  @media (max-width: 1600px) {
    font-size: 35px;
  }
`;

const ProjectContainer = styled.div`
  border: 5px solid #dcdcdc;
  box-shadow: 2px 3px 4px 1px #313131;
  height: 190px;
  width: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  text-align: center;

  @media (max-width: 1600px) {
    height: 165px;
    margin-top: 15px;
  }
`;

const ProjectTitle = styled.h4`
  margin-left: 40px;
  color: white;
  text-shadow: 2px 3px 3px #000000;

  @media (max-width: 1600px) {
    font-size: 22px;
  }
`;

const ProjectDesc = styled.p`
  margin-left: 40px;
  margin-right: 10px;
  color: white;
  text-shadow: 2px 3px 3px #000000;
  text-align: left;

  @media (max-width: 1600px) {
    font-size: 14px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

const GitLink = styled.a`
  margin-left: 12px;
  color: white;
  text-shadow: 2px 3px 3px #000000;
  text-align: left;

  &:hover {
    color: #de6c64;
  }

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;

export default function ProjectsView(props) {
  return (
    <ProView>
      <Row>
        <Name>Projects</Name>
      </Row>
      <Row>
        <Col>
          <ProjectContainer>
            <Row>
              <ProjectTitle>QU Weather</ProjectTitle>
            </Row>
            <Row>
              <ProjectDesc>
                A web application that pulls weather data from New Haven and
                Quinnipiac sensors to store and display data for the public to
                view.
              </ProjectDesc>
            </Row>
            <Row>
              <AiFillTool
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>
                React.js • Node.js
              </ProjectDesc>
            </Row>
            <Row>
              <FaRegBuilding
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>
                Quinnipiac University
              </ProjectDesc>
            </Row>
          </ProjectContainer>
        </Col>
        <Col>
          <Col>
            <ProjectContainer>
              <Row>
                <ProjectTitle>QU Rock Climbing Website</ProjectTitle>
              </Row>
              <Row>
                <ProjectDesc>
                  A web application made in collaboration to showcase the club
                  and allow admins to post club information, events/trips and
                  manage members.
                </ProjectDesc>
              </Row>
              <Row>
                <AiFillTool
                  color="#DCDCDC"
                  size="22"
                  style={{ marginLeft: '40px' }}
                />
                <ProjectDesc style={{ marginLeft: '10px' }}>
                  Angular • Node.js
                </ProjectDesc>
              </Row>
              <Row>
                <FaGitAlt
                  color="#DCDCDC"
                  size="22"
                  style={{ marginLeft: '40px' }}
                />
                <GitLink href="https://github.com/Hanlon199/QU-Rock-Climbing">
                  Hanlon199/QU-Rock-Climbing
                </GitLink>
              </Row>
            </ProjectContainer>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectContainer>
            <Row>
              <ProjectTitle>DevOps Tools Dashboard</ProjectTitle>
            </Row>
            <Row>
              <ProjectDesc>
                A web application which showcases the structure of and flow of
                DevOps and gives access to tools used throughout the company.
              </ProjectDesc>
            </Row>
            <Row>
              <AiFillTool
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>
                Vue.js • Node.js
              </ProjectDesc>
            </Row>
            <Row>
              <FaRegBuilding
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>
                The Hartford, Inc.
              </ProjectDesc>
            </Row>
          </ProjectContainer>
        </Col>

        <Col>
          <ProjectContainer>
            <Row>
              <ProjectTitle>Five Stars</ProjectTitle>
            </Row>
            <Row>
              <ProjectDesc>
                Mobile app made in collaboration to allow users to create
                accounts to rate movies, anime and video games which are posted
                for friends to view.
              </ProjectDesc>
            </Row>
            <Row>
              <AiFillTool
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>
                Android Application
              </ProjectDesc>
            </Row>
            <Row>
              <FaGitAlt
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <GitLink href="https://github.com/Gorman98/Five-Stars">
                Gorman98/Five-Stars
              </GitLink>
            </Row>
          </ProjectContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectContainer>
            <Row>
              <ProjectTitle>Company Bulletin Board</ProjectTitle>
            </Row>
            <Row>
              <ProjectDesc>
                A web application that displays upcoming events, general company
                info and useful tips for employees and visitors.
              </ProjectDesc>
            </Row>
            <Row>
              <AiFillTool
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>Vue.js</ProjectDesc>
            </Row>
            <Row>
              <FaRegBuilding
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>
                Precision Combustion, Inc.
              </ProjectDesc>
            </Row>
          </ProjectContainer>
        </Col>
        <Col>
          <ProjectContainer>
            <Row>
              <ProjectTitle>Wave Game</ProjectTitle>
            </Row>
            <Row>
              <ProjectDesc>
                Improved an application as 5 man team to complete customer
                requirements given to us over the duration of a semester.
              </ProjectDesc>
            </Row>
            <Row>
              <AiFillTool
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <ProjectDesc style={{ marginLeft: '10px' }}>Java</ProjectDesc>
            </Row>
            <Row>
              <FaGitAlt
                color="#DCDCDC"
                size="22"
                style={{ marginLeft: '40px' }}
              />
              <GitLink href="https://github.com/WillEccles/wavegame">
                WillEccles/wavegame
              </GitLink>
            </Row>
          </ProjectContainer>
        </Col>
      </Row>
    </ProView>
  );
}
