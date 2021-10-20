import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useFirebase()
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home"> <h1 style={{display: "inline-block"}}>24</h1><h5 style={{display: "inline-block", fontWeight: "bolder"}}>/7</h5> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="main_menu ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services"> Services </Nav.Link>
                        <Nav.Link as={Link} to="/doctors"> Our Doctors </Nav.Link>
                        
                        {
                         user?.email &&
                            <span style={{color: 'whitesmoke'}}> {user.displayName} </span>
                         }

                        { user?.email ?
                            <button onClick={logOut}> Log out </button> 
                            :
                            <Nav.Link as={Link} to="/login" id="header_login"> Login </Nav.Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;