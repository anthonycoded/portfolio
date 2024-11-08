import React, { useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {
  setOpen: (arg0: boolean) => void;
};

const Drawer = ({ setOpen }: Props) => {
  const closeDrawer = () => {
    setOpen(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", closeDrawer);
    return function cleanup() {
      document.body.removeEventListener("click", closeDrawer);
    };
  }, []);

  return (
    <div
      className="bg-material-blue h-60 w-72 top-12 right-0 transform flex flex-col fixed rounded-l-xl"
      onMouseLeave={(e) => setOpen(false)}
    >
      <div className="flex flex-col p-8 space-y-4">
        <a
          href="#home"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Home
        </a>
        <a
          href="#solutions"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          {" "}
          Solutions
        </a>
        <a
          href="#projects"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Projects
        </a>
        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
