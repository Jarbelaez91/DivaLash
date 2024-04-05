import React from "react";
import Navabr from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function HomePage () {

return (
    <div>
        <Navabr/>
    <h1> LASH TECH </h1>

    <h3>Que Hacemos en Diva Lash?</h3>
    <p>el resto lo pones tu</p>
    <div>
    <NavLink className="nav-link" to="/services">
            Services Menu
          </NavLink>
    </div>
    </div>
)
}



export default HomePage;

