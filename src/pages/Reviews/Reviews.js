import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Reviews = () => {
    const [user] = useAuthState(auth);
    

    const [views, setView]=useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=> setView(data))
    },[])
    
    
    console.log(views);
    return (
        <div>
            <div class="overflow-x-auto"></div>
            <table class="table w-1/2 mb-20 ml-96">

<thead>
      <tr>
        
       
        <th>User Comment</th>
        <th>User Review</th>
        <th>User Email</th>
       
        
      </tr>
    </thead>
    <tbody>
        {
            views.map(review=><tr>
               
                
               
                <td>{review.userComment}</td>
                <td>{review.userReview}</td>
                <td>{review.userEmail}</td>
              </tr>)
        }
        </tbody>
        </table>


            
          
  
        </div>
    );
};

export default Reviews;