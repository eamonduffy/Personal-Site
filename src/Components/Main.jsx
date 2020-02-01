import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import Nav from './Nav';
import TheView from '../Components/TheView';

class Main extends Component {
  state = {
    profileOpen: true,
    projectsOpen: false
  }

  handleProfile = () => {
    if (this.state.profileOpen == true) {
      this.setState({ profileOpen: false })
      console.log('profile close', this.state.profileOpen, this.state.projectsOpen)
    } else {
      this.setState({ profileOpen: true })
      this.setState({ projectsOpen: false })
      console.log('profile open', this.state.profileOpen, this.state.projectsOpen)
    }
  }

  handleProjects = () => {
    if (this.state.projectsOpen == true) {
      this.setState({ projectsOpen: false })
      console.log('projects open', this.state.projectsOpen, this.state.profileOpen)
    } else {
      this.setState({ projectsOpen: true })
      this.setState({ profileOpen: false })
      console.log('projects closed', this.state.projectsOpen, this.state.profileOpen)
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Nav openProfile={this.handleProfile} openProjects={this.handleProjects} />
        </Row>
        <Row>
          <TheView />
        </Row>
      </div >

    );
  }
}
export default Main;
