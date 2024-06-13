import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"
import englishText from "./englishHomePage";
import spanishText from "./spanish";
import FAQSection from "./FAQSection";
import lash10 from "./lash10.jpeg"
import lash12 from "./lash12.jpeg"
import lash14 from "./lash14.jpeg"
import lash5 from "./lash5.jpeg"
import reel3 from "./reel3.jpeg"
import reel4 from "./reel4.jpeg"
import lash8 from "./lash8.jpeg"
import reel13 from "./reel13.jpeg"
import lash3 from "./lash3.jpeg"

function LashVolume ({darkModeEnabled, language}) {

    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <Navbar/>
            <div className = {`layout-container ${darkModeEnabled ? "light-mode-layout-container" : ""}`}>
            <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
                <NavLink className="classic-nav-link" to="/services">{text.serviceButton} </NavLink>
                <h1 className={`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}>{text.volumeLashExtensionsPage.title}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.volumeLashExtensionsPage.description}</p>
                <h1 className={`class-sub-title ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.classicLashExtensions.outsideFills}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>
                        {text.classicLashExtensions.outsideFillsDescription}</p>
                <div className="photo-grid">
                        <img className="photo-item" src={lash10} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash12} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash14} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash5} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel13} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel3} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash8} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash3} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel4} alt="Eyelash Brush" />
                </div>
                <div className="faq">
                <h2> 
                <FAQSection text={text} darkModeEnabled={darkModeEnabled} />
                </h2>   
                    </div>
                </div>
                <div className="side-boxes">
                <div className={`price-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                            <h1 className="price-full-set">{text.volumeLashExtensionsPage.fullSet}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.volumeLashExtensionsPage.priceFullSet}</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                {text.volumeLashExtensionsPage.durationFullSet}</p>
                            </div>
                                <NavLink to={{ pathname: "/calendar", state: { style: text.volumeLashExtensionsPage.title, price: text.volumeLashExtensionsPage.priceFullSet, type: text.fullSet, duration: text.classicLashExtensions.durationFullSet } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                                </NavLink>
                            </div>
                            <div className={`refill-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                            <h1 className="price-full-set">{text.classicLashExtensions.refill}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.volumeLashExtensionsPage.priceRefill}</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.volumeLashExtensionsPage.durationRefill}</p>
                            </div>
                            <NavLink to={{ pathname: "/calendar", state: { style: text.volumeLashExtensionsPage.title, price: text.volumeLashExtensionsPage.priceRefill, type: text.refill, duration: text.volumeLashExtensionsPage.durationRefill } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LashVolume