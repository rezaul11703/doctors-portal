import React from "react";
import { format } from "date-fns";

const Treatment = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="button-modeling" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="button-modeling"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center text-primary">{name}</h3>
          <form onSubmit={handleForm}>
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="select"
              className="input input-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option key={slot._id}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="number"
              placeholder="Enter your Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="input input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
