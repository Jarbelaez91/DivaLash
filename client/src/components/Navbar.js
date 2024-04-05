import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
    return (
        <div>
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
    );
}

export default Navbar;
