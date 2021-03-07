import React from "react";
import avatar from "../assets/avatar.jpg";

const LandingPage = () => {
  return (
    <div className=" flex flex-col justify-center p-8 items-center">
      <p className="font-bold text-4xl text-black mb-4 text-center p-8 mt-4 capitalize">
        Hello World, my name is <br></br>{" "}
        <span className="text-material-blue">Shawn</span> barbel
      </p>
      <div className=" flex flex-col items-center">
        <img src={avatar} alt="" className="rounded-full h-48 mb-8"></img>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold text-material-purple">
            Software Developer
          </p>
          <p className="text-xl text-gray-500 font-medium mb-4">Solution Creator</p>
          <p className="mb-2">Need help with your website?</p>
          <button className="rounded bg-material-blue w-20">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
