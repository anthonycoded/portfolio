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
import business from "../assets/undraw_business.svg";
import cube from "../assets/solutions.svg";
import winners from "../assets/winners.svg";
import down from "../assets/down-arrow.svg";
import Github from "../assets/github.png";
import wavebg from "../assets/wavebg.svg";
import css from "../assets/css.svg";
import html from "../assets/html-5.svg";
import js from "../assets/javascript.svg";
import reactlogo from "../assets/react-icon.svg";
import twcss from "../assets/tailwindcss-icon.svg";
import mui from "../assets/material-ui.svg";
import bootstrap from "../assets/Bootstrap_logo.svg";
import webpackcube from "../assets/webpackcube.svg";
import devices from "../assets/devices.svg";
import gcloud from "../assets/gcloud.png";
import nodejs from "../assets/nodejs.svg";
import mongodb from "../assets/mongodb.png"

const LandingPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center mt-8">
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
          <img src={Github} className="h-12 mb-4" alt=""></img>
          <a
            href="https://twitter.com/ShawnBarbel?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-size="large"
            data-show-count="false"
          >
            Follow @ShawnBarbel
          </a>
        </div>
        <div className="h-full flex flex-col items-center p-4">
          <p className="mb-2">Need help with your website?</p>
          <button className="h-12 rounded-xl font-medium bg-material-blue w-28 mb-8">
            Contact Me
          </button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#aa00ff"
          fill-opacity="1"
          d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,69.3C672,43,768,53,864,90.7C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="h-full w-full bg-material-purple flex flex-col items-center p-8 space-y-8">
        <p className="text-2xl text-left w-full mb-4 font-bold">
          What I do is simple
        </p>
        <p className="text-white font-medium text-xl mb-20">
          I Create online business solutions that empowers a company to not only
          grow but also thrive in todays competitve world.
        </p>
        <div className="flex flex-col w-full h-full space-y-16 p-4 mt-12">
          <div className="flex w-full h-full justify-start items-center space-x-4">
            <p className="text-white text-xl font-bold w-32">
              Create Custom Solutions
            </p>
            <img src={cube} alt="" className="h-24"></img>
          </div>
          <img src={down} alt="" className="h-12"></img>
          <div className="flex items-center justify-end w-full h-full space-x-4">
            <img src={business} alt="" className="h-24"></img>
            <p className="text-white text-xl font-bold w-32">
              Empower your business to grow
            </p>
          </div>
          <img src={down} alt="" className="h-12"></img>
          <div className="flex justify-start items-center space-x-4 w-full h-full">
            <p className="text-white text-xl font-bold w-32">
              Compete and succeed!
            </p>
            <img src={winners} alt="" className="h-24"></img>
          </div>
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
            <img src={chat} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Instant Messaging</p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={authentication} alt="" className="h-20"></img>
            <p className="text-center text-xl font-bold">Authentication</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00e5ff"
          fill-opacity="1"
          d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,122.7C672,96,768,64,864,53.3C960,43,1056,53,1152,80C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
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
            <img src={bdlandingpage} alt="" className=" h-96"></img>
            <img src={bdmediaplayer} alt="" className=" h-96"></img>
            <img src={bdlogin} alt="" className=" h-96"></img>
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
            <img src={adminwishlist} alt="" className="h-96"></img>
            <img src={newproduct} alt="" className="h-96"></img>
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
          <div className="flex overflow-x-scroll w-full space-x-8 p-4 lg:overflow-hidden md:justify-center">
            <img src={covidtracker} alt="" className="h-96"></img>
            <img src={numbers} alt="" className="h-96"></img>
            <img src={map} alt="" className="h-96"></img>
          </div>
          <p className="p-4 text-xl font-medium text-center w-full">
            Technologies used: MERN Stack, Google Cloud Platform, Stripe
          </p>
        </div>
      </div>
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `url(${wavebg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="py-12">
          <p className="text-center text-material-blue mb-12 text-2xl font-bold">
            Technologies
          </p>
          <div className="flex flex-col h-full w-full">
            <div className="flex justify-center items-center w-full h-full mb-8 space-x-7">
              <img src={html} alt="" className="h-16 bg-white rounded-xl"></img>

              <img src={css} alt="" className="h-16  bg-white rounded-xl"></img>
              <img
                src={down}
                alt=""
                className="h-12 transform -rotate-90"
              ></img>

              <div className="flex flex-col items-center h-full space-y-4">
                <div className="flex items-center space-x-2">
                  <img src={bootstrap} alt="" className="h-7 "></img>
                  <p className="text-white font-bold">Bootstrap</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={mui}
                    alt=""
                    className="h-7 w-7 rounded-full bg-white"
                  ></img>
                  <p className="text-white font-bold">Material-UI</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={twcss}
                    alt=""
                    className="h-7 rounded-full bg-white"
                  ></img>
                  <p className="text-white font-bold">Tailwind</p>
                </div>
              </div>
            </div>
            <img src={down} alt="" className="h-12"></img>

            <div className="flex items-center p-4 justify-between">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img src={js} alt="" className="h-20"></img>
                <p className="text-base text-white font-medium">Javascript</p>
              </div>
              <div className="items-end w-full grid grid-cols-2 justify-items-center content-center pl-16">
                <p className="text-sm text-white h-12 font-bold">Vanilla</p>
                <p className="text-sm text-white h-12 font-bold">React</p>
                <p className="text-sm text-white h-12 font-bold">ESNext</p>
                <p className="text-sm text-white h-12 font-bold">AJAX</p>
                <p className="text-sm text-white h-12 font-bold">JSON</p>
                <p className="text-sm text-white h-12 font-bold">DOM</p>
              </div>
            </div>
            <img src={down} alt="" className="h-12 mb-8"></img>

            <div className="flex flex-col items-center">
              <img
                src={webpackcube}
                alt=""
                className="h-20 animate-spin-slow duration-400"
              ></img>
              <p className="text-xl font-bold text-white">Webpack</p>
            </div>
          </div>
          <div className="w-full h-full p-4 space-y-8">
            <p className="text-2xl font-bold text-white text-center w-full">Backend</p>
            <img src={nodejs} alt="mongodb" className="h-24"></img>
            <img src={mongodb} alt="mongodb" className="h-9 bg-white rounded"></img>
            <img src={gcloud} alt="mongodb" className="h-24"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
