import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"

function LashHybrid ({darkModeEnabled}) {

    return (
        <div>
            <Navbar/>
        <div className="layout-container">
        <div className= {`classic-cont ${darkModeEnabled ? "light-mode-classic-cont" : ""}`}>
        <NavLink className="classic-nav-link" to="/services"> ← Services </NavLink>
        <h1 className= {`classic-title ${darkModeEnabled ? "light-mode-classic-title" : ""}`}> Hybrid Lash Extensions</h1>
        <p className= {`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>Hybrid lashes are combined with Volume lashes and 
            Classic lashes to create the perfect in-between set. 
            This is a great option for those that desire a little more volume than the Classic lashes. 
            We customize each set using different lengths, thickness and curls. </p>
            <h1 className= {`class-sub-title ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>OUTSIDE FILLS FOR LASHES</h1>
            <p className= {`classic-desc ${darkModeEnabled ? "light-mode-classic-desc" : ""}`}>
                another outside salon/artist. If you currently have lash 
                extensions on from another salon/artist, you must have them 
                removed and have a consultation before receiving your first 
                full set service with us (lash removal fee will apply). 
                We encourage you when booking to allow yourself sufficient 
                time and not bringing children or extra people to your 
                appointment. We want to give you the best service possible 
                and direct all of our time to you during your appointment.</p>
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
            <h2 className="faq"> FAQ'S</h2>
                    <div>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}>  ⦊  What do I do to prepare for my lash extension appointment?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ How long do lash extensions last?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ When should I get my lash extensions filled?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ I had my lashes done at a different salon or by another person; can I still get a fill at Lash Love Beauty Bar?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ Will lash extensions damage my natural lashes?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ I just had my lashes done and a few have fallen out, or I had an allergic reaction what should I do?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ I have a wedding, special occasion, trip coming up and I have never had lash extensions, what set should I get?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ Can I swim, shower, exercise, or visit a spa while wearing eyelash extensions?</p>
                    <p className= {`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}> ⦊ How do I take care of my new eyelash extensions?</p>
                    </div>
                    <div>
        </div>
        </div>
        </div>
                <div className="side-boxes">

                <div className= {`price-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                                <h1 className="price-full-set">FULL SET </h1>
                                <h3 className= {`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>$130</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className= {`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>🕒 Time</p>
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
                                    <button className= {`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>Book Now!</button>
                            </NavLink>
                            </div>

                            <div className= {`refill-cont ${darkModeEnabled ? "light-mode-price-cont" : ""}`}>
                            <div className="classic-price">
                            <div className="fullset-cont">
                                <h1 className="price-full-set">REFILL </h1>
                                <h3 className= {`price ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>$70</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className= {`time-font ${darkModeEnabled ? "light-mode-classic-price" : ""}`}>🕒 Time</p>
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
                                    <button className= {`booknow ${darkModeEnabled ? "light-mode-booknow" : ""}`}>Book Now!</button>
                            </NavLink>
                            </div>
                            </div>
                            </div>


                        </div>
                </div>
                    
    )

}

export default LashHybrid


