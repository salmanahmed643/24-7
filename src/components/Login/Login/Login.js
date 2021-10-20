import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import loginImg from '../../../images/02.png'
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {handleGoogleSignIn} = useFirebase()
    return (
        <>
           <Container className="my-5">
               <Row xs={1} md={2} className="gy-5 align-items-center">
                   <Col className="custom_form">
                        <div className="text-center mb-5">
                            <h3> Login </h3>
                        </div>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control className="custom_email" type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control className="custom_password" type="password" placeholder="Password" />
                        </FloatingLabel>

                        <div className="mt-3">
                            <p> Create New Account <Link to="/register"> Register </Link> </p>
                        </div>
                        <div className="login_button text-center">
                            <Button>
                                Login
                            </Button>
                        </div>
                        <div>
                            <div  className="login_button text-center mt-3">
                                <Button onClick={handleGoogleSignIn}>
                                    Google Sign In
                                </Button>
                            </div>
                        </div>
                    </Col>
                   <Col>
                        <img style={{borderRadius: "20px"}} className="w-100" src={loginImg} alt="" />
                   </Col>
               </Row>
           </Container>
        </> 
    );
};

export default Login;