import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const SectionAppoint = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col  lg:flex-row bg-[url('/src/assets/images/appointment.png')]">
    <img src={doctor} class="max-w-lg rounded-lg shadow-2xl mt-[-150px] hidden lg:block " />
    <div className='pr-40'>
      <h1 class="text-2xl text-primary font-bold">Appoinment</h1>
      <h1 class="text-4xl text-white ">Make an Appoinment today</h1>
      <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <ButtonPrimary> Get Started</ButtonPrimary>
    </div>
  </div>
</div>
  );
};

export default SectionAppoint;