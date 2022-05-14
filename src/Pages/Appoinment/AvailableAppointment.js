import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
  return (
    <div>
      <h2 className='text-secondary  text-2xl text-center'> Today's Appoinment on {format(date,'PP')}</h2>
      <h2 className='text-accent  text-xl text-center'> Please Select a service</h2>
    </div>
  );
};

export default AvailableAppointment;