import React, { useEffect, useState } from 'react';
import Manage from './Manage';

const ManageOrder = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/service')
       .then(res=>res.json())
       .then(data=>setService(data))
    },[])
    return (
        <div className='service-all grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20'>
        {
            services.map(service=> <Manage service={service}></Manage>
           )
        } 
     </div>
    );
};

export default ManageOrder;