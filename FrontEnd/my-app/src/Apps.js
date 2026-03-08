import React, { useState, useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Components/File1";
import About from "./Components/File2";
import Skill from "./Components/File3";
import Projects from "./Components/File4";
import Services from "./Components/File5";
import Journey from "./Components/File6";
import Contact from "./Components/File7";
import NotFound from "./Components/NotFound";
import { Route, Routes } from "react-router-dom";
import "./Apps.css";
import PortNavbar from "./Components/Navbar";

const Apps = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <PortNavbar toggleTheme={toggleTheme} theme={theme} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Apps;
