import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./checkout.css";

function Checkout({darkModeEnabled}) {
  const history = useHistory();
  const location = useLocation(); // Import useLocation from react-router-dom
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const { appointmentSummary, selectedDate, selectedTime, price, duration } = location.state || {}; // Destructure data from location state

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const getDayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };
  
  // Function to get the month name (e.g., January, February, etc.)
  const getMonthName = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
  };
  
  // Function to get the suffix for the day of the month (e.g., st, nd, rd, th)
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  useEffect(() => {
    if (!selectedDate || !selectedTime) {
      // Redirect if data is missing
      history.push("/"); // Redirect to the calendar page
    }
  }, [selectedDate, selectedTime, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/");
  }

  return (
    <div>
        <button className={`calendar-back-btn ${darkModeEnabled ? "light-mode-calendar-back-btn" : ""}`} onClick={() => history.goBack()}>← Back</button>
    <div className="checkout-page">
      <div className={`booking-container ${darkModeEnabled ? "light-mode-booking-container" : ""}`}>
        <div>
          <h2 className={`booking-title ${darkModeEnabled ? "light-mode-booking-title" : ""}`}> Contact Info</h2>
          <form onSubmit={handleSubmit}>
            <div>
            <div className="name-container">
                <input
                    className="name-input"
                    type="text"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    className="name-input"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    required
                />
            </div>

            </div>

            <div className="name-container">
              <input
                className="email-input"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <input
              className="number-input"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
           


    <div className="cc-container">

    <input 
    className="credit-card-input" 
    type="number" 
    placeholder="Card Number" 
    value={formData.cardNumber} 
    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} 
    required 
    maxLength="10" 
    pattern="\d{10}"  
    title="Please enter exactly 10 numbers" 
/>

    
<input
    className="credit-card-input1"
    type="text"
    placeholder="Exp (MM/YY)"
    value={formData.expiration}
    onChange={(e) => {
        const input = e.target.value;
        const formattedInput = input
            // Remove any non-numeric characters
            .replace(/\D/g, "")
            // Ensure only 4 digits are allowed
            .slice(0, 4)
            // Insert "/" after the first two digits
            .replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        
        // Update state with the formatted input
        setFormData({ ...formData, expiration: formattedInput });
    }}
    required
    pattern="(0[1-9]|1[0-2])\/(2[5-9]|3[0-9])" // Pattern for MM/YY format, with ranges for months and years
    title="Please enter a valid expiration date in the format MM/YY, where MM is from 01 to 12 and YY is from 25 to 39" // Error message for pattern validation
/>



    <input
        className="credit-card-input2"
        type="number"
        placeholder="CVC"
        value={formData.cvc}
        onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
        required
        maxLength="3"
        pattern="\d{3}"   
    />
</div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h2 className= {`cancellation-policy ${darkModeEnabled ? "light-mode-cancellation-policy" : ""}`} > Cancellation policy</h2>
          <h3 className={`cancellation-policy1 ${darkModeEnabled ? "light-mode-cancellation-policy" : ""}`} >
            Please reach out to Diva Lashes to cancel or reschedule at least 24 hours before your scheduled appointment.
            After that, you may be charged a cancellation fee of $50.00.
          </h3>
          <div>
            <p>See full policy</p>
            <div>
              <label className={`cancellation-policy2 ${darkModeEnabled ? "light-mode-cancellation-policy" : ""}`} >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                I have read and agreed to the cancellation policy of Diva Lashes.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={`appointment-sum ${darkModeEnabled ? "light-mode-appointment-sum" : ""}`}>
  <h2 className={`appointment-title ${darkModeEnabled ? "light-mode-booking-title" : ""}`}>Appointment Summary</h2>
  <div>
    <p className={`appointment-time ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}>
      {selectedDate && getDayOfWeek(selectedDate)}, {getMonthName(selectedDate)} {selectedDate.getDate()}{getDaySuffix(selectedDate.getDate())} {selectedDate.getFullYear()} &nbsp; - &nbsp;  {selectedTime}
    </p>
    <p className={`style-summary ${darkModeEnabled ? "light-mode-booking-title" : ""}`}>{appointmentSummary}</p>
    <div className="price-section">
      <div className="subtotal-container">
        <p className={`subtotal ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> Subtotal:</p>
        <p className={`tax ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> Tax: </p>
        <p className={`price-total ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> Total:</p>
      </div>
      {/* Prices on the right */}
      <div className={`subtotal1 ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}>
        <p>{parseFloat(price).toFixed(2)}</p>
        <p>${(parseFloat(price) * 0.08).toFixed(2)}</p>
        <p className={`price-total1 ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> ${(parseFloat(price) + (parseFloat(price) * 0.08)).toFixed(2)}</p>
      </div>
    </div>
    <div> 
      <button className={`book-appointment ${darkModeEnabled ? "light-mode-appointment-sum" : ""}`}> Book Appointment</button>
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default Checkout;
