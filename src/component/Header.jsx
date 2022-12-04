import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header.module.css';


export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className={`px-5 py-4 fixed-top ${ styles.customNavbar }`}>
      <Container>
        <Navbar.Brand href="#">MASC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#aboutMe">About</Nav.Link>
            <Nav.Link href="#skills">Compétences</Nav.Link>
            <Nav.Link href="#experience">Expérience</Nav.Link>
            <Nav.Link href="#formation">Formation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
