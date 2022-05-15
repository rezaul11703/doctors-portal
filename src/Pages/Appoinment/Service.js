import React from 'react';
import  ButtonPrimary from '../Shared/ButtonPrimary'

const Service = ({service,setTreatment}) => {
  const {name, slots}= service
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
    <div class="card-body text-center">
      <h2 class="card-title ">{name}</h2>
       {  slots.length >0 ? <p> {slots[0]}</p>:
       <p className='text-red-200'>No space available</p>
        }
         <p> {slots.length} {slots.length>1? <span>spaces</span> : <span>space</span>}  available</p>
      <div class="card-actions justify-center">

        <label for="button-modeling" disabled={slots.length===0} onClick={()=>setTreatment(service)} class="btn btn-secondary modal-button">Book Appointment</label>
      </div>
    </div>
  </div>
  );
};

export default Service;