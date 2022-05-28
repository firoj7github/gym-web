import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
  console.log(data);
  const url='http://localhost:5000/service';
  fetch(url, {
      method : 'POST',
      headers : {
         'content-type': 'application/json'
      },
      body : JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(result=>{
      console.log(result)
  })
  }
    return (
        <div>
           <h1 className='text-center mb-10 font-bold text-4xl pt-10'>Please Add A Item</h1>
           <div className='h-96 bg-gray-500 mb-24 w-1/2 ml-80 rounded'>
           <form className='pt-10 p-5 mb-32 pl-64' onSubmit={handleSubmit(onSubmit)}>
      <input className='rounded' placeholder='name' {...register("name")} />
      <br/>
      <br/>
      
      <input className='rounded' placeholder='description' {...register("description")} />
      <br/>
      <br/>
      <input className='rounded' placeholder='price' type="number" {...register("price")} />
      <br/>
      <br/>
      <input className='rounded' placeholder='Available quantity' type="number" {...register("availablequantity")} />
      <br/>
      <br/>
      <input className='rounded' placeholder='minimum order quantity quantity' type="number" {...register("miniumorderquanti")} />
      <br/>
      <br/>
      <input className='rounded' placeholder='photo url' type="text" {...register("img")} />
      <br/>
      
      <br/>
      <button type="submit" value="Add Item" class="btn btn-active btn-secondary pr-10 pl-10">Submit</button>
      
    </form></div> 
           
        </div>
    );
};


export default AddItem;