import React from 'react';
import './Set.css'
import {CgGym} from 'react-icons/cg';
import {SiOpenaigym} from 'react-icons/si';
import {BiRun} from 'react-icons/bi';
import {BiLayer} from 'react-icons/bi';
import {BiMagnet} from 'react-icons/bi';


const Set = () => {
    return (
        <div className='set-all'>
            
            <h4>Best Option For Your choice</h4>
            <div className='set'>
            <div className='set-1'>
                <h1 className='icon-style'><CgGym></CgGym></h1>
                <h2>Yoga</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
            </div>
            <div className='set-2'>
            <h1 className='icon-style'><SiOpenaigym></SiOpenaigym></h1>
            <h2>Kunst</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p> 
            </div>
            <div className='set-3'>
            <h1 className='icon-style'><BiRun></BiRun></h1>
            <h2>Excersize</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
            </div>
            </div>
            <div className='second-part'>
            <div className='set-4'>
            <h1 className='icon-style'><BiLayer></BiLayer></h1>
            <h2>Occko</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
            </div>
            <div className='set-4'>
            <h1 className='icon-style'><BiMagnet></BiMagnet></h1>
            <h2>Occko</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
            </div>
           
            
            </div>
           
            
        </div>
    );
};

export default Set;