import React from "react";
import "./confirmation.css"


function ConfirmationPage ({darkModeEnabled}) {


return(
    <div className= {`confirmation ${darkModeEnabled ? "light-mode-confirmation" : ""}`} >
    <h2>
        Confirmed!
    </h2>
    <h3>
        We can't wait to see you on XXX
    </h3>
    <button className= {`backHomeButton ${darkModeEnabled ? "light-mode-back" : ""}`} > Back to Diva Lashes</button>
    </div>


)
}


export default ConfirmationPage