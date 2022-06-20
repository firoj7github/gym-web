import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero';
import Rating from './Rating/Rating';
import Service from './Service/Service';
import Set from './Set/Set';
import Side from './Side/Side';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Side></Side> 
          <Set></Set>
          <Service></Service> 
        
        </div>
    );
};

export default Home;