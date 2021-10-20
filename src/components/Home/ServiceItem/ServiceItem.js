import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceItem = (props) => {
    const {serviceItem} = useParams();
    const [service, setService] = useState({});
    const {name, description, img} = service;

    useEffect( () => {
        fetch(`/services.json/${serviceItem}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    return (
        <div>
            <h1> {name} {serviceItem} </h1>
            <p> {description} </p>
            <img src={img} alt="" />
        </div>
    );
};

export default ServiceItem;