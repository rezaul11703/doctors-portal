import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Service from "./Service";
import Treatment from "./Treatment";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    isLoading,
    error,
    data: allServices,
    refetch,
  } = useQuery(["repoData", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  // useEffect(() => {
  //   // fetch(`http://localhost:5000/available?date=${formattedDate}`)
  // //     .then((res) => res.json())
  // //     .then((data) => setServices(data));
  // // }, [formattedDate]);
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
        {allServices?.map((service) => (
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
          refetch={refetch}
        >
          {" "}
        </Treatment>
      )}
    </div>
  );
};

export default AvailableAppointment;
