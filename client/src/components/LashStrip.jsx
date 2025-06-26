import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import englishText from "./englishHomePage";
import spanishText from "./spanish";
import FAQSection from "./FAQSection";
import lash1 from "./lash1.jpeg"
import reel6 from "./reel6.jpeg"
import lash13 from "./lash13.jpeg"
import lash14 from "./lash14.jpeg"
import lash12 from "./lash12.jpeg"
import lash11 from "./lash11.jpeg"
import lash10 from "./lash10.jpeg"
import lash9 from "./lash9.jpeg"
import reel5 from "./reel5.jpeg"

function LashStrip ({darkModeEnabled, language}) {

    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <Navbar/>
            <div className = {`layout-container ${darkModeEnabled ? "light-mode-layout-container" : ""}`}>
            <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
                <NavLink className="classic-nav-link" to="/services">{text.serviceButton} </NavLink>
                <h1 className={`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}>{text.stripLashExtensionsPage.title}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.stripLashExtensionsPage.description}</p>
                <h1 className={`class-sub-title ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.classicLashExtensions.outsideFills}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>
                        {text.classicLashExtensions.outsideFillsDescription}</p>
                <div className="photo-grid">
                        <img className="photo-item" src={lash1} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel6} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash13} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash14} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash12} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash11} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel5} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash9} alt="Eyelash Brush" />
                        <img className="photo-item" src={lash10} alt="Eyelash Brush" />
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
                            <h1 className="price-full-set">{text.stripLashExtensionsPage.fullSet}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.stripLashExtensionsPage.priceFullSet}</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                {text.classicLashExtensions.durationFullSet}</p>
                            </div>
                                <NavLink to={{ pathname: "/calendar", state: { style: text.stripLashExtensionsPage.title, price: text.stripLashExtensionsPage.priceFullSet, type: text.fullSet, duration: text.classicLashExtensions.durationFullSet } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                                </NavLink>
                            </div>
                            <div className={`refill-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                            <h1 className="price-full-set">{text.classicLashExtensions.refill}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.stripLashExtensionsPage.priceRefill}</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.classicLashExtensions.durationRefill}</p>
                            </div>
                            <NavLink to={{ pathname: "/calendar", state: { style: text.stripLashExtensionsPage.title, price: text.stripLashExtensionsPage.priceRefill, type: text.refill, duration: text.stripLashExtensionsPage.durationRefill } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LashStrip