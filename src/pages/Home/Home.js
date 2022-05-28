import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Side from './Side/Side';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Side></Side> 
          <Service></Service> 
        </div>
    );
};

export default Home;