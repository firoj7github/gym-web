import React from 'react';
import './Side.css'
import icon from '../../../image/Rectangle-20.png'
import icon1 from '../../../image/Rectangle-21-1.png'


const Side = () => {
    return (
        <div className='side-all'>
          <div className='side-clip'>

          </div>
          <div className='side-img'>
          <img src={icon} alt="Gym"></img>
          <img src={icon1} alt="Gym"></img>
          </div>
       </div>
    );
};

export default Side;