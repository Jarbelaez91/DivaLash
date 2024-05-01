// DarkModeToggle.js
import React from "react";

function DarkModeToggle({ darkModeEnabled, toggleDarkMode }) {
  const handleToggle = () => {
    toggleDarkMode(); // Toggle the dark mode state
  };

  return (
    <div className="dark-mode-toggle">
      <button onClick={handleToggle}>
        {darkModeEnabled ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
