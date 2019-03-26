import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div>
      <Navbar dark className={"navBar"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4>St. John's Pediatrics</h4>
        </Link>
        <NavbarToggler onClick={props.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!props.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" style={{ textDecoration: "none" }} onClick={props.toggleNavbar}>
                <h4>Home</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" style={{ textDecoration: "none" }} onClick={props.toggleNavbar}>
                <h4>About</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/services" style={{ textDecoration: "none" }} onClick={props.toggleNavbar}>
                <h4>Services</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/locations" style={{ textDecoration: "none" }} onClick={props.toggleNavbar}>
                <h4>Locations</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/forms" style={{ textDecoration: "none" }} onClick={props.toggleNavbar}>
                <h4>Patient Forms</h4>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
