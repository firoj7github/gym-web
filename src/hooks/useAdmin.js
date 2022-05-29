import { useEffect, useState } from "react";


const useAdmin = user => {
    const [admin, setAdmin]=useState(false);
    useEffect(()=>{
        const email=user?.email;
        console.log(email);
        if(email){
            fetch(`http://localhost:5000/admin/${email}` ,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
               
            })
            .then(res=>res.json())
            .then(data=>{
             console.log('ok', data)
             const accessToken=data.token;
             
             localStorage.setItem('accessToken', accessToken);
             setAdmin(data.admin);
         
            }
          
             )
        }

    },[user?.email])
    return [admin]
};

export default useAdmin;