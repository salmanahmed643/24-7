import Button from '@restart/ui/esm/Button';
import React from 'react';
import banner from '../../../images/01.png';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div style={{backgroundColor: "#F0F0F0"}} className="text-center p-5">
                <div>
                    <h3 className="find_Drugs"> <span className="draugs"> Find Drugs </span>  <span className="conditions"> & Conditions </span> </h3>
                    <br />
                    <div className="mt-4">
                        <input  className="search_input" type="search" name="search" placeholder="Search" />
                        <Button className="search_button"> Search </Button>
                    </div>
                </div> 
                <br />
                <img className="w-50 text-center" src={banner} alt="" />
            </div>
        </>
    );
};

export default Banner;