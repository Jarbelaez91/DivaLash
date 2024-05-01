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
                <h1>What does Diva Lashes do?</h1>

                <h3>Our mission at Diva Lashes is to provide the best eyelash and eyebrow services in all of New York!<br></br>
    We strive for 100% customer satisfaction and have the testimonials to prove it.</h3>
<h3>Our lash artist is certified by the best institution in Barcelona. Our artist is a licensed esthetician. 
    This combination of high-quality training and extensive experience 
    will ensure that you receive the most fabulous set of lashes.</h3>
<h1>Remember, if you lower your gaze, let it be only to show off your lashes!</h1>
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