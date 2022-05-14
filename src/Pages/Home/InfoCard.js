import React from 'react';

const InfoCard = ({img, bgColor,title}) => {
  return (
      <div class={`card lg:card-side ${bgColor} shadow-xl`}>
  <figure class="m-8">
    <img src={img}  alt="Album"/>
    </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  
  </div>
</div>
  );
};

export default InfoCard;