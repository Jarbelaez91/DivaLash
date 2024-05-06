import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
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
import ConfirmationPage from "./ConfirmationPage";
import Policy from "./Policy";
import "./app.css";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    localStorage.getItem("darkModeEnabled") === "true"
  );

  const toggleDarkMode = () => {
    setDarkModeEnabled(prevMode => !prevMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    setDarkModeEnabled(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkModeEnabled", darkModeEnabled);
  }, [darkModeEnabled]);

  return (
    <div className={`App ${darkModeEnabled ? "light-mode" : ""}`}>
      <DarkModeToggle darkModeEnabled={darkModeEnabled} toggleDarkMode={toggleDarkMode} />
      <Router> {/* Move Router here */}
        <Switch>
          <Route exact path="/"> <HomePage darkModeEnabled={darkModeEnabled} /> </Route>
          <Route path="/about" component={About} />
          <Route exact path="/services"> <Services darkModeEnabled={darkModeEnabled} /> </Route>
          <Route path="/bookonline" component={BookOnline} />
          <Route exact path="/classic-lash-extensions"> <LashClassic darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/hybrid-lash-extensions"> <LashHybrid darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/strip-lash-look-extensions/"> <LashStrip darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/wet-look-lash-extensions"> <LashWet darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/volume-lash-extensions/"> <LashVolume darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/mega-volume-lash-extensions/"> <LashMega darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/lash-removal"> <LashRemoval darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/keratin-lashes"> <LashKeratin darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="//mineral-lashes"> <LashMineral darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/booking"> <BookingForm darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/calendar"> <Calendar darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/checkout"> <Checkout darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/confirmation"> <ConfirmationPage darkModeEnabled={darkModeEnabled} /> </Route>
          <Route exact path="/checkout"> <Policy isOpen={true} onClose={() => {}} darkModeEnabled={darkModeEnabled} />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
