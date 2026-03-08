import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const PortNavbar = ({ toggleTheme, theme }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <strong>HiMesh</strong>
        </NavLink>
      </div>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/skill" onClick={closeMenu}>
          Skill
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/journey" onClick={closeMenu}>
          Journey
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <button className="theme-btn" onClick={toggleTheme}>
          <span className="theme-icon">{theme === "dark" ? "🌞" : "🌙"}</span>
        </button>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default PortNavbar;
