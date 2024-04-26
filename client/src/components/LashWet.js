import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"

function LashWet () {

    return (
        <div>
            <Navbar/>
        <div className="layout-container">
        <div className="classic-cont">
        <NavLink className="classic-nav-link" to="/services"> ← Services </NavLink>
            <h1 className="classic-title">Classic Lash Extensions</h1>
            <p className="classic-desc">This look mimics the look of your lash extensions when you get them wet; creating a spikier and more wispy effect. 
            The Wet Lash Look appears similar to Classic Lash Extensions, but they are thicker and bolder looking because of the wider appearance of the lash bundles. 
            There are certain lashes who are suitable for this look, a person with natural lashes that are moderate to full.If you are unsure 
            feel free to text us a picture of your lashes for a quick consultation. We wouldn’t recommend this look for someone 
            with sparse lashes since sparse lashes benefit most from volume fans that are fat and wide as opposed to skinny and 
            straight like the style demanded from this look.</p>
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
                                <h3 className="price">$140</h3>
                            </div>
                            </div>
                            <div className="fullset-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~2hours</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/calendar",
                                        state: {
                                        style: "Wet Look Lash Extensions",
                                        type: "Full Set",
                                        price: "$140",
                                        duration:"2 hours "
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
                                <h3 className="price">$65</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~1h 30min</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/calendar",
                                        state: {
                                        style: "Wet Look Lash Extensions",
                                        type: "Refill",
                                        price: "$65",
                                        duration:"1h 30min"
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


export default LashWet