import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
        <Outlet></Outlet>
          {/* <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label> */}
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
            <li><Link to='/dashboard/myReview'>Sidebar Item 2</Link></li>
            
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;