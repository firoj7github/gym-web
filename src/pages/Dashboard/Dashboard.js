import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin]=useAdmin(user);
    return (
      
        <div class="drawer drawer-mobile ">
        
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col pt-10px ">
  <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-gray-400 text-base-content">
    <li><Link to='/dashboard' className='text-lg font-bold text-primary'>My Order</Link></li>
    { !admin && <li><Link to='/dashboard/addReview' className='text-lg font-bold text-primary'>Add A Review</Link></li>}
   { admin && <li><Link to='/dashboard/myReview' className='text-lg font-bold text-primary'>All User</Link></li>}
      
    </ul>
  
  </div>
</div>
     
    );
};

export default Dashboard;