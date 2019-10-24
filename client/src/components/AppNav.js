import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class AppNav extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar className='fixed-bottom' expand='xl'>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav as='ul'>
            <Nav.Item as='li'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item as='li'>
              <NavLink className='nav-link' to='/components/details'>
                Details
              </NavLink>
            </Nav.Item>
            <Nav.Item as='li'>
              <NavLink className='nav-link' to='/components/ourstory'>
                Our Story
              </NavLink>
            </Nav.Item>
            <Nav.Item as='li'>
              <NavLink className='nav-link' to='/components/suggestasong'>
                Suggest a Song
              </NavLink>
            </Nav.Item>
            <Nav.Item as='li'>
              <NavLink className='nav-link' to='!#' target='_blank'>
                RSVP
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle
          className='ml-auto mr-auto'
          aria-controls='basic-navbar-nav'
        />
      </Navbar>
    );
  }
}

export default AppNav;
