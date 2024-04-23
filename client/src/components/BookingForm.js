import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./bookingForm.css"

function BookingForm({ location }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });


  const { style, price, type } = location.state;

  useEffect(() => {
    setFormData({
      ...formData,
      style,
      price,
      type,
    });
  }, [location.state, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    history.push("/thank-you");
  };

  const goBack = () => {
    history.goBack ()
  }

  return (


    <div className="booking-container">
        <div>
      <h2 className="booking-title">Booking Form</h2>
      <button onClick={goBack}>← Back</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Style:</label>
          <input type="text" value={formData.style} readOnly />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={formData.price} readOnly />
        </div>
        <div>
          <label>Type:</label>
          <input type="text" value={formData.type} readOnly />
        </div>
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
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default BookingForm;
