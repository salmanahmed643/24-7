import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name, description, img, id} = props.service;
    const url = `/services/${id}`;
    return (
        <>
            <Col lg={6}>
                <Card className="service_container overflow-hidden h-100">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <Card.Img className="custom_img" variant="top" src={img} />
                        </Col>
                        <Col lg={6} className="py-3">
                            <Card.Body className="text-center">
                                <Card.Title className="border p-2 rounded-3">{name}</Card.Title>
                                <Card.Text className="text-muted p-2">
                                    {description.slice(0, 200)}
                                </Card.Text>
                            </Card.Body>
                            <div className="text-center more_button">
                                <Link to={url}>
                                    <Button>
                                        More
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </>
    );
};

export default Service;