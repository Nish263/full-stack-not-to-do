import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/logo.png";

export const TopNavbar = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userList"));
    setUser(userInfo);
  }, []);

  const handleOnSignout = () => {
    sessionStorage.removeItem("userList");
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="warning" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="no internet" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-dark fw-bold  text-center">
              {user?._id ? (
                <>
                  {user.name} <br />{" "}
                  <Button variant="primary" onClick={handleOnSignout}>
                    {" "}
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <LinkContainer to="/">
                    <Nav.Link>Sign in</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>Sign up</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
