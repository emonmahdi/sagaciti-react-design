import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <>  
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav"> 
                 <Nav className="ms-auto">
                    <Nav.Link as={Link}  to="/home">Home</Nav.Link>
                    <Nav.Link as={Link}  to="/feature">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard" className=' '>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/signin" className='btn btn-primary text-light'>Sign In</Nav.Link>
                </Nav> 
                 
            </Navbar.Collapse>
             </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;