import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import routes from "./routes";
import menu from "../../assets/menu.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className="w-full fixed   z-10">
      <div className="h-12 flex justify-between items-center bg-material-purple w-full px-2 fixed top-0 shadow-xl rounded-b-sm">
        <a href="/">
          <h1 className="pl-4 text-material-blue font-bold text-2xl">
            <p className="text-black">
              <span className="text-material-blue">Shawn</span>Barbel
            </p>
          </h1>
        </a>

        <div className="md:flex hidden space-x-4 px-4">
          {routes.map((route, i) => (
            <Link
              key={i}
              to={route.route}
              className="text-xl font-medium h-8 flex items-center"
              onClick={() => setOpen(false)}
            >
              {route.title}
            </Link>
          ))}
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
