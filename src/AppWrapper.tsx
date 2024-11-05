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

      <Routes>
        <Route path="/">
          <Route index element={<Homepage />}></Route>
        </Route>
      </Routes>

      <Footer></Footer>
    </>
  );
};

export default AppWrapper;
