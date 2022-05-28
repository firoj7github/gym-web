import React from 'react';

const Footer = () => {
    return (
        <footer class="footer  p-10 bg-neutral text-neutral-content">
        <div className='ml-40'>
          <span class="footer-title">Services</span> 
          <a class="link link-hover">Lence</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span class="footer-title">Company</span> 
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div> 
        <div>
          <span class="footer-title">Views</span> 
          <a class="link link-hover">Our product</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;