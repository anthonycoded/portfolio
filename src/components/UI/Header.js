import React, { useState } from "react";
import menu from "../../assets/menu.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const OpenHeader = () => (
    <div className=" bg-yellow-400 h-96 w-96 inset-y-0 right-0 flex flex-col fixed">
      <div className="flex h-12 justify-between items-center">
        <a href="/">
          <h1 className="pl-4 font-bold text-2xl">Shawn Barbel</h1>
        </a>
        <button className="h-8 w-8 font-bold" onClick={() => setOpen(!open)}>
          X
        </button>
      </div>
      <div className="flex flex-col p-8 space-y-4">
        <div className="h-8 flex items-center">
          <h2 className="text-xl">Beats</h2>
        </div>
        <div className="h-8 flex items-center">
          <p className="text-xl">Apparel</p>
        </div>
        <div className="h-8 flex items-center">
          <p className="text-xl">Trending</p>
        </div>
        <div className="h-8 flex items-center">
          <p className="text-xl">Faqs</p>
        </div>
        <div className="h-8 flex items-center">
          <p className="text-xl">Account</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-12 flex justify-between items-center bg-material-purple w-full px-2 fixed">
        <a href="/">
          <h1 className="pl-4 text-material-blue font-bold text-2xl">
            {open ? undefined : (
              <p className="text-black">
                <span className="text-material-blue">Shawn</span>Barbel
              </p>
            )}
          </h1>
        </a>
        <button className="" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" className="h-9"></img>
        </button>
      </div>
      {open ? <OpenHeader></OpenHeader> : undefined}
    </div>
  );
};

export default Header;
