import React from 'react';
import './Side.css'
import icon from '../../../image/Rectangle-20.png'
import icon1 from '../../../image/Rectangle-21-1.png'


const Side = () => {
    return (
        <div className='side-all'>
          <div className='side-clip'>
          <h3>Grow Your Personality</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
          <br/>
          <br/>
          
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
          </div>
          <div className='side-img'>
          <img src={icon} alt="Gym"></img>
          <img src={icon1} alt="Gym"></img>
          </div>
       </div>
    );
};

export default Side;