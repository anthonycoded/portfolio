import React from "react";
import business from "../../../assets/undraw_business.svg";
import cube from "../../../assets/solutions.svg";
import winners from "../../../assets/winners.svg";
import down from "../../../assets/down-arrow.svg";

const WhatIDo = () => {
  return (
    <div className="h-full w-full bg-material-purple flex flex-col items-start p-4 md:px-24 py-6 lg:pb-32">
      <p className="text-2xl text-left w-full font-bold text-white">
        What I do is simple
      </p>

      <p className="text-white text-lg mb-4 w-full text-left">
        I create online solutions that empowers businesses to not only grow but
        also thrive in todays competitve world.
      </p>

      <div className="w-full h-full flex flex-col space-y-9 p-4 mt-8 md:flex-row md:items-center md:mt-32 md:space-y-0">
        <div className="flex w-full h-full justify-start items-center space-x-4">
          <p className="text-white text-xl font-semibold w-32">
            Create Custom Solutions
          </p>
          <img src={cube} alt="" className="h-24"></img>
        </div>
        <img src={down} alt="" className="h-12"></img>
        <div className="flex items-center justify-end w-full h-full space-x-4">
          <img src={business} alt="" className="h-24"></img>
          <p className="text-white text-xl font-semibold w-32">
            Empower your business to grow
          </p>
        </div>
        <img src={down} alt="" className="h-12"></img>
        <div className="flex justify-start items-center space-x-4 w-full h-full">
          <p className="text-white text-xl font-semibold w-32">
            Compete and succeed!
          </p>
          <img src={winners} alt="" className="h-24"></img>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
