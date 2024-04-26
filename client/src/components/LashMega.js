import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"

function LashMega () {

    return (
        <div>
            <Navbar/>
        <div className="layout-container">
        <div className="classic-cont">
        <NavLink className="classic-nav-link" to="/services"> ← Services </NavLink>
            <h1 className="classic-title">Mega Volume Lash Extensions</h1>
            <p className="classic-desc">Mega volume lash extensions are soft and super light. 
            The thinnest imaginable lashes! Beautiful 0.03 lashes the lightest weight possible 
            that are perfect for a Mega Volume look. These lashes are designed to be very 
            lightweight to make fans of 10-16D! This does not damage the natural lash at all. 
            A set made of these lashes is dramatic, soft, wispy, giving intense density and 
            blackness to the lashes. We customize each set using different lengths, thickness and curls. </p>
            <h1 className="class-sub-title">OUTSIDE FILLS FOR LASHES</h1>
            <p className="classic-desc">We do not perform refill services on work that was done from 
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
                    <p className="faq-questions">  ⦊  What do I do to prepare for my lash extension appointment?</p>
                    <p className="faq-questions"> ⦊ How long do lash extensions last?</p>
                    <p className="faq-questions"> ⦊ When should I get my lash extensions filled?</p>
                    <p className="faq-questions"> ⦊ I had my lashes done at a different salon or by another person; can I still get a fill at Lash Love Beauty Bar?</p>
                    <p className="faq-questions"> ⦊ Will lash extensions damage my natural lashes?</p>
                    <p className="faq-questions"> ⦊ I just had my lashes done and a few have fallen out, or I had an allergic reaction what should I do?</p>
                    <p className="faq-questions"> ⦊ I have a wedding, special occasion, trip coming up and I have never had lash extensions, what set should I get?</p>
                    <p className="faq-questions"> ⦊ Can I swim, shower, exercise, or visit a spa while wearing eyelash extensions?</p>
                    <p className="faq-questions"> ⦊ How do I take care of my new eyelash extensions?</p>
                    </div>
                    <div>
        </div>
        </div>
        </div>
                <div className="side-boxes">

                        <div className="price-cont">
                            <div className="classic-price">
                            <div className="fullset-cont">
                                <h1 className="price-full-set">FULL SET </h1>
                                <h3 className="price">$170</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~3hours</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/calendar",
                                        state: {
                                        style: "Mega Volume Extensions",
                                        type: "Full Set",
                                        price: "$170",
                                        duration:"3 hours"
                                        },
                                    }}
                                    >
                                    <button className="booknow">Book Now!</button>
                            </NavLink>
                            </div>

                            <div className="refill-cont">
                            <div className="classic-price">
                            <div className="fullset-cont">
                                <h1 className="price-full-set">REFILL </h1>
                                <h3 className="price">$90</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~2hours</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/calendar",
                                        state: {
                                        style: "Mega Volume Extension",
                                        type: "Refill",
                                        price: "$90",
                                        duration:"2 hours"
                                        },
                                    }}
                                    >
                                    <button className="booknow">Book Now!</button>
                            </NavLink>
                            </div>
                            </div>
                            </div>


                        </div>
                </div>
                    
    )

}

export default LashMega