import React from "react";
import avatar from "../../../assets/avatar.jpg";

const Banner = () => {
  return (
    <div
      id="jumbotron"
      className="flex flex-col lg:flex-row w-full h-full items-center lg:py-24 "
    >
      <div className="flex flex-col w-full h-full items-center">
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-black text-center mt-7 capitalize">
          Hello World,
        </p>
        <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-gray-700 text-center capitalize ">
          my name is
          <span className="text-material-blue"> Shawn</span> barbel
        </p>
      </div>
      <img
        src={avatar}
        alt=""
        className="rounded-full h-48 w-48 mb-4 shadow-lg"
      ></img>

      <div className="h-full w-full flex flex-col items-center justify-center ">
        <div className="h-full flex flex-col justify-center items-center lg:mt-14">
          <p className="text-2xl md:text-3xl lg:text-4xl  font-bold text-material-purple">
            Solution Creator
          </p>
          <p className="text-xl md:text-2xl lg:text-3xltext-gray-500 font-medium mb-4 lg:text-left">
            Software Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
