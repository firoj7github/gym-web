import React from 'react';

const View = ({man}) => {
   const {email, role}=man||{};
   
   const makeAdmin=()=>{
    console.log(email);
     fetch(`http://localhost:5000/user/admin?email=${email}` ,{
       method:'PUT',
       headers:{
         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
       }
      
     })
     .then(res=>res.json())
     .then(data=> console.log(data))
   }
    return (
      <tr>
               
                
                
      <td>{email}</td>
      <td>{role !=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default View;