import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import Treatment from "./Treatment";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-secondary  text-2xl text-center">
        {" "}
        Today's Appoinment on {format(date, "PP")}
      </h2>
      <h2 className="text-accent  text-xl text-center">
        {" "}
        Please Select a service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <Treatment
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        >
          {" "}
        </Treatment>
      )}
    </div>
  );
};

export default AvailableAppointment;
