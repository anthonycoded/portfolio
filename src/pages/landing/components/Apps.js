import React from "react";
import { data } from "./apps/data";
import App from "./apps/App";

const Apps = () => {
  return (
    <div className=" flex flex-col items-center w-full lg:w-5/6 xl:w-4/5 px-2">
      <p className="w-full text-2xl font-semibold mb-4 ">IOS/Android Apps</p>
      {data.map((item, i) => (
        <App key={i} item={item}></App>
      ))}
    </div>
  );
};

export default Apps;
