import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header.module.css';
import cv from '../assets/documents/cv.pdf'


export const Header = () => {
  return (
    <Navbar expand="lg" className={`py-4 fixed-top ${ styles.customNavbar } shadow-lg`}>
      <Container>
        <Navbar.Brand className={ styles.brandLink } href="#">MASC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link className={ styles.link } href="#aboutMe">About</Nav.Link>
            <Nav.Link className={ styles.link } href="#skills">Compétences</Nav.Link>
            <Nav.Link className={ styles.link } href="#experience">Expérience</Nav.Link>
            <Nav.Link className={ styles.link } href="#formation">Formation</Nav.Link>
          </Nav>
          <Nav
            className="ml-auto"
          >
            <Nav.Link href={cv} target='_new' className='p-0'>
              <button type="button" className="btn btn-md btn-outline-light rounded-pill px-3 py-2">Télécharger mon CV</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
