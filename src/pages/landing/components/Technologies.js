import React, { useState } from "react";
import css from "../../../assets/css.svg";
import html from "../../../assets/html-5.svg";
import js from "../../../assets/javascript.svg";
import twcss from "../../../assets/tailwindcss-icon.svg";
import mui from "../../../assets/material-ui.svg";
import bootstrap from "../../../assets/Bootstrap_logo.svg";
import webpackcube from "../../../assets/webpackcube.svg";
import down from "../../../assets/down-arrow.svg";
import wavebg from "../../../assets/wavebg.svg";
import apple from "../../../assets/logos/apple.png";
import google from "../../../assets/logos/google.png";
import backend from "../../../assets/backend.png";
import tools from "../../../assets/tools.png";
import ui from "../../../assets/ui.png";

const Technologies = () => {
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow(!show);
  }
  return (
    <div
      className="h-full w-full pb-48 items-center flex flex-col"
      style={{
        backgroundImage: `url(${wavebg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="py-7 px-2 lg:py-32 md:px-32 items-center w-full flex flex-col">
        <p className="text-center text-white mb-12 text-3xl font-bold">
          Technologies
        </p>

        <div className="bg-white w-full p-2 rounded lg:w-4/5 xl:w-3/5">
          <div className="transition-height ease-in-out duration-300 overflow-hidden flex flex-col justify-start w-full items-center border-b border-gray-600 mb-2">
            <div className="flex w-full justify-between items-center h-12 mb-4">
              <div className="flex space-x-3 h-full items-center">
                <p className="text-lg font-medium">HTML</p>
                <p className="text-lg font-medium">CSS</p>
              </div>
              <img src={ui} alt="" className="h-10 md:h-14"></img>
            </div>
            <p className="w-full text-md text-left mb-2">Including: </p>
            <div className="flex justify-around w-full items-end pb-4 px-4 flex-1">
              <div className="items-center flex flex-col justify-center w-48">
                <img
                  src={bootstrap}
                  alt=""
                  className="h-7 self-center md:h-12"
                ></img>
                <p className="text-center">Bootstrap</p>
              </div>
              <div className="items-center flex flex-col justify-center w-48">
                <img
                  src={mui}
                  alt=""
                  className="h-7 rounded-full  flex bg-white md:h-12 md:w-12"
                ></img>
                <p className="text-center">Material-UI</p>
              </div>
              <div className="items-center flex flex-col justify-center w-48 ">
                <img
                  src={twcss}
                  alt=""
                  className="h-7 rounded-full bg-white md:h-12"
                ></img>
                <p className="text-center">TailwindCSS</p>
              </div>
            </div>
          </div>
          <div
            onClick={toggleShow}
            className={`"transition-height ease-in-out duration-300 overflow-hidden flex flex-col justify-start w-full items-start border-b border-gray-600 mb-2 " ${
              show ? "h-40" : "h-12"
            }`}
          >
            <div className="w-full flex justify-between items-center h-12">
              <p className="text-lg font-medium">JavaScript</p>
              <div className="flex">
                <img src={js} alt="" className="h-10 md:h-14"></img>
              </div>
            </div>
            <p className="text-md text-left w-full mb-2">Including: </p>
            <div className="w-full flex flex-wrap items-center justify-items-center">
              <p className="w-1/3 text-center">Webpack</p>
              <p className="w-1/3 text-center">JQuery</p>
              <p className="w-1/3 text-center">Babel</p>
              <p className="w-1/3 text-center">Chart.js</p>
              <p className="w-1/3 text-center">React</p>
              <p className="w-1/3 text-center">TypeScript</p>
            </div>
          </div>
          <div
            onClick={toggleShow}
            className={`"transition-height ease-in-out duration-300 overflow-hidden flex flex-col justify-start w-full items-start border-b border-gray-600 mb-2 " ${
              show ? "h-40" : "h-12"
            }`}
          >
            <div className="w-full flex justify-between items-center h-12 mb-4">
              <p className="text-lg font-medium">Mobile Apps</p>
              <div className="flex">
                <img
                  src={apple}
                  alt=""
                  className="h-24 w-24 md:h-28 object-contain"
                ></img>
                <img
                  src={google}
                  alt=""
                  className="h-24 w-32 md:h-28 object-contain"
                ></img>
              </div>
            </div>
            <p className="text-md text-left w-full mb-2">Utilizing: </p>
            <div className="w-full flex flex-wrap items-center justify-items-center">
              <p className="w-1/2 text-center">React Native</p>
              <p className="w-1/2 text-center">Expo</p>
              <p className="w-1/2 text-center">IOS</p>
              <p className="w-1/2 text-center">Android</p>
            </div>
          </div>
          <div
            onClick={toggleShow}
            className={`"transition-height ease-in-out duration-300 overflow-hidden flex flex-col justify-start w-full items-start border-b border-gray-600 mb-2 " ${
              show ? "h-40" : "h-12"
            }`}
          >
            <div className="w-full flex justify-between items-center h-12 mb-4">
              <p className="text-lg font-medium">Backend</p>
              <div className="flex">
                <img src={backend} alt="" className="h-10 md:h-14"></img>
              </div>
            </div>
            <p className="text-md text-left w-full mb-2">Including: </p>
            <div className="w-full flex flex-wrap items-center justify-items-center">
              <p className="w-1/3 text-center">Node</p>
              <p className="w-1/3 text-center">Express</p>
              <p className="w-1/3 text-center">MongoDB</p>
              <p className="w-1/3 text-center">GCloud</p>
              <p className="w-1/3 text-center">Firebase</p>
              <p className="w-1/3 text-center">APIs</p>
            </div>
          </div>
          <div
            onClick={toggleShow}
            className={`"transition-height ease-in-out duration-300 overflow-hidden flex flex-col justify-start w-full items-start border-b border-gray-600 mb-2 " ${
              show ? "h-40" : "h-12"
            }`}
          >
            <div className="w-full flex justify-between items-center h-12 mb-4">
              <p className="text-lg font-medium">Tools</p>
              <div className="flex">
                <img src={tools} alt="" className="h-10 md:h-14"></img>
              </div>
            </div>
            <p className="text-md text-left w-full mb-2">Including: </p>
            <div className="w-full flex flex-wrap items-center justify-items-center">
              <p className="w-1/3 text-center">Github</p>
              <p className="w-1/3 text-center">VS Code</p>
              <p className="w-1/3 text-center">Postman</p>
              <p className="w-1/3 text-center">TestFlight</p>
              <p className="w-1/3 text-center">AJAX</p>
              <p className="w-1/3 text-center">JSON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
