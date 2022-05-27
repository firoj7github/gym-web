import React, { useEffect, useState } from 'react';

const MyReview = () => {
    const [mans,setMan]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
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
            mans.map(man=><tr>
               
                
                
                <td>{man.email}</td>
                <td><button class="btn btn-xs">Make Admin</button></td>
                <td><button class="btn btn-xs">Remove User</button></td>
              </tr>)
        }
     
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyReview;