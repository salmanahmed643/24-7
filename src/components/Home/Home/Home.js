import React from 'react';
import Banner from '../Banner/Banner';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <OurDoctors></OurDoctors>
        </>
    );
};

export default Home;