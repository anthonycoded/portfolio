import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/landing/LandingPage";
import Blog from "./pages/blog/Blog";
import Frontend from "./pages/frontend/Frontend";
import Backend from "./pages/backend/Backend";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/projects/Projects";

//import ScrollToTop from "./utils/utils";

const AppWrapper = () => {
  return (
    <>
      <Header></Header>

      <div className="mt-12 flex-1 ">
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />}></Route>
          </Route>
          <Route path="/blog">
            <Route index element={<Blog />}></Route>
          </Route>
          <Route path="/projects">
            <Route index element={<Projects />}></Route>
          </Route>
          <Route path="/projects/frontend">
            <Route index element={<Frontend />}></Route>
          </Route>
          <Route path="/projects/backend">
            <Route index element={<Backend />}></Route>
          </Route>
          <Route path="/about">
            <Route index element={<About />}></Route>
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />}></Route>
          </Route>
        </Routes>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AppWrapper;
