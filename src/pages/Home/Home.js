import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero';
import Rating from './Rating/Rating';
import Service from './Service/Service';
import Side from './Side/Side';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Side></Side> 
          <Service></Service> 
          <Rating></Rating>
          <Hero></Hero>
        </div>
    );
};

export default Home;