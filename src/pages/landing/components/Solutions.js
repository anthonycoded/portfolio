import React from "react";
import cart from "../../../assets/shopping-cart.svg";
import content from "../../../assets/content.svg";
import payments from "../../../assets/credit-card.svg";
import stats from "../../../assets/stats.svg";
import orderfood from "../../../assets/order-food.svg";
import socialmedia from "../../../assets/social-media.svg";
import chat from "../../../assets/speech-bubble.svg";
import authentication from "../../../assets/authentication.svg";
import { motion, Variants } from "framer-motion";

const Solutions = () => {
  return (
    <div
      id="solutions"
      className="h-4/5  w-full flex flex-col items-center bg-material-blue p-4 md:py-4 pb-12"
    >
      <div className="w-full h-full flex flex-col items-center lg:w-5/6 xl:w-4/5">
        <p className="text-2xl  font-semibold text-left mb-4 w-full">
          Online Solutions
        </p>
        <div className="w-full  grid grid-cols-2 justify-content-center gap-12  ">
          <motion.div
            className="flex flex-col justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={cart} alt="" className="h-14"></img>
            <p className="text-center text-xl ">E-commerce</p>
          </motion.div>

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
    </div>
  );
};

export default Solutions;
