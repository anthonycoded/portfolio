import React, { useState } from "react";

import menu from "../../assets/menu.svg";
import Drawer from "./Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full w-full">
      <div className="h-12 flex justify-between items-center bg-material-purple w-full px-2 fixed top-0">
        <a href="/">
          <h1 className="pl-4 text-material-blue font-bold text-2xl">
            <p className="text-black">
              <span className="text-material-blue">Shawn</span>Barbel
            </p>
          </h1>
        </a>
        <button className="" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" className="h-9"></img>
        </button>
      </div>
      {open ? <Drawer setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
