import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import HamburgerSpin from 'burger';

const AppNav = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar className='fixed-bottom container-fluid' expand='xl'>
        <Collapse isOpen={!collapsed} navbar>
          <NavbarBrand href='#home'>
            <img
              src='
              /img/initials.png'
              alt='JB + RC'
              className='initials'
            />
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={toggleNavbar} tag={RRNavLink} exact to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={toggleNavbar}
                tag={RRNavLink}
                to='/components/details'
              >
                Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={toggleNavbar}
                tag={RRNavLink}
                to='/components/ourstory'
              >
                Our Story
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={toggleNavbar}
                tag={RRNavLink}
                to='/components/suggestasong'
              >
                Suggest a Song
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggleNavbar} tag={RRNavLink} to='/'>
                RSVP
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <HamburgerSpin onClick={toggleNavbar} className='mr-auto ml-auto' />
      </Navbar>
    </header>
  );
};

export default AppNav;
