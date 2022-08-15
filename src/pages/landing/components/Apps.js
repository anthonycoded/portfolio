import React from "react";
import android from "../../../assets/android app.png";
import android1 from "../../../assets/android app.png";

const Apps = () => {
  return (
    <div className=" flex flex-col items-center w-full py-7 px-2">
      <p className="w-full text-2xl font-semibold mb-12">IOS/Android Apps</p>
      <p className="w-full text-xl mb-4">The restaraunt App</p>
      <div className="flex overflow-x-scroll px-4 space-x-4">
        <div
          className=" h-96 w-48"
          style={{
            backgroundImage: `url("${android}")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className=" h-96 w-48"
          style={{
            backgroundImage: `url("${android1}")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <p className="p-4 font-light py-8 text-xl">
        This is a simple app built using React Native. It displays restaraunts
        and data from Yelp's business API. You can view the source code for this
        app on my Github
      </p>
    </div>
  );
};

export default Apps;
