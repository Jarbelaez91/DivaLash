// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import About from "./About";
import Services from "./Services";
import BookOnline from "./BookOnline";
import LashClassic from "./LashClassic";
import LashHybrid from "./LashHybrid";
import LashStrip from "./LashStrip";
import LashWet from "./LashWet";
import LashVolume from "./LashVolume";
import LashMega from "./LashMega";
import LashRemoval from "./LashRemoval";
import LashKeratin from "./LashKeratin";
import LashMineral from "./LashMineral";
import BookingForm from "./BookingForm";
import Calendar from "./Calendar";
import Checkout from "./Checkout";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    localStorage.getItem("darkModeEnabled") === "true"
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkModeEnabled(prevMode => !prevMode);
  };

  // Set initial dark mode state from local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    setDarkModeEnabled(storedDarkMode);
  }, []);

  // Update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkModeEnabled", darkModeEnabled);
  }, [darkModeEnabled]);

  return (
    <Router>
      <div className={`App ${darkModeEnabled ? "dark-mode" : ""}`}>
        <Navbar darkModeEnabled={darkModeEnabled} toggleDarkMode={toggleDarkMode} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/bookonline" component={BookOnline} />
          <Route path="/classic-lash-extensions" component={LashClassic} />
          <Route path="/hybrid-lash-extensions" component={LashHybrid} />
          <Route path="/strip-lash-look-extensions/" component={LashStrip} />
          <Route path="/wet-look-lash-extensions" component={LashWet} />
          <Route path="/volume-lash-extensions/" component={LashVolume} />
          <Route path="/mega-volume-lash-extensions/" component={LashMega} />
          <Route path="/lash-removal" component={LashRemoval} />
          <Route path="/keratin-lashes" component={LashKeratin} />
          <Route path="/mineral-lashes" component={LashMineral} />
          <Route path="/booking" component={BookingForm} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
