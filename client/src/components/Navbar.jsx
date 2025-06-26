// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar({ darkModeEnabled }) {
  return (
    <div className={`nav-box ${darkModeEnabled ? "light-mode" : ""}`}>
      <div className="nav-header">
        <header className="main">Diva Lashes</header>
        <div className="navbar">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
          <NavLink className="nav-link1" to="/bookonline">
            BOOK NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
