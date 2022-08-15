import React from "react";
import cart from "../../../assets/shopping-cart.svg";
import content from "../../../assets/content.svg";
import payments from "../../../assets/credit-card.svg";
import stats from "../../../assets/stats.svg";
import orderfood from "../../../assets/order-food.svg";
import socialmedia from "../../../assets/social-media.svg";
import chat from "../../../assets/speech-bubble.svg";
import authentication from "../../../assets/authentication.svg";

const Solutions = () => {
  return (
    <div
      id="solutions"
      className="h-full w-full flex flex-col bg-material-blue p-4 md:px-24 md:py-32"
    >
      <p className="text-2xl text-black font-semibold text-left mb-4">
        Online Solutions
      </p>
      <div className="w-full h-full grid grid-cols-2 justify-content-center gap-12 pb-12">
        <div className="flex flex-col justify-center">
          <img src={cart} alt="" className="h-14"></img>
          <p className="text-center text-xl ">E-commerce</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={content} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Content Management</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={payments} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Payment Processing</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={orderfood} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Mobile Ordering</p>
        </div>

        <div className="flex flex-col justify-center">
          <img src={stats} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Analytics</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={socialmedia} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Social Media</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={chat} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Instant Messaging</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={authentication} alt="" className="h-14"></img>
          <p className="text-center text-xl ">Authentication</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
