import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="/home" className='text-light'> 
          <i class="fa-brands fa-stack-overflow me-3"></i>
            Project Fair
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header