import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"

function LashMineral () {

    return (
        <div>
            <Navbar/>
        <div className="layout-container">
        <div className="classic-cont">
        <NavLink className="classic-nav-link" to="/services"> ← Services </NavLink>
            <h1 className="classic-title">Mineral Boost Lash Lift & Tint</h1>
            <p className="classic-desc">This is our longest lasting lash lift. Our Mineral Boost Lash Lift has the exact same formula as our 
            traditional keratin lash lift except we are adding on this exclusive mask. In this lash lift treatment, 
            there are 4 products applied versus 3. Permalift™ Mineral Boost is the first product of its kind in the world! 
            Our unique and patented formula contains 16 active ingredients (28 total ingredients) that target intensive 
            growth of lashes. This unique combination of ingredients promotes new hair growth and activates dormant hair 
            follicles. This special mineral boosting mask will also extend the longevity of your lash lift for up to 3 
            weeks. It will also prevent lashes after being lifted from going in different directions during the growing out process.
            Immediately after the treatment, your lashes will feel heavily conditioned and hydrated, relieving the lashes of any dryness 
            or inflammation caused by stress or damage to the lash bed. Coated with a sensational mineral gloss, your lashes will radiate 
            health and be purified of any bad toxins allowing the full effect of the treatment to be absorbed restoring shine and nourishment.
            <br></br> <br></br>RESULTS 3+ Weeks<br></br><br></br> Targeting conditions like Trichotillomania, anxiety, and ageing, 
            Permalift™ Mineral Boost works by injecting the lash follicles and continues to work over three weeks to provide maximum 
            protection, strength, and hydration. Extremely noticeable longer, fuller, and thicker lashes will emerge from this treatment. 
            The hair will expand in width, volume, and length, drastically creating nutrified hair fibers.
            <br></br><br></br>This treatment is vegan, environmentally friendly, cruelty free, sulfate free, sodium bromate free, and low odor. 
            Gentle Ph level, chemicals that are used are of the highest quality grades only. Developed in Sweden.<br></br><br></br> 
            If you have extremely short lashes, we recommend you purchase our lash serum to grow your lashes until they are a suitable length for this treatment.
            Lasts 6 - 12 weeks depending on lash cycle and aftercare. </p>
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

                        <div className="mineral-price-cont">
                            <div className="mineral-price">
                            <div className="fullset-cont">
                                <h1 className="mineral-full-set">MINERAL BOOST LASH LIFT & TINT </h1>
                                <h3 className="mineral-price">$155</h3>
                            </div>
                            </div>
                            <div className="mineral-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~1hour</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/booking",
                                        state: {
                                        style: "Mineral Boost Lash Lift & Tint",
                                        type: "Mineral-Basic",
                                        price: "$155",
                                        },
                                    }}
                                    >
                                    <button className="booknow">Book Now!</button>
                            </NavLink>
                            </div>

                            <div className="mineral-price-cont-2">
                            <div className="mineral-price">
                            <div className="fullset-cont">
                                <h1 className="mineral-full-set">MINERAL BOOST LASH LIFT & TINT + HYDROJELLY FACIAL MASK</h1>
                                <h3 className="mineral-price">$175</h3>
                            </div>
                            <div className="fullset-cont">
                            <p className="time-font">🕒 Time</p>
                            <p className="duration">~1h 30min</p>
                            </div><NavLink
                                    to={{
                                        pathname: "/booking",
                                        state: {
                                        style: "Mineral Boost Lash Lift & Tint + Hydrojelly Facial Mask",
                                        type: "Mineral-full",
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

export default LashMineral