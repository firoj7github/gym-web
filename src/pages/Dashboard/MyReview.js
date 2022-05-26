import React, { useEffect, useState } from 'react';
import View from './View/View';

const MyReview = () => {
    const [mans,setMan]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user', {
          method:'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=> setMan(data))
    },[])
    return (
        <div>
            <h2 className='text-center pt-5 text-2xl pb-5 font-bold'>My Order</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        
       
        <th>Email</th>
        <th>Actor</th>
        <th>Control</th>
      </tr>
    </thead>
    <tbody>
        {
            mans.map(man=> <View man={man}></View>)
        }
     
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyReview;