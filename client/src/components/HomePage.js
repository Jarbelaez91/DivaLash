import React from "react";
import Navabr from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './home.css'
import brushing from './brushing.jpeg'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import englishText from "./englishHomePage";
import spanishText from "./spanish";

function HomePage ({ darkModeEnabled, language }) {

    const history = useHistory()
    const serviceMenu = () => {
        history.push("/services")
    }

    const text = language === "english" ? englishText : spanishText;

return (
    <div>
    <Navabr/>
    <div className="homepage">
    </div>

    <div className={`lash-cont ${darkModeEnabled ? "light-mode-lash-cont" : ""}`}>
    <div className={`lash-card ${darkModeEnabled ? "light-mode-lash-card" : ""}`}>

        <h1>{text.lashExtensions.title}</h1>
        <div className={`card-font ${darkModeEnabled ? "light-mode-card-font" : ""} ${language === 'spanish' ? 'spanish-font' : ''}`}>
            <h3>{text.lashExtensions.description}</h3>
                </div>
                <button className={`lash-btn ${darkModeEnabled ? "light-mode-lash-btn" : ""}`}>{text.lashExtensions.button}</button>
            </div>


            <div className={`lash-card ${darkModeEnabled ? "light-mode-lash-card" : ""}`}>
            <h1>{text.lashLifts.title}</h1>
            <div className={`card-font ${darkModeEnabled ? "light-mode-card-font" : ""} ${language === 'spanish' ? 'spanish-font' : ''}`}>            
            <h3>{text.lashLifts.description}</h3>
                </div>
                <button className={`lash-btn ${darkModeEnabled ? "light-mode-lash-btn" : ""}`}>{text.lashLifts.button}</button>
            </div>
    </div>

    <div className={`home-container ${darkModeEnabled ? "light-mode-home-container" : ""}`}>
        <div className="content-container">
            <div className="brush-img">
                <img src={brushing} alt="lash brush" />
            </div>
            <div className={`text-container ${darkModeEnabled ? "light-mode-text-container" : ""}`}>
            <h1>{text.aboutHome.title}</h1>

                        <h3>{text.aboutHome.mission}</h3>
                        <h3>{text.aboutHome.certification}</h3>
                        <h1>{text.aboutHome.reminder}</h1>
                <div>
            <button className={`service-btn ${darkModeEnabled ? "light-mode-service-btn" : ""}`} onClick={serviceMenu}> {text.aboutHome.serviceMenu}</button>
        </div>
            </div>
        </div>
        
       
    </div>
</div>
)
}



export default HomePage;