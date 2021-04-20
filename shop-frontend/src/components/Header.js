import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="fas fa-shopping-cart" href="/cart">
                Cart
              </Nav.Link>
              <Nav.Link className="fas fa-user" href="/login">
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
