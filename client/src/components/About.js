import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./about.css";
import ReactPlayer from 'react-player';
import englishText from "./englishHomePage";
import spanishText from "./spanish";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function About({ darkModeEnabled, language }) {
    const text = language === "english" ? englishText : spanishText;

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const reviews = [
        text.about.r1, text.about.r2, text.about.r3, text.about.r4, text.about.r5,
        text.about.r6, text.about.r7, text.about.r8, text.about.r9, text.about.r10,
        text.about.r11, text.about.r12, text.about.r13, text.about.r14, text.about.r15
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div>
            <div className="about-container">
                <div className="diploma"></div>
                <h2 className="about-us">{text.about.about}</h2>
            </div>
            <div className={`about-page ${darkModeEnabled ? "light-mode-about-page" : ""}`}>
                <Navbar />
                <div className={`about-cont ${darkModeEnabled ? "light-mode-about-cont" : ""}`}>
                    <h1 className="artist">{text.about.story}</h1>
                    <p className="p1">{text.about.p1}</p>
                    <p className="p1">{text.about.p2}</p>
                    <p className="p1"> {text.about.p3}</p>
                    <p className="motto">{text.about.p4}</p>
                </div>

                <div>
                    <h2 className={`artist-cont ${darkModeEnabled ? "light-mode-artist-cont" : ""}`}></h2>
                    <h2 className="artist-img"></h2>
                <div className={`video-cont ${darkModeEnabled ? "light-mode-video-cont" : ""}`}>
                    <h2 className="videoText">{text.about.video}</h2>
                    <ReactPlayer
                        className= "reactPlayer"
                        url='https://www.youtube.com/shorts/ytFrPFVlAQk'
                        controls={true}
                        width='600px'
                        height='400px'
                    />
                </div>
                </div>

                <div className={`map-cont ${darkModeEnabled ? "light-mode-map-cont" : ""}`}>
                    <h2>{text.about.location}</h2>
                    <iframe
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3782801912444!2d-73.96457591555364!3d40.73170109762348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596ab5c47a0f%3A0x4be8f733d328f903!2s23%20India%20St%2C%20Brooklyn%2C%20NY%2011222%2C%20USA!5e0!3m2!1sen!2sco!4v1717617586606!5m2!1sen!2sco"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className={`directions ${darkModeEnabled ? "light-mode-directions" : ""}`}>
                    <h3 className={`directions-border ${darkModeEnabled ? "light-mode-directions-border" : ""}`}>
                        {text.about.directions}
                    </h3>
                    <ul className="directions2">
                        <li>{text.about.d1}</li>
                        <li> {text.about.d2}</li>
                        <li> {text.about.d3}</li>
                        <li> {text.about.d4}</li>
                    </ul>
                    </div>
                </div>
                <div className={`review-cont ${darkModeEnabled ? "light-mode-review-cont" : ""}`}>
                    <h1 className={`review-font ${darkModeEnabled ? "light-mode-review-font" : ""}`}>{text.about.reviews}</h1>
                    <TransitionGroup>
                        <CSSTransition
                            key={currentReviewIndex}
                            timeout={500}
                            classNames="review"
                        >
                            <p className="review">{reviews[currentReviewIndex]}</p>
                        </CSSTransition>
                    </TransitionGroup>
                    
                </div>
                    
            </div>
        </div>
    );
}

export default About;
