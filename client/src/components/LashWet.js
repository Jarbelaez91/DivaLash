import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"
import englishText from "./englishHomePage";
import spanishText from "./spanish";

function LashWet ({darkModeEnabled, language}) {

    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <Navbar/>
            <div className = {`layout-container ${darkModeEnabled ? "light-mode-layout-container" : ""}`}>
            <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
                <NavLink className="classic-nav-link" to="/services">{text.serviceButton} </NavLink>
                <h1 className={`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}>{text.wetLookLashExtensionsPage.title}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.wetLookLashExtensionsPage.description}</p>
                <h1 className={`class-sub-title ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.classicLashExtensions.outsideFills}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>
                        {text.classicLashExtensions.outsideFillsDescription}</p>
                <div className="photo-grid">
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                    <img src={eyebrush} ></img>
                </div>
                <div className="faq">
                <h2 className="faq">{text.faq.title}</h2>
                        <div>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                  {text.faq.question1}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question2}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question3}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question4}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question5}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question6}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question7}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question8}</p>
                            <p className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>
                                 {text.faq.question9}</p>
                                 </div>
                    </div>
                </div>
                <div className="side-boxes">
                <div className={`price-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                            <h1 className="price-full-set">{text.wetLookLashExtensionsPage.fullSet}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.wetLookLashExtensionsPage.priceFullSet}</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                {text.classicLashExtensions.durationFullSet}</p>
                            </div>
                                <NavLink to={{ pathname: "/calendar", state: { style: text.wetLookLashExtensionsPage.title, price: text.wetLookLashExtensionsPage.priceFullSet, type: text.fullSet, duration: text.classicLashExtensions.durationFullSet } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                                </NavLink>
                            </div>
                            <div className={`refill-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                            <h1 className="price-full-set">{text.classicLashExtensions.refill}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.wetLookLashExtensionsPage.priceRefill}</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.classicLashExtensions.durationRefill}</p>
                            </div>
                            <NavLink to={{ pathname: "/calendar", state: { style: text.wetLookLashExtensionsPage.title, price: text.wetLookLashExtensionsPage.priceRefill, type: text.refill, duration: text.wetLookLashExtensionsPage.durationRefill } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LashWet