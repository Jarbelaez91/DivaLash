import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"

function LashKeratin () {

    return (
        <div>
            <Navbar/>
        <div className="layout-container">
        <div className="classic-cont">
        <NavLink className="classic-nav-link" to="/services"> ← Services </NavLink>
            <h1 className="classic-title">Keratin Lash Lift & Tint</h1>
            <p className="classic-desc">Our vegan, cruelty free lash lift treatment is specifically formulated to lift and maintain 
            hair elasticity by controlling its loss of humidity, preventing hair breakage. This formula can even be used on those 
            with gaps or damaged lashes. The damaged lash hair is infused with specialized proteins, thus preventing any further 
            weakening of the hair fiber, and reducing hair loss. The more the hair has been damaged, the easier it is for the formula 
            to penetrate. Likewise, this treatment makes the lash hair easier to comb and detangle, giving it a soft and silky feel 
            and fully moisturizing the root of the hair helping maintain its natural structure. All of these benefits are due to the 
            formula’s capacity to strengthen hair follicles, generate collagen production, keeping hair moisturized, nourished and shiny. 
            It also prevents cell damage by preventing premature hair ageing and dryness. <br></br><br></br>This unique lash lift treatment also infuses 
            powerful growth enhancers into the hair shaft while the cuticle is open, and your lashes are being lifted. It improves the rate of hair growth. 
            <br></br><br></br>This treatment is vegan, environmentally friendly, cruelty free, sulfate free, sodium bromate free, and low odor. Gentle Ph level, 
            chemicals that are used are of the highest quality grades only. Developed in Sweden. If you have extremely short lashes, 
            we recommend you purchase our lash serum to grow your lashes until they are a suitable length for this treatment. Lasts 4 - 8 weeks depending on lash cycle and aftercare. </p>
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

                        <div className="keratin-price-cont">
                            <div className="keratin-price">
                            <div className="fullset-cont">
                                <h1 className="keratin-full-set">KERATIN LASH LIFT & TINT </h1>
                                <h3 className="keratin-price">$155</h3>
                            </div>
                            </div>
                            <div className="keratin-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~1hour</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/booking",
                                        state: {
                                        style: "KERATIN LASH LIFT & TINT",
                                        type: "Keratin-Basic",
                                        price: "$155",
                                        },
                                    }}
                                    >
                                    <button className="booknow">Book Now!</button>
                            </NavLink>
                            </div>

                            <div className="keratin-price-cont-2">
                            <div className="keratin-price">
                            <div className="fullset-cont">
                                <h1 className="keratin-full-set">KERATIN LASH LIFT & TINT + HYDROJELLY FACIAL MASK </h1>
                                <h3 className="keratin-price">$175</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~1h 30min</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/booking",
                                        state: {
                                        style: "KERATIN LASH LIFT & TINT + HYDROJELLY FACIAL MASK",
                                        type: "Keratin-Full",
                                        price: "$175",
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

export default LashKeratin