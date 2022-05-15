import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import Communicate from "./Communicate";
import SectionAppoint from "./SectionAppoint";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className="mx-[26px]">
      <Banner></Banner>
      <Card></Card>
      <Services></Services>
      <Treatment></Treatment>
      <SectionAppoint></SectionAppoint>
      <Testimonials></Testimonials>
      <Communicate></Communicate>
    </div>
  );
};

export default Home;
