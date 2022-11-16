import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import logo from "../assets/openlibrary.png";

export const ThisNavbar = () => {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        className=""
        // style={{ backgroundColor: "rgba(1,2,3,.69)" }}
        style={{ backgroundColor: "#162F4B" }}
      >
        <Container>
          <Navbar.Brand href="/" className="ms-4" id="zero-one">
            <span>OpenLibrary</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 mx-sm-3">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">Books</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Help</Nav.Link>
            </Nav>
            <Button variant="outline-light">
              Login
              <MdLogin />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
