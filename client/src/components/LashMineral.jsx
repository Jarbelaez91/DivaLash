import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"
import englishText from "./englishHomePage";
import spanishText from "./spanish";
import FAQSection from "./FAQSection";
import reel10 from "./reel10.jpeg"
import reel6 from "./reel6.jpeg"
import reel14 from "./reel14.jpeg"
import reel5 from "./reel5.jpeg"
import reel9 from "./reel9.jpeg"
import reel11 from "./reel11.jpeg"
import reel16 from "./reel16.jpeg"
import lash12 from "./lash12.jpeg"

function LashMineral ({darkModeEnabled, language}) {

    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <Navbar/>
            <div className = {`layout-container ${darkModeEnabled ? "light-mode-layout-container" : ""}`}>
        <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
        <NavLink className="classic-nav-link" to="/services">{text.serviceButton} </NavLink>
        <h1 className={`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}>{text.lashMineralPage.title}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.lashMineralPage.description}</p>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.lashMineralPage.description2}</p>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.lashMineralPage.description3}</p>
                <div className="photo-grid">
                        <img className="photo-item" src={reel10} alt="Eyelash Brush" />
                        <img className="photo-item" src={eyebrush} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel6} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel14} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash12} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel5} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel9} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel11} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel16} alt="Eyelash Brush" />
                </div>
                <div className="faq">
                <h2> 
                <FAQSection text={text} darkModeEnabled={darkModeEnabled} />
                </h2>   
                    <div>
        </div>
        </div>
        </div>
                <div className="side-boxes">

                <div className={`mineral-price-cont ${darkModeEnabled ? "light-mode-mineral-price-cont" : ""}`}>
                            <div className={ `mineral-price ${darkModeEnabled ? "light-mode-mineral-price" : ""}`}>
                            <div className="fullset-cont">
                                <h1 className="mineral-full-set"> {text.lashMineralPage.fullSet}</h1>
                                <h3 className={ `mineral-price ${darkModeEnabled ? "light-mode-mineral-price" : ""}`}> 
                                    {text.lashMineralPage.priceFullSet}</h3>
                            </div>
                            </div>
                            <div className={`mineral-cont ${darkModeEnabled ? "light-mode-mineral-cont" : ""}`}>
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.lashMineralPage.durationFullSet}</p>
                            </div>
                            
                            <NavLink to={{ pathname: "/calendar", state: { style: text.lashMineralPage.title, price: text.lashMineralPage.priceFullSet, type: text.lashMineralPage.fullSet, duration: text.lashMineralPage.durationFullSet } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>

                            </div>

                            <div className={`mineral-price-cont2 ${darkModeEnabled ? "light-mode-mineral-price-cont-2{" : ""}`}>

                            <div className={ `mineral-price ${darkModeEnabled ? "light-mode-mineral-price" : ""}`}>
                            <div className="fullset-cont">
                            <h1 className="mineral-full-set">{text.lashMineralPage.refill}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.lashMineralPage.priceRefill}</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.lashMineralPage.durationRefill}</p>
                            </div>
                            
                            <NavLink to={{ pathname: "/calendar", state: { style: text.lashMineralPage.title, price: text.lashMineralPage.priceRefill, type: text.lashMineralPage.refill, duration: text.lashMineralPage.durationRefill } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>
                            </div>
                            </div>


                        </div>
                </div>
                    
    )

}

export default LashMineral