import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./checkout.css";

function Checkout() {
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
    // Add your logic here to handle form submission
    // You can access formData.name, formData.lastname, etc.

    // Redirect after form submission
    history.push("/");
  }

  return (
    <div>
        <button className="calendar-back-btn" onClick={() => history.goBack()}>← Back</button>
    <div className="checkout-page">
      <div className="booking-container">
        <div>
          <h2 className="booking-title">Contact Info</h2>
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
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h2 className="cancellation-policy">Cancellation policy</h2>
          <h3 className="cancellation-policy1">
            Please reach out to Diva Lashes to cancel or reschedule at least 24 hours before your scheduled appointment.
            After that, you may be charged a cancellation fee of $50.00.
          </h3>
          <div>
            <p>See full policy</p>
            <div>
              <label className="cancellation-policy2">
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
      <div className="appointment-sum">
  <h2 className="appointment-title">Appointment Summary</h2>
  <div>
    <p className="appointment-time">
      {selectedDate && getDayOfWeek(selectedDate)}, {getMonthName(selectedDate)} {selectedDate.getDate()}{getDaySuffix(selectedDate.getDate())} {selectedDate.getFullYear()} &nbsp; - &nbsp;  {selectedTime}
    </p>
    <p className="style-summary">{appointmentSummary}</p>
    <div className="price-section">
      <div className="subtotal-container">
        <p className="subtotal">Subtotal:</p>
        <p className="tax">Tax: </p>
        <p className="price-total">Total:</p>
      </div>
      {/* Prices on the right */}
      <div className="subtotal1">
        <p>{parseFloat(price).toFixed(2)}</p>
        <p>${(parseFloat(price) * 0.08).toFixed(2)}</p>
        <p className="price-total1">${(parseFloat(price) + (parseFloat(price) * 0.08)).toFixed(2)}</p>
      </div>
    </div>
    <div> 
      <button className="book-appointment">Book Appointment</button>
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default Checkout;
