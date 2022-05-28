import React from 'react';
import img from '../../image/97=8=2021.jpg'

const MyProtfolio = () => {
    return (
        <div className='grid grid-cols-2 '>
            <div> <img src={img} alt=""></img></div>
            <div className='pt-10 text-2xl'>
                <h1 className='font-bold'>Md. Firoj Hossain</h1>
                <h1 className='font-800'>Bsc In Computer Science Engineering</h1>
                <h2>Graphics & Web Developer</h2>
                <h2>Email : fkfiroj02@gmail.com</h2>
                <h2 className='font-bold'>Skills :</h2>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Bootstrap5</li>
                <li>React js</li>
                <li>Angular Js</li>
                <li>Express Js</li>
                <li>Node Js</li>
                <h1 className='font-bold'>Live Website Link :</h1>
                <p>Link1: </p>
                <p>Link1: </p>
                <p>Link1: </p>
            </div>
           
        </div>
    );
};

export default MyProtfolio;