import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarScreen() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><h5>Players Data</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/volleyball">Volleyball</Nav.Link>
            <Nav.Link as={Link} to="/football">Football</Nav.Link>
            <Nav.Link as={Link} to="/cricket">Cricket</Nav.Link>
            <Nav.Link as={Link} to="/basketball">Basketball</Nav.Link>
            <Nav.Link as={Link} to="/hockey">Hockey</Nav.Link>
            <Nav.Link as={Link} to="/nisha">NishaSingla</Nav.Link>
            <Nav.Link as={Link} to="/think">Thinking</Nav.Link>
            <Nav.Link as={Link} to="/count">Counter</Nav.Link>
            <Nav.Link as={Link} to="/miscel">Miscellanous</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarScreen;