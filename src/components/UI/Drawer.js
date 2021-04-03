import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Drawer = ({ setOpen, authorized, logout }) => {
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
      className="bg-material-blue h-96 w-72 top-12 right-0 transform flex flex-col fixed rounded-l-xl"
      onMouseLeave={(e) => setOpen(false)}
    >
      <div className="flex flex-col p-8 space-y-4">
        <Link
          to="/"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/apparel"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Solutions
        </Link>
        <Link
          to="/beats"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Faqs
        </Link>
        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        {authorized ? (
          <React.Fragment>
            <Link
              to="/account"
              className="text-2xl font-medium h-8 flex items-center"
              onClick={() => setOpen(false)}
            >
              Account
            </Link>
            <button
              className="text-xl font-medium flex items-center"
              onClick={() => logout()}
            >
              Logout
            </button>
          </React.Fragment>
        ) : (
          <Link
            to="/login"
            className="text-xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Login/Register
          </Link>
        )}

        <Link
          to="/admin"
          className="text-xl font-medium"
          onClick={() => setOpen(false)}
        >
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
