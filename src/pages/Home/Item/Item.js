import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({service}) => {
    const {_id, name, price, description, availablequantity, img, minimumorderquantity}=service;
    
    return (
        <div className='border p-2'>
           <img src={img}></img>
           <h2 className='font-bold text-2xl pt-2'>{name}</h2>
           <p>Price : {price}</p>
           <p>{description}</p>
           <p>Available Quantity : {availablequantity}</p>
           <p>Minimum Order Quantity : {minimumorderquantity}</p>
           <button  class="btn btn-accent pl-10 pr-10 mt-5 text-lg text-gray"><Link to='/purchase'>Order</Link></button>

        </div>
    );
};

export default Item;