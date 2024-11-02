import React from "react";
import Banner from "./components/Banner";
import Socials from "./components/Socials";
import WhatIDo from "./components/WhatIDo";
import Solutions from "./components/Solutions";
import Apps from "./components/Apps";
import CallToAction from "./components/CallToAction";
import Websites from "./components/Websites";
import Technologies from "./components/Technologies";
import ChatBot from "./components/ChatBot";

const LandingPage = () => {
  return (
    <div
      id="home"
      className="h-full flex flex-col items-center w-full mt-12 z-0 overflow-hidden "
    >
      <div className="w-full flex flex-col h-full  items-center py-24">
        <Banner></Banner>
        <Socials></Socials>
        <CallToAction></CallToAction>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#aa00ff"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,69.3C672,43,768,53,864,90.7C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <ChatBot />

        <WhatIDo></WhatIDo>
        {/* <CallToAction></CallToAction> */}
        <Apps></Apps>
        <Solutions></Solutions>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00e5ff"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,122.7C672,96,768,64,864,53.3C960,43,1056,53,1152,80C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <CallToAction></CallToAction>
        {/* <Websites></Websites> */}
        <Technologies></Technologies>
      </div>
    </div>
  );
};

export default LandingPage;
