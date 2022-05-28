import React from 'react';
import icon from '../../image/c.png.gif'

const Hero = () => {
    return (
        <div class="hero w-full min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={icon} class="max-w-xl rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Exelent Feature!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;