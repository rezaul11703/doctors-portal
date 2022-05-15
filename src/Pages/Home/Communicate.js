import React from "react";
import ButtonPrimary from "../Shared/ButtonPrimary";
const Communicate = () => {
  return (
    <div className="hero-content bg-[url('/src/assets/images/appointment.png')]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-[380px] lg:w-[480px] lg:flex-row-reverse">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control h-24">
              <textarea
                type="text"
                placeholder="Your Message"
                className="input input-bordered "
              />
            </div>
            <div className="mx-auto">
              <ButtonPrimary> Sign up </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communicate;
