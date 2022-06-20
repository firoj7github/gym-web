import React from 'react';
import './Banner.css'
import img from '../../../image/be935ad23c369810c887909855bbc847.png'

const Banner = () => {
    return (
        <div className='banner-all'>
            <div className='banner-1'>
            <h1>Boost Your Power </h1>
          
            <p>Our spacious and light fitness suites have dedicated areas for cardio, fixed weights, free weights, functional training, plate-loaded machines, lifting racks and cable motion.</p>
            <button className='banner-btn'>Read More</button>
            </div>
            <div className='banner-2'>
            <img src={img} alt="Gym"></img>
            </div>
        </div>
    );
};

export default Banner;