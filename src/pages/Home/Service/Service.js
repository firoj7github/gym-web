import React, { useEffect, useState } from 'react';
import Purchase from '../../Purchase/Purchase';
import Item from '../Item/Item';
import './Service.css'

const Service = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/service')
       .then(res=>res.json())
       .then(data=>setService(data))
    },[])
    return (
        <div className='service-all grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20'>
           {
               services.slice(0,3).map(service=> <Item service={service}></Item>
              )
           } 
        </div>
    );
};

export default Service;