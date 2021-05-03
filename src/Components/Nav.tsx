import React from 'react';
import { NavLink } from 'react-router-dom';

import SubNavItem from '../Components/SubNavItem';
import ParalaxItem from './ParalaxItem';

import { Navbar, NavItem } from 'react-bootstrap';

interface NavProps {
  routeTo: (path: string) => void;
}

class Nav extends React.Component<NavProps> {

    render() {
      return (
        <ParalaxItem level={2}>
        <Navbar >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  >
              <div className="d-flex flex-column">
                <NavItem className='grey-box'>
                  <a onClick={() => this.props.routeTo("/projects")}>
                    <p>Projects</p>
                  </a>
                </NavItem>
                <SubNavItem className='grey-box align-self-end'>
                  <a onClick={() => this.props.routeTo("/projects/QVision")}>
                    <p>QVision</p>
                  </a>
                </SubNavItem>
                <SubNavItem className='grey-box align-self-end'>
                  <a onClick={() => this.props.routeTo("/projects/TaskT")}>
                    <p>TaskT</p>
                  </a>
                </SubNavItem>
                <SubNavItem className='grey-box align-self-end'>
                  <a onClick={() => this.props.routeTo("/projects/Tether")}>
                    <p>Tether</p>
                  </a>
                </SubNavItem>
              </div>
            </Navbar.Collapse>
          </Navbar>
          </ParalaxItem>);
    }
}

export default Nav;