import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Card = () => {
  return (
   <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-6 py-20">
     <InfoCard title="Opening hours" bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
     <InfoCard title="Our Location" bgColor="bg-accent" img={location}></InfoCard>
     <InfoCard title="Contact Info" bgColor="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
</div>
  );
};

export default Card;