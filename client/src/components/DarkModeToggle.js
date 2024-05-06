// DarkModeToggle.js
import React from "react";
import "./DarkModeToggle.css"

function DarkModeToggle({ darkModeEnabled, toggleDarkMode }) {
  const handleToggle = () => {
    toggleDarkMode(); 
  };

  return (
    <div >
      <button className="light-mode-toggle" onClick={handleToggle}>
        {darkModeEnabled ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
