import React from "react";

import avatar from "../assets/avatar.jpg";
import adminwishlist from "../assets/adminwishlist.png";
import authentication from "../assets/authentication.svg";
import covidtracker from "../assets/covidtracker.png";
import map from "../assets/map.png";
import bdmediaplayer from "../assets/bdmediaplayer.png";
import bdlandingpage from "../assets/bdlandingpage.png";
import bdlogin from "../assets/bdlogin.png";
import newproduct from "../assets/newproduct.png";
import numbers from "../assets/numbers.png";
import cart from "../assets/shopping-cart.svg";
import content from "../assets/content.svg";
import payments from "../assets/credit-card.svg";
import stats from "../assets/stats.svg";
import orderfood from "../assets/order-food.svg";
import socialmedia from "../assets/social-media.svg";
import chat from "../assets/speech-bubble.svg";

const LandingPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <div className="h-full flex justify-center p-4 pt-8">
        <p className="font-bold text-4xl text-black text-center mt-14 capitalize">
          Hello World, <br></br> my name is{" "}
          <span className="text-material-blue">Shawn</span> barbel
        </p>
      </div>
      <div className="h-full flex flex-col items-center space-y-4 p-4">
        <img src={avatar} alt="" className="rounded-full h-48 mb-4"></img>
        <div className="h-full flex flex-col justify-center items-center ">
          <p className="text-2xl font-bold text-material-purple">
            Software Developer
          </p>
          <p className="text-xl text-gray-500 font-medium mb-4">
            Solution Creator
          </p>
        </div>
        <div className="h-full flex flex-col items-center p-4">
          <p className="mb-2">Need help with your website?</p>
          <button className="h-12 rounded-xl font-medium bg-material-blue w-28 mb-8">
            Hire Me
          </button>
        </div>
      </div>
      <div className="h-full w-full flex flex-col bg-material-blue p-4 space-y-16">
        <p className="text-2xl text-black font-bold text-left mb-4">
          Online Solutions
        </p>
        <div className="w-full h-full grid grid-cols-2 justify-content-center gap-12 pb-12">
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">E-commerce</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={content} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Content Management</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={payments} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Payment Processing</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={orderfood} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Mobile Ordering</p>
          </div>

          <div className="flex flex-col justify-center">
            <img src={stats} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Analytics</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={socialmedia} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Social Media</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Instant Messaging</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={authentication} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Authentication</p>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col p-4 space-y-12">
        <p className="text-3xl text-black font-bold text-left mb-4">Projects</p>
        <div className="h-full p-2 lg:px-24">
          <p className="text-2xl font-bold text-yellow-400">BeatDealers</p>
          <p className="p-2">
            The goal of this project is to lease and sell beats to artist. It
            includes audio streaming, authentication, payment processing, file
            uploading and downloading.
          </p>

          <p className="text-xl font-medium text-yellow-400 p-2">
            Screenshots:
          </p>
          <div className="flex overflow-x-scroll w-full space-x-8 p-4 xl:overflow-hidden xl:justify-center">
            <img src={bdlandingpage} alt="" className="w-60"></img>
            <img src={bdmediaplayer} alt="" className="w-60"></img>
            <img src={bdlogin} alt="" className="w-60"></img>
          </div>
          <p className="text-xl font-medium p-4 text-center w-full">
            Technologies used: MERN Stack, JWT, Google Cloud Platform, Stripe
          </p>
        </div>

        <div className="h-full p-2 lg:px-24">
          <p className="text-2xl font-bold text-blue-400">Wishlist</p>
          <p className="p-2">
            The goal of this project is to lease and sell beats to artist. It
            includes audio streaming, authentication, payment processing, file
            uploading and downloading.
          </p>
          <p className="text-xl font-medium text-blue-400 p-2">Screenshots:</p>
          <div className="flex overflow-x-scroll w-full space-x-8 p-4 lg:overflow-hidden lg:justify-center">
            <img src={adminwishlist} alt="" className="w-60"></img>
            <img src={newproduct} alt="" className="w-60"></img>
          </div>
          <p className="p-4 text-xl font-medium text-center">
            Technologies used: MERN Stack, Google Cloud Platform, Stripe
          </p>
        </div>

        <div className="h-full p-2 lg:px-24">
          <p className="text-2xl font-bold text-red-400">Covid Tracker</p>
          <p className="p-2">
            The goal of this project is to lease and sell beats to artist. It
            includes audio streaming, authentication, payment processing, file
            uploading and downloading.
          </p>
          <p className="text-xl font-medium text-red-400 p-2">Screenshots:</p>
          <div className="flex overflow-x-scroll w-full space-x-8 p-4 lg:overflow-hidden lg:justify-center">
            <img src={covidtracker} alt="" className="w-60"></img>
            <img src={numbers} alt="" className="w-60"></img>
            <img src={map} alt="" className="w-60"></img>
          </div>
          <p className="p-4 text-xl font-medium text-center w-full">
            Technologies used: MERN Stack, Google Cloud Platform, Stripe
          </p>
        </div>
      </div>
      <div className="h-full w-full bg-material-purple p-8 text-3xl font-bold">
        <p className="text-center text-material-blue mb-8">Technologies</p>
        <div className="grid grid-cols-5 h-full w-full gap-8">
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
          <div className="flex flex-col justify-center">
            <img src={cart} alt="" className="h-20"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
