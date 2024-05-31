import React from "react";
import "./policy.css"; 
import englishText from "./englishHomePage";
import spanishText from "./spanish";

function Policy({ isOpen, onClose, darkModeEnabled, language }) {

const text = language === "english" ? englishText : spanishText;

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className= {`modal-content ${darkModeEnabled ? "light-mode-confirmation" : ""}`} >
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{text.policy.title}</h2> 
        <h3>{text.policy.p1} 
            </h3>
            
           <h3> {text.policy.p2} </h3>


            <h3>{text.policy.p3}</h3>
      </div>
    </div>
  );
}

export default Policy;
