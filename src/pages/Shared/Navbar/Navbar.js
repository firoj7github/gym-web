import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navbar.css'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
    const menuItem= <>
    
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/purchase'>Purchase</Link></li>
    <li><Link to='addItem'>Add A Product</Link></li>
    <li><Link to='manageOrder'>Manage All Order</Link></li>
  
    <li><Link to='/reviews'>Reviews</Link></li>
    
    {
      user && <li><Link to='/dashboard'>Dashboard</Link></li>
    }
  <li>{
    user?<button onClick={logout}>Signout</button>:<Link to='/login'>Login</Link>}</li>
    
    </>
    return (
        <div class="navbar bg-zinc-600 text-white text-lg nav-all">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">My Lence</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {menuItem}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;