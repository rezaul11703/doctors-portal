import React,{ useEffect, useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
  const [date, setDate] =useState(new Date())
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appoinment;