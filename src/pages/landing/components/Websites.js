import React from "react";
import jnmponds from "../../../assets/jnmponds.png";
import snw from "../../../assets/snw.png";

const Websites = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 bg-material-blue py-7 lg:py-24 overflow-hidden">
      <p className="text-2xl font-semibold mb-12 w-full ">Websites by me</p>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <a
          href="http://jnmpondmanagement.com"
          target="_blank"
          className="flex flex-col w-full items-center lg:w-96 h-96 "
        >
          <p className="text-2xl mb-4">J&amp;M Pond Management </p>
          <div
            className="h-60 w-96"
            style={{
              backgroundImage: `url("${jnmponds}")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </a>
        <a
          href="http://socketsnwrenches.com"
          target="_blank"
          className="flex flex-col w-full lg:w-96 h-full "
        >
          <p className="text-2xl mb-4">
            Sockets &amp; Wrenches | Tampa Auto Repair{" "}
          </p>
          <div
            className="h-60 w-96"
            style={{
              backgroundImage: `url("${snw}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default Websites;
