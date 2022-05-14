import React from 'react';

const Comments = ({ people }) => {
  const { name, address, img } = people
  return (
    <div>
      <div class=" grid grid-rows-1  gap-8  card-side bg-base-100 shadow-xl">
        <div>
          <h2 class="card-title">New album is released!</h2>
        </div>
        <div class="flex flex-cols items-center">
          <figure><img src={img} alt="Movie" /></figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{address}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Comments;