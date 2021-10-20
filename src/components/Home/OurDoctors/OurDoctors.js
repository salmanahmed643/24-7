import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import OurDoctor from '../OurDoctor/OurDoctor';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);


    useEffect( () => {
        fetch('/ourdoctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <div className="p-5" style={{backgroundColor: "#F0F0F0"}}>
                <Container className="my-5">
                    <div className="my-5 text-center">
                        <h1 style={{color: "#FF725E"}} className="text-decoration-underline"> Our Doctors </h1>
                    </div>
                    <Row xs={1} md={3} lg={4} className="g-4 justify-content-center">
                        { 
                            doctors.map(doctor => <OurDoctor
                                doctor={doctor}
                            ></OurDoctor>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default OurDoctors;