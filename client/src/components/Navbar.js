import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css"

function Navbar() {
    return (
        <div className="nav-box">
      <div className="nav-header">
      {/* <img src={logoImage} alt="SoleTalk Logo" /> */}
        <header className="main">Diva Lashes</header>
      {/* <img src={iconImage} alt="SoleTalk Logo2" />   */}
        <div className="navbar">
            <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            ABOUT PAGE
          </NavLink>
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
          <NavLink className="nav-link" to="/bookonline">
            BOOK NOW
          </NavLink>
          </div>
      </div>
    </div>
    );
}

export default Navbar;
