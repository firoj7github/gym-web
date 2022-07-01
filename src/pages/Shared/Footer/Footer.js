import React from 'react';
import './Footer.css'
import './Footer.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-all'>
            <h5>Join our team for grow your fitness and healthy life </h5>
            <p>If you have any information, just let me know. If you do <span className='sample'>not, just relax and let me awe you with my work.</span> </p>
           
             
           
          <input className='field' type='email' placeholder='Your Email'></input>
          <button className='submit-btn'>Submit</button>
          <hr className='line-big'></hr>

          
              <div className='footer-site'>
              <div>
                  <h4>Gym Service @2022</h4>
                  
                </div>
                <div>
                <span className='logo'>
                <a href="https://www.linkedin.com/in/firoj-hossain-878765220/"><span className='icon-system-1'><FaLinkedin></FaLinkedin></span></a>
                <a href="https://github.com/firoj7github"><span className='icon-system-2'> <FaGithubSquare></FaGithubSquare> </span></a>
               
                <a href="https://www.w3schools.com"> <span className='icon-system-3'> <FaFacebook></FaFacebook> </span></a>
                
                    
                    
                     
                 
                
             
                
                </span>
               
                </div>
             
          </div>

        
              
        </div>
    );
};

export default Footer;