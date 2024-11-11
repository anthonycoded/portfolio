import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "./routes";

type Props = {
  setOpen: (arg0: boolean) => void;
};

const Drawer = ({ setOpen }: Props) => {
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div
      className="bg-material-blue  w-60 top-12 right-0 transform flex flex-col fixed rounded-l-xl"
      //onMouseLeave={(e) => setOpen(false)}
    >
      <div className="flex flex-col p-8 space-y-4">
        {routes.map((route, i) => (
          <Link
            key={i}
            to={route.route}
            className="text-2xl font-medium h-8 flex items-center"
            onClick={closeDrawer}
          >
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
