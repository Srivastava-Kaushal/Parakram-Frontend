import React from "react";
import "../components/Teams/Teams.css";
import { Teampage } from "../components/Teams/Teampage";

function Team() {
  return (
    <div className="bg-[#1c100c]">
      <h1 className="pt-10 flex justify-center mb-8 text-4xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
        Core Team
      </h1>
      <hr />
      <Teampage />
    </div>
  );
}

export default Team;
