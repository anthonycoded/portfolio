import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

type Props = {
  setOpen: (arg0: boolean) => void;
};

const Drawer = ({ setOpen }: Props) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="bg-material-blue w-60 top-12 right-0 transform flex flex-col fixed rounded-l-xl shadow-xl">
      <div className="flex flex-col p-8 space-y-4">
        {routes.map((route, i) => (
          <div key={i} className="flex flex-col">
            {/* Main Menu Link */}
            <div className="flex items-center justify-between">
              <Link
                to={route.route}
                className="text-2xl font-medium h-8 flex items-center"
                onClick={closeDrawer}
              >
                {route.title}
              </Link>

              {/* Submenu Toggle */}
              {route.children && (
                <button
                  className="ml-4 text-white text-lg"
                  onClick={() => toggleSubmenu(route.title)}
                >
                  {openSubmenu === route.title ? '-' : '+'}
                </button>
              )}
            </div>

            {/* Submenu Links */}
            {route.children && openSubmenu === route.title && (
              <div className="ml-4 mt-2 space-y-2">
                {route.children.map((subroute, j) => (
                  <a
                    key={j}
                    href={subroute.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-normal block hover:underline"
                    onClick={closeDrawer}
                  >
                    {subroute.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
