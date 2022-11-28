import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.style.css';


export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-5 py-4 fixed-top customNavbar">
      <Container fluid>
        <Navbar.Brand href="#">SC Mebenga</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Compétences</Nav.Link>
            <Nav.Link href="#action1">Expérience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
