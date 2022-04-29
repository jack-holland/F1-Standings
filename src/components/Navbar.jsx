import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Navbar = ({ setPage }) => {
    return ( 
      <Container className="d-flex justify-content-center p-4">
        <Button variant="dark" className="m-1" onClick={() => setPage('drivers')}>Driver Standings</Button>
        <Button variant="dark" className="m-1" onClick={() => setPage('constructors')}>Constructor Standings</Button>
      </Container>
    );
  }

  export default Navbar;
