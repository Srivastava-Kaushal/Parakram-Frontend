import logo from "../assets/logo-svg.svg";
import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div className="h-[350px] grid grid-cols-2">
        <div className="flex justify-center items-center">
          <img height={100} src={logo} />
        </div>
        <div className=" grid grid-row-2 items-center text-center">
          <div className="text-4xl font-mono font-bold">404</div>
          <div className="text-center">
            <div className="text-indigo-600 font-mono font-extrabold">Invalid Route Request !!!</div>
            <ul className="font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/merchandise" className="hover:underline">
                  Merchandise
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/sponsors" className="hover:underline">
                  Sponsors
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/accomodation" className="hover:underline">
                  Accomodation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default NoPage;
