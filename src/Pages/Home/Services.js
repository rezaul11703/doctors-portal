import React from 'react';
import Service from './Service';
import firstOne from '../../assets/images/fluoride.png'
import SecondOne from '../../assets/images/cavity.png'
import ThirdOne from '../../assets/images/whitening.png'

const Services = () => {
  return (
    <div class='my-16'>
      <div>
      <h2 class=" text-center text-primary  font-bold text-2xl"> Our Services</h2>
      <h2 class=" text-center  text-5xl"> Services We Provided</h2>
      </div>
      <div class="grid sm: grid-cols-1 lg:grid-cols-3 gap-5 p-20">
      <Service img={firstOne}></Service>
      <Service img={SecondOne}></Service>
      <Service img={ThirdOne}></Service>
      </div>
    </div>
  );
};

export default Services;