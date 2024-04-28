import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./bookingForm.css"

function Checkout() {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });


  return (

    <div>
    <div className="booking-container">
        <div>
      <h2 className="booking-title">Contact Info</h2>
      <button>← Back</button>
      <form >
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </form>
    </div>
    <div>
        <h2>
        Cancellation policy
        </h2>
        <h3>Please reach out to Lash Love Beauty Bar to cancel or 
            reschedule before 9:00 AM on Sunday, April 28. 
            After that, you may be charged a cancellation 
            fee of $50.00. 
        </h3>
        <div>
            <p>
        See full policy
            </p>
            <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        I have read and agreed to the 
        cancellation policy of Diva Lashes. 
      </label>
            </div>
        </div>
        
    </div>
    </div>
    <div>
    <h2>Appointment Summary</h2>
</div>
</div>
  );
}

export default Checkout;
