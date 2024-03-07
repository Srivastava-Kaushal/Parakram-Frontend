import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import AccCard from "../components/AccomodationCardComp/AccCard";
import transition from "../transition";

const AccomodationPage = () => {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);

  const CardDetails = [
    {
      title: "option 1",
      modalDisc:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1949/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Three meals per day for three days (Breakfast, Lunch and Dinner) Accommodation inside campus (For 3 days) Transportation to and fro the Railway station to IIT-ISM Campus An attractive welcome kit for each participant. Pro Nights ( EDM night, Band night etc) Refreshments in between the matches Merchandise(Jacket) ",
      discription:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1949/- (Non-Refundable)",
      price: 1949,
    },
    {
      title: "option 2",
      modalDisc:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1549/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Three meals per day for three days (Breakfast, Lunch and Dinner) Accommodation inside campus (For 3 days) Transportation to and fro the Railway station to IIT-ISM Campus An attractive welcome kit for each participant. Pro Nights (EDM night, Band night etc) Refreshments in between the matches Merchandise(T-Shirt) ",
      discription:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1549/- (Non-Refundable)",
      price: 1549,
    },
    {
      title: "option 3",
      modalDisc:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1199/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Three meals per day for three days (Breakfast, Lunch and Dinner) Accommodation inside campus (For 3 days) Transportation to and fro the Railway station to IIT ISM Campus An attractive welcome kit for each participant. Pro Nights (EDM night, Band Night etc) Refreshments in between the matches",
      discription:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1199/- (Non-Refundable)",
      price: 1199,
    },
    {
      title: "option 4",
      modalDisc:
        "For those who don‘t want to stay in the IIT-ISM campus A registration fee of Rs. 1299/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees An attractive welcome kit for each participant. Pro Nights (EDM night, Band Night etc) Refreshments in between the matches Merchandise(Jacket) ",
      discription:
        "For those who don‘t want to stay in the IIT-ISM campus A registration fee of Rs. 1299/- (Non-Refundable)",
      price: 1299,
    },
    {
      title: "option 5",
      modalDisc:
        "For those who doesn't want to stay in the IIT-ISM campus A registration fee of Rs. 899/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees An attractive welcome kit for each participant. Pro Nights (EDM night, Band Night etc) Refreshments in between the matches Merchandise(T-shirt) ",
      discription:
        "For those who doesn't want to stay in the IIT-ISM campus A registration fee of Rs. 899/- (Non-Refundable)",
      price: 899,
    },
    {
      title: "option 6",
      modalDisc:
        "For those who don’t want to stay in the IIT-ISM campus A registration fee of Rs. 399/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Pro Nights (EDM night, Band Night etc) Refreshments in between the matches",
      discription:
        "For those who don’t want to stay in the IIT-ISM campus A registration fee of Rs. 399/- (Non-Refundable)",
      price: 399,
    },
  ];

  return (
    <div className="flex justify-center items-center bg-black">
      <div className="my-20 grid sm:grid-cols-3 sm:gap-x-8 grid-cols-1  gap-y-4">
        {CardDetails.map((val, ind) => {
          return <AccCard {...val} key={ind} />;
        })}
      </div>
    </div>
  );
};

const Accomodation = transition(AccomodationPage);
export default Accomodation;
