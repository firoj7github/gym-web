import React from 'react';
import img from '../../../image/camera.png.gif'

const Side = () => {
    return (
        <div class="hero min-h-screen bg-base-200 p-5">
  <div class="hero-content flex-col lg:flex-row">
    <img src={img} class="max-w-lg rounded-lg shadow-2xl mr-20 ml-5" />
    <div>
      <h1 class="text-5xl font-bold">Best Lence Quality!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Side;