import React from "react";
import Navbar from "./Navbar";
import "./about.css";
import ReactPlayer from 'react-player';
import englishText from "./englishHomePage";
import spanishText from "./spanish";

function About({ darkModeEnabled, language }) {
    const text = language === "english" ? englishText : spanishText;

    return (
        <div>
            <div className="about-container">
                <div className="diploma"></div>
                <h2 className="about-us">{text.about.about}</h2>
            </div>
            <div className="about-page">
                <Navbar />
                <div className="about-cont">
                    <h1 className="artist">{text.about.story}</h1>
                    <p>{text.about.p1}</p>
                    <p>{text.about.p2}</p>
                    <p>{text.about.p3}</p>
                    <p className="motto">{text.about.p4}</p>
                </div>
                <div className="video-cont">
                    <h2>{text.about.video}</h2>
                    <ReactPlayer
                        url='https://www.youtube.com/shorts/ytFrPFVlAQk'
                        controls={true}
                        width='600px'
                        height='400px'
                    />
                </div>
                <div className="map-cont">
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
                </div>
                <div className="review-cont">
                    <h1>{text.about.reviews}</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
