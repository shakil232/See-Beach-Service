import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="">
                    <Image
                        width="40"
                        height="35"
                        src={logo}
                        alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-4" as={Link} to="/" active>Home</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/about" active>About</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/works" active>Works</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/blog" active>Blog</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/contact" active>Contact</Nav.Link>
                        <a className="ms-4 mt-2 text-decoration-none text-center btn-common resume-btn" target="_blank"
                            rel="noreferrer"
                            href="https://docs.google.com/document/d/1UNBDxLCk9MdVdtD3XjQKot2gl2LBz-uBryrdGRheQYM/edit?usp=sharing">
                            Resume
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;