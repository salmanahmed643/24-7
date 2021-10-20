import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect( () => {
        fetch("/services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <>

            <Container className="my-5">
                <div className="my-5 text-center">
                    <h1 style={{color: "#FF725E"}} className="text-decoration-underline"> Our Urgent Care Services </h1>
                </div>
                <CardGroup>
                    <Row className="g-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </CardGroup>
            </Container>
        </>
    );
};

export default Services;




