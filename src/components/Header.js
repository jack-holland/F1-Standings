import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="py-3">
    <Container>
        <Navbar.Brand>
            <img src="./images/logo.svg" className="d-inline-block align-top" alt="Formula 1 Logo"/> Standings
        </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
