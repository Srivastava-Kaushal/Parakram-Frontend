import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import AccCard from "../components/AccomodationCardComp/AccCard";
import transition from "../transition"

function Accomodation() {
  

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
 
  const CardDetails = [
    {
      title: "Platinum",
      discription: "discription of this package will be available soon",
      price: 2000,
    },
    {
      title: "Gold",
      discription: "discription of this package will be available soon",
      price: 2000,
    },
    {
      title: "Silver",
      discription: "discription of this package will be available soon",
      price: 2000,
    },
    {
      title: "Bronze",
      discription: "discription of this package will be available soon",
      price: 2000,
    },
  ];
  return (
    <div className="flex justify-center items-center bg-black">
      <div className="my-20 grid sm:grid-cols-4 sm:gap-x-8 grid-cols-1 gap-y-4">
        {CardDetails.map((val, ind) => {
          return (
            <AccCard
              {...val}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
}

export default transition(Accomodation);
