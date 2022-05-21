import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [myappintment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  return (
    <div>
      <h2> This is my My appoinment: {myappintment.length}</h2>
      {console.log(myappintment)}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th> SL</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment Name</th>
            </tr>
          </thead>

          {myappintment.map((appoinment, index) => (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.date}</td>
                <td>{appoinment.slot}</td>
                <td>{appoinment.treatmentName}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
