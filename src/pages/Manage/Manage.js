import React, { useEffect, useState } from 'react';

const Manage = ({service}) => {
    const { name, price, description, availablequantity, img, minimumorderquantity}=service;
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => setServices(data));
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
            setServices(remaing);
        })
        }
    }
    
    return (
        <div className='border p-2'>
           <img src={img}></img>
           <h2 className='font-bold text-2xl pt-2'>{name}</h2>
           <p>Price : {price}</p>
           <p>{description}</p>
           <p>Available Quantity : {availablequantity}</p>
           <p>Minimum Order Quantity : {minimumorderquantity}</p>
           <button className='bg-primary text-white' onClick={()=>handleDelete(service._id)}>Delete</button>
           </div>
    );
};

export default Manage;