import React from "react";
import Navabr from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './home.css'
import brushing from './brushing.jpeg'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function HomePage () {

    const history = useHistory()
    const serviceMenu = () => {
        history.push("/services")
    }

return (
    <div>
    <Navabr/>
    <div className="homepage">
    </div>

    <div className="lash-cont">
    <div className="lash-card">

            <h1>Lash Extensions</h1>
                <div className="card-font">
            <h3> Lash Extensions redefine, lengthen and add volume to your eyelashes. 
                These are individual lash extensions applied directly onto your natural lashes one by one.</h3>
                </div>
                <button className="lash-btn">LASH EXTENSIONS</button>
            </div>


            <div className="lash-card">
            <h1>Lash Lifts</h1>
            <div className="card-font">
            <h3>A low maintenance lash treatment that lifts, curls and boosts your natural 
                lashes instantly without the use of mascara, lash curler or extensions.</h3>
                </div>
                <button className="lash-btn">LASH LIFTS</button>
            </div>
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
                <div>
            <button className="service-btn" onClick={serviceMenu}> SERVICE MENU</button>
        </div>
            </div>
        </div>
        
       
    </div>
</div>
)
}



export default HomePage;