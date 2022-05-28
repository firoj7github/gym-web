import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Reviews = () => {
    const [user] = useAuthState(auth);
    const [comment, setComment]=useState('');
    const [reviews, setReview]=useState('');

    const [views, setView]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=> setView(data))
    },[])
    const handleComment=event=>{
        event.preventDefault();
        const comment=event.target.value;
        setComment(comment);
    }
    const handleReview=event=>{
        event.preventDefault();
        const review=event.target.value;
        setReview(review);
    }
    const handleReviews =event=>{

    
        event.preventDefault();
           
        const review ={
        
          userComment:comment,
          userReview:reviews
        }
        fetch('http://localhost:5000/review',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify(review)
})
.then(res=>res.json())
.then(data=>{console.log(data)

   
      

})
    }
    console.log(views);
    return (
        <div>
            <div class="overflow-x-auto"></div>
            <table class="table w-1/2 mb-20 ml-96">

<thead>
      <tr>
        
       
        <th>User Comment</th>
        <th>User Review</th>
        
      </tr>
    </thead>
    <tbody>
        {
            views.map(review=><tr>
               
                
               
                <td>{review.userComment}</td>
                <td>{review.userReview}</td>
              </tr>)
        }
        </tbody>
        </table>


            <div className='bg-gray-500 w-1/2 ml-80 rounded pt-5 h-64 mb-40'>
            <form onSubmit={handleReviews} className='grid grid-cols-1 gap-3 justify-center ml-44 mb-20 mt-8 '>
            
    
           <input onChange={handleComment}  type="text" name='comment' placeholder="comment here" class="input w-full max-w-xs" />
           <input onChange={handleReview} type="text" name='review' placeholder="review " class="input w-full max-w-xs" />
           <input type="submit" value='submit' class="btn btn-primary w-full max-w-xs" />
                   </form>
            </div>
          
  
        </div>
    );
};

export default Reviews;