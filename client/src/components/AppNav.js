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
import { HamburgerSpin } from 'react-animated-burgers';

const AppNav = props => {
  const [collapsed, setCollapsed] = useState(true);
  const [inActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    setActive(!inActive);
  };

  return (
    <header>
      <Navbar className='fixed-bottom'>
        <Collapse isOpen={!collapsed} navbar>
          {/* <NavbarBrand href='#home'>
            <img
              src='
              /img/initials.png'
              alt='JB + RC'
              className='initials'
            />
          </NavbarBrand> */}
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
        <HamburgerSpin
          onClick={toggleNavbar}
          className='hamburger mr-auto ml-auto'
          isActive={inActive}
          barColor='#cd6647'
        />
      </Navbar>
    </header>
  );
};

export default AppNav;
