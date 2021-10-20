import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="text-center my-5 py-5">
                <Navbar.Brand as={Link} to="/home"> <h1 className="fw-bold" style={{display: "inline-block"}}>24</h1><h5 style={{display: "inline-block", fontWeight: "bolder"}}>/7</h5> </Navbar.Brand>
                <Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="main_menu m-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services"> Services </Nav.Link>
                            <Nav.Link as={Link} to="/doctors"> Our Doctors </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="text-center">
                    <h5 className="fw-bold"> Stay in Touch </h5>
                    <div className="social_icon text-center">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Footer;