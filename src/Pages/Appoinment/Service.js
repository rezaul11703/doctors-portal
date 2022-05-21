import React from "react";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Service = ({ service, setTreatment }) => {
  const { _id, name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title ">{name}</h2>
        {slots.length > 0 ? (
          <p> {slots[0]}</p>
        ) : (
          <p className="text-red-200">No space available</p>
        )}
        <p>
          {" "}
          {slots.length}
          <span>space available</span>
        </p>
        <div className="card-actions justify-center">
          <label
            for="button-modeling"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
