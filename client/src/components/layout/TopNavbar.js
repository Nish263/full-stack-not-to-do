import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assests/logo.png";

export const TopNavbar = () => {
  return (
    <div>
      <Navbar bg="warning" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="no internet" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-dark fw-bold">
              <LinkContainer to="/">
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
