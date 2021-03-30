import React from "react";

import avatar from "../assets/avatar.jpg";
import adminwishlist from "../assets/adminwishlist.png";
import covidtracker from "../assets/covidtracker.png";
import map from "../assets/map.png";
import bdmediaplayer from "../assets/bdmediaplayer.png";
import bdlandingpage from "../assets/bdlandingpage.png";
import bdlogin from "../assets/bdlogin.png";
import newproduct from "../assets/newproduct.png";
import numbers from "../assets/numbers.png";

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
      <div className="h-full w-full flex flex-col bg-blue-400 p-4 space-y-16">
        <p className="text-2xl text-black font-bold text-left mb-4">
          What I can Do
        </p>
        <div className="w-full h-full flex justify-between">
          <div className="rounded-xl bg-yellow-400 h-20 w-36 justify-center items-center p-4">
            <p className="text-center font-medium">E-Commerce</p>
          </div>

          <p className="text-center font-medium w-60">
            Need to sell products online?Need to sell products online?Need to
            sell products online?Need
          </p>
        </div>

        <div className="h-full w-full flex justify-between">
          <div className="rounded-xl bg-red-400 h-20 w-36 flex justify-center items-center p-4">
            <p className="text-center font-medium">Content Management</p>
          </div>

          <p className="text-center font-medium w-60">
            Need to sell products online?Need to sell products online?Need to
            sell products online?Need to sell products on
          </p>
        </div>
        <div className="w-full h-full flex justify-between">
          <div className="rounded-xl bg-green-400 h-20 w-36 flex justify-center items-center p-4">
            <p className="text-center font-medium">CRM</p>
          </div>

          <p className="text-center font-medium w-60">
            Need to sell products online?Need to sell products online?Need to
            sell products online?Need to sell products on
          </p>
        </div>
        <div className="w-full h-full flex justify-between mb-12">
          <div className="rounded-xl bg-pink-400 h-20 w-36 mb-4  justify-center items-center p-4">
            <p className="text-center font-medium">Music Streaming</p>
          </div>

          <p className="text-center font-medium w-60 mb-12">
            Need to sell products online?Need to sell products online?Need to
            sell products online?Need to sell products on
          </p>
        </div>
      </div>
      <div className="h-full w-full flex flex-col p-4 space-y-12">
        <p className="text-3xl text-black font-bold text-left mb-12">
          Projects
        </p>
        <div className="h-full p-4 space-y-4">
          <div>
            <p className="text-2xl font-bold text-yellow-400">BeatDealers</p>
            <p className="">
              The goal of this project is to lease and sell beats to artist. It
              includes audio streaming, authentication, payment processing, file
              uploading and downloading.
            </p>
          </div>
          <p className="text-md font-medium ">Screenshots:</p>
          <div className="flex overflow-x-scroll w-full space-x-8 p-4">
            <img src={bdlandingpage} alt="" className="w-60"></img>
            <img src={bdmediaplayer} alt="" className="w-60"></img>
            <img src={bdlogin} alt="" className="w-60"></img>
          </div>
          <p className="text-xl font-medium">
            Technologies used: MERN Stack, JWT, Google Cloud Platform, Stripe
          </p>
        </div>

        <div className="h-full">
          <p className="text-2xl font-bold text-blue-400">Wishlist</p>
          <div className="flex overflow-x-scroll w-full space-x-8 p-4">
            <img src={adminwishlist} alt="" className="w-60"></img>
            <img src={newproduct} alt="" className="w-60"></img>
          </div>
          <p className="p-4 text-xl font-medium">
            Technologies used: MERN Stack, Google Cloud Platform, Stripe
          </p>
          <p className="p-4">
            The goal of this project is to lease and sell beats to artist. It
            includes audio streaming, authentication, payment processing, file
            uploading and downloading.
          </p>
        </div>

        <div className="h-full">
          <p className="text-2xl font-bold text-red-400">Covid Tracker</p>
          <div className="flex overflow-x-scroll w-full space-x-8 p-4">
            <img src={covidtracker} alt="" className="w-60"></img>
            <img src={numbers} alt="" className="w-60"></img>
            <img src={map} alt="" className="w-60"></img>
          </div>
          <p className="p-4 text-xl font-medium">
            Technologies used: MERN Stack, Google Cloud Platform, Stripe
          </p>
          <p className="p-4">
            The goal of this project is to lease and sell beats to artist. It
            includes audio streaming, authentication, payment processing, file
            uploading and downloading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
