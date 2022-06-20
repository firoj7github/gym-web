import React, { useEffect, useState } from 'react';
import Purchase from '../../Purchase/Purchase';
import Item from '../Item/Item';
import './Service.css'
import logo from '../../../image/Rectangle-24-5.png'
import logo1 from '../../../image/Rectangle-24-9.png'
import logo2 from '../../../image/Rectangle-24-10.png'
import logo3 from '../../../image/Rectangle-24-8.png'
import logo4 from '../../../image/Rectangle-24-6.png'
import logo5 from '../../../image/Rectangle-24-7.png'

const Service = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/service')
       .then(res=>res.json())
       .then(data=>setService(data))
    },[])
    return (
        <div className='service-all'>
           <h2>Best Services For You</h2>
            <div className='services'>
                <div className='service-1'>
                <img src={logo} alt="Gym"></img>
                <h1>How to start your daily yoga?</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <button className='service-btn'>Booking</button>
                </div>
                <div className='service-2'>
                <img src={logo1} alt="Gym"></img>
                <h1>How to start your daily yoga?</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <button className='service-btn'>Booking</button>
                </div>
                <div className='service-3'>
                <img src={logo2} alt="Gym"></img>
                <h1>How to start your daily yoga?</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <button className='service-btn'>Booking</button>
                </div>
                <div className='service-4'>
                <img src={logo3} alt="Gym"></img>
                <h1>How to start your daily yoga?</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <button className='service-btn'>Booking</button>
                </div>
                <div className='service-5'>
                <img src={logo4} alt="Gym"></img>
                <h1>How to start your daily yoga?</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <button className='service-btn'>Booking</button>
                </div>
                <div className='service-6'>
                <img src={logo5} alt="Gym"></img>
                <h1>How to start your daily yoga?</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <button className='service-btn'>Booking</button>
                </div>
           
            </div>
            
            
        </div>
        
    );
};

export default Service;