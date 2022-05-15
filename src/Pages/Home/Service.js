import React from "react";

const Service = ({ img }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl p-8">
        <figure>
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
