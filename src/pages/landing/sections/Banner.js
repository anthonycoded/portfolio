import React from "react";
import avatar from "../../../assets/avatar.jpg";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      id="jumbotron"
      className="flex flex-col lg:flex-row w-full h-full items-center lg:py-24 "
    >
      <div className="flex flex-col w-full h-full items-center mb-4">
        <TypeAnimation
          sequence={[
            "Hello You", // Types 'One'
            2000, // Waits 1s
            "Hello AI Bots", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "Hello World", // Types 'Three' without deleting 'Two'
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={0.7}
          className={
            "font-bold text-2xl md:text-3xl lg:text-4xl text-black text-center mt-7 capitalize"
          }
        />
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
