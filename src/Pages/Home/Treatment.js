import React from "react";
import treatment from "../../assets/images/treatment.png";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Treatment = () => {
  return (
    <div className="  hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          {" "}
          <img src={treatment} className="max-w-sm  rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPrimary> Get Started</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
