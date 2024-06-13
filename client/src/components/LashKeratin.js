import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"
import englishText from "./englishHomePage";
import spanishText from "./spanish";
import FAQSection from "./FAQSection";
import reel1 from "./reel1.jpeg"
import reel2 from "./reel2.jpeg"
import reel4 from "./reel4.jpeg"
import reel5 from "./reel5.jpeg"
import reel6 from "./reel6.jpeg"
import reel7 from "./reel7.jpeg"
import reel8 from "./reel8.jpeg"
import reel3 from "./reel3.jpeg"

function LashKeratin ({darkModeEnabled, language}) {

    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <Navbar/>
            <div className = {`layout-container ${darkModeEnabled ? "light-mode-layout-container" : ""}`}>
        <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
        <NavLink className="classic-nav-link" to="/services">{text.serviceButton} </NavLink>
        <h1 className={`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}>{text.lashKeratinPage.title}</h1>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.lashKeratinPage.description}</p>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.lashKeratinPage.description2}</p>
                <p className={`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>{text.lashKeratinPage.description3}</p>
                <div className="photo-grid">
                        <img className="photo-item" src={reel1} alt="Eyelash Brush" />
                        <img className="photo-item" src={eyebrush} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel3} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel4} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel2} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel8} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel5} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel6} alt="Eyelash Brush" />
                        <img className="photo-item" src={reel7} alt="Eyelash Brush" />
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

                <div className={`keratin-price-cont ${darkModeEnabled ? "light-mode-keratin-price-cont" : ""}`}>
                            <div className={ `keratin-price ${darkModeEnabled ? "light-mode-keratin-price" : ""}`}>
                            <div className="fullset-cont">
                                <h1 className="keratin-full-set"> {text.lashKeratinPage.fullSet}</h1>
                                <h3 className={ `keratin-price ${darkModeEnabled ? "light-mode-keratin-price" : ""}`}> 
                                    {text.lashKeratinPage.priceFullSet}</h3>
                            </div>
                            </div>
                            <div className={`keratin-cont ${darkModeEnabled ? "light-mode-keratin-cont" : ""}`}>
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.lashKeratinPage.durationFullSet}</p>
                            </div>
                            
                            <NavLink to={{ pathname: "/calendar", state: { style: text.lashKeratinPage.title, price: text.lashKeratinPage.priceFullSet, type: text.lashKeratinPage.fullSet, duration: text.lashKeratinPage.durationFullSet } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>

                            </div>

                            <div className={`keratin-price-cont2 ${darkModeEnabled ? ".light-mode-keratin-price-cont-2{" : ""}`}>

                            <div className={ `keratin-price ${darkModeEnabled ? "light-mode-keratin-price" : ""}`}>
                            <div className="fullset-cont">
                            <h1 className="keratin-full-set">{text.lashKeratinPage.refill}</h1>
                            <h3 className={`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.lashKeratinPage.priceRefill}</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className={`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>{text.classicLashExtensions.timeIcon}</p>
                            <p className={`duration ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>
                                    {text.lashKeratinPage.durationRefill}</p>
                            </div>
                            
                            <NavLink to={{ pathname: "/calendar", state: { style: text.lashKeratinPage.title, price: text.lashKeratinPage.priceRefill, type: text.lashKeratinPage.refill, duration: text.lashKeratinPage.durationRefill } }}>
                                <button className={`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>{text.bookNow}</button>
                            </NavLink>
                            </div>
                            </div>
                            </div>


                        </div>
                </div>
                    
    )

}

export default LashKeratin