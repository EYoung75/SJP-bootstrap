import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
    return (
      <div>
        <Navbar dark className={"navBar"}>
          <a href="/"><h4>St. John's Pediatrics</h4></a>
          <NavbarToggler onClick={props.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!props.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Locations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Patient Forms</NavLink>
              </NavItem> 
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default Navigation;