import React, { useEffect, useState } from 'react';
import Manage from './Manage';

const ManageOrder = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/service')
       .then(res=>res.json())
       .then(data=>setService(data))
    },[])
    const handleDelete = id=>{
        const proceed = window.confirm('Are You sure???');
        if(proceed){
        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
        method : 'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            const remaing = services.filter(service=> service._id !== id);
            setService(remaing);
        })
        }
    }
    return (
        <div className='service-all grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20'>
        {
              services.map(service=> 
                <div className='border p-2'>
           <img src={service.img}></img>
           <h2 className='font-bold text-2xl pt-2'>{service.name}</h2>
           <p>Price : {service.price}</p>
           <p>{service.description}</p>
           <p>Available Quantity : {service.availablequantity}</p>
           <p>Minimum Order Quantity : {service.minimumorderquantity}</p>
           <button className='bg-primary text-white' onClick={()=>handleDelete(service._id)}>Delete</button>
           </div>
              )
          }
     </div>
    );
};

export default ManageOrder;