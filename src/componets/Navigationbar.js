import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

//import my css
import "../css/Navigationbar.css";

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="my__Navavigation" color="danger" light expand="md">
      <NavbarBrand className="my__logo" href="/">
        My school
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse className="myCollapse" isOpen={isOpen} navbar>
        <Nav className="mr-auto nav__links my-linkCol" navbar>
          <NavItem className="link_wrapper">
            <Link className="Nav__link" to="/">
              Home
            </Link>
          </NavItem>

          <NavItem className="link_wrapper">
            <Link className="Nav__link" to="/about-us">
              About us
            </Link>
          </NavItem>

          <NavItem className="link_wrapper">
            <Link className="Nav__link" to="/popular-courses">
              Popular couses
            </Link>
          </NavItem>
          <NavItem className="link_wrapper">
            <Link className="Nav__link" to="/our-gallary">
              Gallary
            </Link>
          </NavItem>

          <NavItem className="link_wrapper">
            <Link className="Nav__link" to="/contact-us">
              Contact Us
            </Link>
          </NavItem>
        </Nav>
        <NavbarText className="phone">+9182175680</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Navigationbar;
