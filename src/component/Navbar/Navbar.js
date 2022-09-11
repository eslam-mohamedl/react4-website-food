import React from 'react'
import { Button , Container , Form , Nav , Navbar  } from 'react-bootstrap';
import logo from './../../assests/images/logo.png';
import './navs.css';

 const Navbars = () => {
  return(
    <div>      <Container >

        <Navbar expand="lg">
        <Navbar.Brand href="#home"><img className='logo' src={logo} alt="logo-error"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link class="listing" href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action1">Explore food</Nav.Link>
            <Nav.Link href="#action2">Review</Nav.Link>
            <Nav.Link href="#action1">faq</Nav.Link>
            
           
          </Nav>
          <Form className="d-flex">

            <Button id="last-nav"  >1800789123</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    </Container>

    </div>
  )
}

export default Navbars;
