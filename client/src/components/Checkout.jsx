import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./checkout.css";
import Policy from "./Policy";
import englishText from "./englishHomePage";
import spanishText from "./spanish";


function Checkout({ darkModeEnabled, language }) {
  const history = useHistory();
  const location = useLocation(); 
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const text = language === "english" ? englishText : spanishText;

  const { appointmentSummary, selectedDate, selectedTime, price, duration } = location.state || {}; 

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiration: "",
    cvc: ""
  });

  const getDayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const getMonthName = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
  };


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
    
    setIsModalOpen(false);
    if (!selectedDate || !selectedTime) {
      
      history.push("/"); 
    }
  }, [selectedDate, selectedTime, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.name || !formData.lastname || !formData.email || !formData.phone || !formData.cardNumber || !formData.expiration || !formData.cvc || !isChecked) {
      alert("Please fill out all fields and accept the cancellation policy before booking.");
      return;
    }

    history.push("/confirmation", {
      appointmentSummary,
      selectedDate,
      selectedTime,
      price,
      duration,
      formData
    });
  
  
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log("formData:", formData);
  console.log("isChecked:", isChecked);

  return (
    <div className={`checkout-background ${darkModeEnabled ? "light-mode-checkout-background" : ""}`} >
      <button className={`calendar-back-btn ${darkModeEnabled ? "light-mode-calendar-back-btn" : ""}`} onClick={() => history.goBack()}>← Back</button>
      <div className={`checkout-page ${darkModeEnabled ? "light-mode-checkout-page" : ""}`} >
        <div className={`booking-container ${darkModeEnabled ? "light-mode-booking-container" : ""}`}>
          <div>
            <h2 className={`booking-title ${darkModeEnabled ? "light-mode-booking-title" : ""}`}> {text.checkoutPage.contactInfo}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="name-container">
                  <input
                    className="name-input"
                    type="text"
                    placeholder={text.checkoutPage.firstName}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    className="name-input"
                    type="text"
                    placeholder={text.checkoutPage.lastName}
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
                  placeholder={text.checkoutPage.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <input
                  className="number-input"
                  type="tel"
                  placeholder={text.checkoutPage.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="cc-container">
                <input
                  className="credit-card-input"
                  type="text"
                  placeholder={text.checkoutPage.card}
                  value={formData.cardNumber}
                  onChange={(e) => {
                    const input = e.target.value;
                    const formattedInput = input.replace(/\D/g, "").slice(0, 16);
                    setFormData({ ...formData, cardNumber: formattedInput });
                  }}
                  required
                  maxLength="16"
                  pattern="\d{16}"
                  title="Please enter exactly 16 digits"
                />

                <input
                  className="credit-card-input1"
                  type="text"
                  placeholder={text.checkoutPage.exp}
                  value={formData.expiration}
                  onChange={(e) => {
                    const input = e.target.value;
                    const formattedInput = input
                      
                      .replace(/\D/g, "")
                      
                      .slice(0, 4)
                     
                      .replace(/^(\d{2})(\d{0,2})/, "$1/$2");

                    
                    setFormData({ ...formData, expiration: formattedInput });
                  }}
                  required
                  pattern="(0[1-9]|1[0-2])\/(2[5-9]|3[0-9])" 
                  title="Please enter a valid expiration date in the format MM/YY, where MM is from 01 to 12 and YY is from 25 to 39" // Error message for pattern validation
                />

                <input
                  className="credit-card-input2"
                  type="text"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={(e) => {
                    const input = e.target.value;
                    const formattedInput = input.replace(/\D/g, "").slice(0, 3);
                    setFormData({ ...formData, cvc: formattedInput });
                  }}
                  required
                  maxLength="3"
                  pattern="\d{3}"
                  title="Please enter exactly 3 digits"
                />
              </div>
            </form>
          </div>
          <div>
            <h2 className={`cancellation-policy ${darkModeEnabled ? "light-mode-cancellation-policy" : ""}`} > {text.checkoutPage.cancelation}</h2>
            <h3 className={`cancellation-policy1 ${darkModeEnabled ? "light-mode-cancellation-policy" : ""}`} >
              {text.checkoutPage.cancelation2}
            </h3>
            <div>
              <button className={`cancellation-policy2 ${darkModeEnabled ? "light-mode-cancellation-policy2" : ""}`} onClick={() => setIsModalOpen(true)}>
                {text.checkoutPage.seeFullPolicy}
              </button>
              <div>
                <label className={`cancellation-policy2 ${darkModeEnabled ? "light-mode-cancellation-policy2" : ""}`} >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  {text.checkoutPage.checkBox}
                </label>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && <Policy isOpen={isModalOpen} onClose={closeModal} />}
        <div className={`appointment-sum ${darkModeEnabled ? "light-mode-appointment-sum" : ""}`}>
          <h2 className={`appointment-title ${darkModeEnabled ? "light-mode-booking-title" : ""}`}>{text.checkoutPage.appointment}</h2>
          <div>
            <p className={`appointment-time ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}>
              {selectedDate && getDayOfWeek(selectedDate)}, {getMonthName(selectedDate)} {selectedDate.getDate()}{getDaySuffix(selectedDate.getDate())} {selectedDate.getFullYear()} &nbsp; - &nbsp;  {selectedTime}
            </p>
            <p className={`style-summary ${darkModeEnabled ? "light-mode-booking-title" : ""}`}>{appointmentSummary}</p>
            <div className="price-section">
              <div className="subtotal-container">
                <p className={`subtotal ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> Subtotal:</p>
                <p className={`tax ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> {text.checkoutPage.Tax}: </p>
                <p className={`price-total ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> Total:</p>
              </div>
              <div className={`subtotal1 ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}>
                <p>{parseFloat(price).toFixed(2)}</p>
                <p>${(parseFloat(price) * 0.08).toFixed(2)}</p>
                <p className={`price-total1 ${darkModeEnabled ? "light-mode-appointment-time" : ""}`}> ${(parseFloat(price) + (parseFloat(price) * 0.08)).toFixed(2)}</p>
              </div>
            </div>
            <div>
              <button
                className={`book-appointment ${darkModeEnabled ? "light-mode-appointment-sum" : ""}`}
                onClick={handleSubmit} 
              >
                {text.checkoutPage.book}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
