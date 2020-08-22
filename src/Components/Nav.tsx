import React from 'react';
import { NavLink } from 'react-router-dom';

import SubNavItem from '../Components/SubNavItem';
import ParalaxItem from './ParalaxItem';

import { Navbar, NavItem } from 'react-bootstrap';

class Nav extends React.Component {

    render() {
      return (
        <ParalaxItem level={2}>
        <Navbar >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  >
              <div className="d-flex flex-column">
                <NavItem className='grey-box'>
                  <NavLink to="/projects">
                    <p>Projects</p>
                  </NavLink>
                </NavItem>
                <SubNavItem className='grey-box align-self-end'>
                  <NavLink to="/projects/QVision">
                    <p>QVision</p>
                  </NavLink>
                </SubNavItem>
                <SubNavItem className='grey-box align-self-end'>
                  <NavLink to="/projects/TaskT">
                    <p>TaskT</p>
                  </NavLink>
                </SubNavItem>
                <SubNavItem className='grey-box align-self-end'>
                  <NavLink to="/projects/Tether">
                    <p>Tether</p>
                  </NavLink>
                </SubNavItem>
              </div>
            </Navbar.Collapse>
          </Navbar>
          </ParalaxItem>);
    }
}

export default Nav;