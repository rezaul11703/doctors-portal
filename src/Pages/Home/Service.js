import React from 'react';

const Service = ({img}) => {
  return (
    <div>
      <div class="card  bg-base-100 shadow-xl p-8">
  <figure>
    <img src={img}alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
    </div>
  );
};

export default Service;