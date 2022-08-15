import React, { useState } from "react";
import { Link } from "react-router-dom";

import menu from "../assets/menu.svg";
import Drawer from "./Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full absolute z-10">
      <div className="h-12 flex justify-between items-center bg-material-purple w-full px-2 fixed top-0 shadow-2xl">
        <a href="/">
          <h1 className="pl-4 text-material-blue font-bold text-2xl">
            <p className="text-black">
              <span className="text-material-blue">Shawn</span>Barbel
            </p>
          </h1>
        </a>

        <div className="md:flex hidden space-x-4 px-4">
          <a
            href="#home"
            className="text-xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#solutions"
            className=" text-xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            {" "}
            Solutions
          </a>
          <a
            href="#projects"
            className=" text-xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <Link
            to="/faqs"
            className="text-xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" className="h-9"></img>
        </button>
      </div>
      {open ? <Drawer setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
