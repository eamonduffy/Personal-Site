import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import Nav from './Nav';
import ProfileView from './ProfileView';
import ProjectsView from './ProjectsView'

const View = styled.div`
  background-color: rgba(124, 124, 124, 0.5);
  height: 84vh;
  width: 100%;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 15px;
  z-index:1;
`;

class Main extends Component {
  state = {
    profileOpen: true,
    projectsOpen: false
  }

  handleProfile = () => {
    this.setState({ profileOpen: true })
    this.setState({ projectsOpen: false })
    console.log('profile', this.state.profileOpen, this.state.projectsOpen)

  }

  handleProjects = () => {
    this.setState({ projectsOpen: true })
    this.setState({ profileOpen: false })
    console.log('projects', this.state.profileOpen, this.state.projectsOpen)

  }

  render() {
    return (
      <div>
        <Row>
          <Nav openProfile={this.handleProfile} openProjects={this.handleProjects} />
        </Row>
        <Row>
          <View>
            {this.state.profileOpen ? <ProfileView /> : <ProjectsView />}
          </View>
        </Row>
      </div >

    );
  }
}
export default Main;
