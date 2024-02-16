import React from "react";
import { Teampage } from "../components/Teams/Teampage";

function Team() {
  return (
    <div className="bg-[#1c100c]">
      <h1 className="pt-20 flex justify-center mb-8 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
        Teams
      </h1>
      <hr />
      <Teampage />
    </div>
  );
}

export default Team;
