import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import registerImg from '../../../images/02.png'

const Register = () => {
    const {error} = useFirebase()
    const {handleRegister} = useFirebase();
    const {handleEmailChange} = useFirebase();
    const {handlePasswordChange} = useFirebase();
    const {handleGoogleSignIn} = useFirebase()
    return (
        <>
           <Container className="my-5">
               <Row xs={1} md={2} className="gy-5 align-items-center">
                   <Col className="custom_form">


                        <div className="text-center mb-5">
                            <h3> Register </h3>
                        </div>

                        <form onSubmit={handleRegister}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control onBlur={handleEmailChange} className="custom_email" type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control onBlur={handlePasswordChange} className="custom_password" type="password" placeholder="Password" />
                            </FloatingLabel>

                            <div className="mt-3">
                                <p> Already Login? <Link to="/login"> Login </Link> </p>
                            </div>
                            <div className="login_button text-center">
                                <Button type="submit">
                                    Register
                                </Button>
                            </div>
                            <p> {error} </p>
                            <div>
                                <div  className="login_button text-center">
                                    <Button onClick={handleGoogleSignIn}>
                                        Google Sign In
                                    </Button>
                                </div>
                            </div>
                        </form>

                    </Col>
                   
                    <Col>
                        <img style={{borderRadius: "20px"}} className="w-100" src={registerImg} alt="" />
                   </Col>
               </Row>
           </Container>
        </>
    );
};

export default Register;






/* 
<FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control onBlur={handleEmailChange} className="custom_email" type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control onBlur={handlePasswordChange} className="custom_password" type="password" placeholder="Password" />
                        </FloatingLabel>

                        <div className="mt-3">
                            <p> Already Login? <Link to="/login"> Login </Link> </p>
                        </div>
                        <div className="login_button text-center">
                            <Button>
                                Register
                            </Button>
                        </div>

*/