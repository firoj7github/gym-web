import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PurchaseProduct from '../PurchaseProduct/PurchaseProduct';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [phone, setPhone]=useState('');
    
    const [product, setProduct]=useState('');

    const handleProduct=event=>{
        event.preventDefault();
        const productName=event.target.value;
        setProduct(productName);
    }
    const handlePhone=event=>{
        event.preventDefault();
        const phoneNumber=event.target.value;
        setPhone( phoneNumber);
    }
    const handleBooking=event=>{
        event.preventDefault();
       
          const booking ={
          userEmail:user.email,
          userName :user.displayName,
          phoneNumber :phone,
          productName :product
    }
     console.log(booking.phoneNamber);
    fetch('http://localhost:5000/booking',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{console.log(data)

    if(data.success){
        toast('Booking Done')
      }
      

})
}

    
    return (
        <div className=''>
            
                 <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center ml-96 '>
           <input type="text" disabled name='name' value={user?.displayName || ''}   class="input w-full max-w-xs" />
    <input type="email" disabled name='email' value={user?.email || ''}  class="input w-full max-w-xs" />
    <input onChange={handlePhone} type="text" name='phone' placeholder="phone number" class="input w-full max-w-xs" />
    <input onChange={handleProduct} type="text" name='productName' placeholder="Product Name " class="input w-full max-w-xs" />
    <input type="submit" value='submit' class="btn btn-primary w-full max-w-xs" />
            </form>



                
          
            
        </div>
    );
};

export default Purchase;