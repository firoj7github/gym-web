import React, { useEffect, useState } from 'react';
import View from './View/View';

const MyAppionment = () => {
    const [orders, setOrder]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/booking', {
          method:'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    return (
        <div>
            <h2 className='text-center pt-5 text-2xl pb-5 font-bold'>My Order</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Service Name</th>
      </tr>
    </thead>
    <tbody>
       
            
    <tr>
                <th>Firoj Hossain</th>
                
                <td>fkfiroj02@gmail.com</td>
                <td>01781129819</td>
                <td>Gym</td>
              </tr>
 
     
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppionment;