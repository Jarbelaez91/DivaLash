import React from "react";
import Navabr from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import lashtech1 from './lashtech1.jpeg'
import './home.css'
import brushing from './brushing.jpeg'

function HomePage () {

return (
    <div>
    <Navabr/>
    <div className="homepage">
        <img src={lashtech1} alt="lash office" />
    </div>
    <div className="home-container">
        <div className="content-container">
            <div className="brush-img">
                <img src={brushing} alt="lash brush" />
            </div>
            <div className="text-container">
                <h1>Que Hacemos en Diva Lashes?</h1>

<h3>¡Nuestra misión en Diva Lashes es proporcionar los mejores servicios de pestañas y cejas en todo Nueva York! <br></br>
    ¡Nos esforzamos por lograr la satisfacción del cliente al 100% y tenemos los testimonios para demostrarlo.</h3>

<h3>Nuestra artista de pestañas está certificada en la mejor institutacion de Barcelona. Nuestra artista es estetica con licencia. 
    Esta combinación de capacitación de alta calidad y experiencia extensa 
    garantizará que recibas el conjunto más fabuloso de pestañas.</h3>
<h1> Acuerdese en DivaLash la bellza la pones tu!</h1>
                <div className="service-btn">
            <NavLink className="nav-link" to="/services">
                Services Menu
            </NavLink>
        </div>
            </div>
        </div>
       
    </div>
</div>
)
}



export default HomePage;

