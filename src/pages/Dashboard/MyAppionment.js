import React, { useEffect, useState } from 'react';
import View from './View/View';

const MyAppionment = () => {
    const [orders, setOrder]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    return (
        <div>
            <h2 className='text-center pt-10 text-xl font-bold'>My Appionment</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Product Name</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map(order=><tr>
               
                <th>{order.userName}</th>
                
                <td>{order.userEmail}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.productName}</td>
              </tr>)
        }
     
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppionment;