import React from "react";
import Github from "../../../assets/github.png";
import twitter from "../../../assets/logos/twitter.png";

const Socials = () => {
  return (
    <div className="w-4/5 items-center flex justify-around ">
      <a href="https://github.com/anthonycoded" target="_blank">
        <img src={Github} className="h-12 mb-4 animate-pulse" alt=""></img>
      </a>
      <a href="https://github.com/anthonycoded" target="_blank">
        <img src={twitter} className="h-12 mb-4 animate-pulse" alt=""></img>
      </a>
    </div>
  );
};

export default Socials;
