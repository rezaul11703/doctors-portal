import React from 'react';
import ButtonPrimary from '../Shared/ButtonPrimary';
const Communicate = () => {
  return (
    <div class="hero-content bg-[url('/src/assets/images/appointment.png')]">
      <div class="hero min-h-screen">
  <div class="hero-content flex-col w-[380px] lg:w-[480px] lg:flex-row-reverse">
      <div class="card-body">
        <div class="form-control">
          <input type="text" placeholder="Your Email" class="input input-bordered" />
        </div>

        <div class="form-control">
          <input type="text" placeholder="Subject" class="input input-bordered" />
        </div>
        <div class="form-control h-24">
          <textarea type="text" placeholder="Your Message" class="input input-bordered " />
        </div>
        <div class="mx-auto"> 
      <ButtonPrimary> Sign up </ButtonPrimary>
      </div>
      
      </div>
    
  </div>
</div>
    </div>
  );
};

export default Communicate;