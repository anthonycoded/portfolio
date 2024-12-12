import React from 'react';
import business from '../../../assets/undraw_business.svg';
import cube from '../../../assets/solutions.svg';
import winners from '../../../assets/winners.svg';
import down from '../../../assets/down-arrow.svg';

const WhatIDo = () => {
  return (
    <div className="h-full w-full  bg-material-purple flex flex-col items-center p-4  ">
      <div className="w-full lg:w-5/6 xl:w-4/5 flex flex-col items-center">
        <p className="text-2xl text-left w-full font-bold mb-2">
          What I do is simple
        </p>

        <p className="text-white mb-4 w-full text-left">
          I create online solutions that empowers businesses to not only grow
          but also thrive in todays competitve world.
        </p>

        <div className="w-full h-full flex flex-col space-y-4  mt-4 md:flex-row md:items-center md:justify-evenly md:mt-16 md:space-y-0">
          <div className="flex  h-full justify-start items-center space-x-4">
            <p className="text-white text-lg font-semibold w-32">
              Create Custom Solutions
            </p>
            <img src={cube} alt="" className="h-24 md:h-20"></img>
          </div>
          <img
            src={down}
            alt=""
            className="h-12 md:transform md:-rotate-90"
          ></img>
          <div className="flex items-center justify-end  h-full space-x-4">
            <p className="text-white text-lg font-semibold w-32">
              Empower your business to grow
            </p>
            <img src={business} alt="" className="h-24 md:h-20"></img>
          </div>
          <img src={down} alt="" className="h-12 md:-rotate-90"></img>
          <div className="flex justify-start items-center space-x-4  h-full">
            <p className="text-white text-lg font-semibold w-32">
              Compete and succeed!
            </p>
            <img src={winners} alt="" className="h-24 md:h-20"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
