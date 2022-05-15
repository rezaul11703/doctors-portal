import React from "react";
import chair from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
