import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"
import englishText from "./englishHomePage";
import spanishText from "./spanish";
import FAQSection from "./FAQSection";
import reel9 from "./reel9.jpeg"
import reel12 from "./reel12.jpeg"
import reel14 from "./reel14.jpeg"
import reel15 from "./reel15.jpeg"
import reel10 from "./reel10.jpeg"
import reel11 from "./reel11.jpeg"
import reel16 from "./reel16.jpeg"
import reel13 from "./reel13.jpeg"

function LashHybrid ({darkModeEnabled, language}) {

    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <Navbar/>
            <div className = {`layout-container ${darkModeEnabled ? "light-mode-layout-container" : ""}`}>
        <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
        <NavLink className="classic-nav-link" to="/services"> {text.serviceButton}</NavLink>
        <h1 className= {`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}> {text.hybridLashExtensionsPage.title} </h1>
        <p className= {`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.hybridLashExtensionsPage.description}</p>
            <h1 className={`class-sub-title ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.classicLashExtensions.outsideFills}</h1>
            <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>
                        {text.classicLashExtensions.outsideFillsDescription}</p>

                <div className="photo-grid">
                        <img className="photo-item" src={reel9} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel10} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel11} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel12} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel13} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel14} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel15} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel16} alt="Eyelash Brush" />
                        <img className="photo-item" src={eyebrush} alt="Eyelash Brush" />

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

                <div className= {`price-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                                <h1 className="price-full-set">{text.hybridLashExtensionsPage.fullSet} </h1>
                                <h3 className= {`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>$130</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className= {`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.hybridLashExtensionsPage.timeIcon}</p>
                            <p className= {`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>~2h 30min</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/calendar",
                                        state: {
                                        style: "Hybrid Lash Extensions",
                                        type: "Full Set",
                                        price: "$130",
                                        duration:"2h 30min"
                                        },
                                    }}
                                    >
                                    <button className= {`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>

                            <div className= {`refill-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                                <h1 className="price-full-set">{text.classicLashExtensions.refill}</h1>
                                <h3 className= {`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>$70</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className= {`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className= {`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>~1h 30min</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/calendar",
                                        state: {
                                        style: "Hybrid Lash Extensions",
                                        type: "Refill",
                                        price: "$70",
                                        duration:"1h 30min"
                                        },
                                    }}
                                    >
                                    <button className= {`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>
                            </div>
                            </div>


                        </div>
                </div>
                    
    )

}

export default LashHybrid


