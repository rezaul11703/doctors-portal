import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Banner from "./Banner";
import Card from "./Card";
import Communicate from "./Communicate";
import SectionAppoint from "./SectionAppoint";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Treatment from "./Treatment";

const Home = () => {
  const [user] = useAuthState(auth);
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
