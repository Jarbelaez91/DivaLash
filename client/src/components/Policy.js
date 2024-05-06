import React from "react";
import "./policy.css"; // Added the "from" keyword

function Policy({ isOpen, onClose, darkModeEnabled }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className= {`modal-content ${darkModeEnabled ? "light-mode-confirmation" : ""}`} >
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Cancellation Policy</h2> 
        <h3>We ask that you please reschedule or cancel at least 1 day before 
            the beginning of your appointment or you may be charged a 
            cancellation fee of $50.00. 
            </h3>
            
           <h3> If you need to cancel or 
            reschedule your appointment you must cancel or reschedule 
            24 hours in advance or the booking system will automatically 
            charge a fee. Any notice less than 3 hours before your 
            scheduled appointment time will be considered a NO-SHOW 
            and will be charged full price of the service. We are aware, 
            emergencies, illness and unforeseen circumstances can 
            happen but unfortunately our system does NOT ACCEPT ANY REFUNDS.
            When canceling/rescheduling less than the 24 hour notice or 
            not responding to text confirmations, it impacts Diva Lashes and the opportunity to service other clients. </h3>


            <h3>We do not perform refill services on work that was done from 
            another outside salon/artist . If you currently have lash extensions on 
            from another salon/artist , you must have them removed and have a 
            consultation before receiving your first full set service with 
            us (lash removal fee will apply)</h3>
      </div>
    </div>
  );
}

export default Policy;
