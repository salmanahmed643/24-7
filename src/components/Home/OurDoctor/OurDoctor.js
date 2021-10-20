import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './OurDoctor.css'

const OurDoctor = ({doctor}) => {
    const {name, img} = doctor
    return (
        <>
            <Col>
                <Card className="doctor_container overflow-hidden h-100">
                    <div className="text-center">
                        <Card.Img className="doctor_img" variant="top" src={img} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title className="text-decoration-underline">{name}</Card.Title>
                    </Card.Body>
                    <div>
                        <div className="social_icon text-center">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className="appointment_button text-center">
                        <Button>
                            Appointment
                        </Button>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default OurDoctor;