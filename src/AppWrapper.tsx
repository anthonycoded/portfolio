import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/landing/LandingPage";

//import ScrollToTop from "./utils/utils";

const AppWrapper = () => {
  return (
    <>
      <Header></Header>

      <div className="pt-12">
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />}></Route>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AppWrapper;
