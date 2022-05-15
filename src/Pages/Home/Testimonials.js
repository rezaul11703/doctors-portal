import React from "react";
import quote from "../../assets/icons/quote.svg";
import peopleOne from "../../assets/images/people1.png";
import peopleTwo from "../../assets/images/people2.png";
import peopleThree from "../../assets/images/people3.png";
import Comments from "./Comments";

const Testimonials = () => {
  const peoples = [
    {
      _id: 1,
      name: "Douson",
      address: "California",
      img: peopleOne,
    },
    {
      _id: 2,
      name: "Macdonald",
      address: "Texus",
      img: peopleTwo,
    },
    {
      _id: 3,
      name: "Micheal",
      address: "Los Angelas",
      img: peopleThree,
    },
  ];
  return (
    <section className="pt-8">
      <div className="flex flex-cols justify-between">
        <div>
          <h2 className="text-primary font-bold text-xl">Testimonial</h2>
          <h2 className="text-3xl">What our patient says</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 ">
        {peoples.map((people) => (
          <Comments key={people._id} people={people}></Comments>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
