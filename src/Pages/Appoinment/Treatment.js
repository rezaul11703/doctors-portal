import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const Treatment = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  console.log(user);
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const slot = event.target.select.value;
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.number.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(
            `Your Appointment Set successfully on ${formattedDate} at ${slot}`
          );
        } else {
          toast(
            `You have already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
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
              value={user.displayName}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <input
              type="email"
              name="email"
              value={user.email}
              className="input input-bordered w-full max-w-xs"
              disabled
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
