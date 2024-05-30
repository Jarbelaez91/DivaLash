import React from "react";
import Navbar from "./Navbar";
import "./service.css"
import { useHistory } from 'react-router-dom';
import englishText from "./englishHomePage";
import spanishText from "./spanish";


function Services({darkModeEnabled, language}) {


    const history = useHistory()
    const seeMore = () => {
        history.push("/classic-lash-extensions")
    }
    const hybrid = () => {
        history.push("/hybrid-lash-extensions")
    }
    const strip = () => {
        history.push ("/strip-lash-look-extensions")
    }
    const wet = () => {
        history.push ("/wet-look-lash-extensions")
    }
    const volume = () => {
        history.push ("/volume-lash-extensions")
    }
    const mega = () => {
        history.push ("/mega-volume-lash-extensions")
    }
    const removal = () => {
        history.push("/lash-removal")
    }
    const keratin = () => {
        history.push ("/keratin-lashes")
    }
    const mineral = () => {
        history.push ("/mineral-lashes")
    }

    const text = language === "english" ? englishText : spanishText;


    return (
        <div>
        <div>
            <Navbar/>
        <div className="service-page">
        </div>
        <div className="service-menu">
        <h1>{text.servicesMenu.title}</h1>
        </div>

        <div className={`lash-title ${darkModeEnabled ? "light-mode-lash-title" : ""}`}>
            <h1> {text.eyelashExtensions.title}</h1>
        </div>

      <div>
          <div className={`services-cont ${darkModeEnabled ? "light-mode-services-cont" : ""}`}>
    <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>

            <h1>{text.classicLashExtension.title}</h1>
                <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p> {text.classicLashExtension.description}</p>
                </div>
                <div className="price-font">
                <h4> {text.classicLashExtension.price}</h4>
                </div>
                <button onClick={seeMore} className="services-btn">{text.classicLashExtension.button} </button>

            </div>


            <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
            <h1>{text.hybridLashExtensions.title}</h1>
            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p>{text.hybridLashExtensions.description}</p>
                </div>
                <div className="price-font">
                <h4> {text.hybridLashExtensions.price}</h4>
                </div>
    
                <button onClick= {hybrid} className="services-btn"> {text.hybridLashExtensions.button}</button>
            </div>

            <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
            <h1>{text.stripLashLookExtensions.title}</h1>
            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p>{text.stripLashLookExtensions.description}.</p>
                </div>
                <div className="price-font">
                <h4> {text.stripLashLookExtensions.price}</h4>
                </div>
                <button onClick= { strip } className="services-btn"> {text.stripLashLookExtensions.button}</button>
            </div>

            <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
            <h1>{text.wetLookLashExtensions.title}</h1>
            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p>{text.wetLookLashExtensions.description}</p>
                </div>
                <div className="price-font">
                <h4> {text.wetLookLashExtensions.price}</h4>
                </div>
                <button onClick= { wet }className="services-btn">{text.wetLookLashExtensions.button}</button>
            </div>

            <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
            <h1>{text.volumeLashExtensions.title}</h1>
            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p>{text.volumeLashExtensions.description}</p>
                </div>
                <div className="price-font">
                <h4> {text.volumeLashExtensions.price} </h4>
                </div>
                <button onClick = { volume } className="services-btn">{text.volumeLashExtensions.button}</button>
            </div>

            <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
            <h1>{text.megaVolumeExtensions.title}</h1>
            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p>{text.megaVolumeExtensions.description}</p>
                </div>
                <div className="price-font">
                <h4> {text.megaVolumeExtensions.price}</h4>
                </div>
                <button onClick = { mega } className="services-btn">{text.megaVolumeExtensions.button}</button>
            </div>

            <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
            <h1>{text.lashRemoval.title}</h1>
            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
            <p>{text.lashRemoval.description}</p>
                </div>
                <div className="price-font">
                <h4> {text.lashRemoval.price}</h4>
                </div>
                <button onClick = { removal } className="services-btn">{text.lashRemoval.button}</button>
            </div>


        </div>
</div>
        <div className={`lash-lift-cont ${darkModeEnabled ? "light-mode-lash-lift-cont" : ""}`}>
                    <div className={`lift-title ${darkModeEnabled ? "light-mode-lift-title" : ""}`}>
                        <h1>{text.keratinLashLift.header}</h1>
                    </div>

                    <div className={`services-cont ${darkModeEnabled ? "light-mode-services-cont" : ""}`}>
                    <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
                            <h1>{text.keratinLashLift.title}</h1>
                            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
                                <p>{text.keratinLashLift.description}</p>
                            </div>
                            <div className="price-font">
                                <h4>{text.keratinLashLift.price}</h4>
                            </div>
                            <button onClick = { keratin }className="services-btn">{text.keratinLashLift.button}</button>
                        </div>

                        <div className={`services-card ${darkModeEnabled ? "light-mode-service-card" : ""}`}>
                            <h1>{text.mineralBoostLashLift.title}</h1>
                            <div className={`services-font ${darkModeEnabled ? "light-mode-services-font" : ""}`}>
                                <p>{text.mineralBoostLashLift.description}</p>
                            </div>
                            <div className="price-font">
                                <h4>{text.mineralBoostLashLift.price}</h4>
                            </div>
                            <button onClick = { mineral } className="services-btn">{text.mineralBoostLashLift.button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;