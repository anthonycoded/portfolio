import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import routes from './routes';
import menu from '../../assets/menu.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className="w-full fixed z-10">
      <div className="h-12 flex justify-between items-center bg-material-purple w-full px-2 fixed top-0 shadow-xl rounded-b-sm">
        <a href="/">
          <h1 className="pl-4 text-material-blue font-bold text-2xl">
            <p className="text-white">
              <span className="text-material-blue">Shawn</span>Barbel
            </p>
          </h1>
        </a>

        {/* Main Menu */}
        <div className="md:flex hidden space-x-4 px-4">
          {routes.map((route, i) => (
            <div key={i} className="relative group">
              <Link
                to={route.route}
                className="text-lg font-medium h-8 flex items-center text-white"
                onClick={() => setOpen(false)}
                onMouseEnter={() =>
                  route.children ? setSubmenuOpen(true) : setSubmenuOpen(false)
                }
                onMouseLeave={() => setSubmenuOpen(false)}
              >
                {route.title}
              </Link>

              {/* Nested Submenu */}
              {route.children && (
                <div
                  className={`absolute top-8 left-0 bg-white shadow-lg rounded p-2 ${
                    submenuOpen ? 'block' : 'hidden'
                  } group-hover:block`}
                >
                  {route.children.map((subroute, j) => (
                    <a
                      key={j}
                      href={subroute.route}
                      target="_blank"
                      className="block text-lg font-normal text-white px-4 py-2 hover:bg-gray-200 text-nowrap"
                      onClick={() => setOpen(false)}
                    >
                      {subroute.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" className="h-9"></img>
        </button>
      </div>
      {open ? <Drawer setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
