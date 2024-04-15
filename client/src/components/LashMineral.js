import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./lashclassic.css"
import eyebrush from "./eyelash-brush.jpeg"

function LashMineral () {

    return (
        <div>
            <Navbar/>
        <div className="classic-cont">
        <NavLink className="classic-nav-link" to="/services"> ← Services </NavLink>
            <h1 className="classic-title">Mineral Lash Lift & Tint</h1>
            <p className="classic-desc">
            Our Mineral Boost Lash Lift has the exact same formula as our traditional 
                                    keratin lash lift, except we are adding this exclusive mask. It extends 
                                    the longevity of your lash lift for up to 3 weeks and provides maximum 
                                    protection, strength, and hydration.</p>
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
        </div>
        
        </div>

        </div>
    )

}

export default LashMineral