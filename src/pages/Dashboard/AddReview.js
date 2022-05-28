import React, { useState } from 'react';

const AddReview = () => {
    const [comment, setComment]=useState('');
    const [reviews, setReview]=useState('');
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
    return (
        <div className='bg-gray-500 w-1/2 ml-64 rounded pt-5 h-64 mb-40 mt-20'>
            <form onSubmit={handleReviews} className='grid grid-cols-1 gap-3 justify-center ml-20 mb-20 mt-8 '>
            
    
           <input onChange={handleComment}  type="text" name='comment' placeholder="comment here" class="input w-full max-w-xs" />
           <input onChange={handleReview} type="text" name='review' placeholder="review " class="input w-full max-w-xs" />
           <input type="submit" value='submit' class="btn btn-primary w-full max-w-xs" />
                   </form>
            </div>
    );
};

export default AddReview;