// DarkModeToggle.js
import React from "react";

function DarkModeToggle({ darkModeEnabled, toggleDarkMode }) {
  const handleToggle = () => {
    toggleDarkMode(); 
  };

  return (
    <div className="light-mode-toggle">
      <button onClick={handleToggle}>
        {darkModeEnabled ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
