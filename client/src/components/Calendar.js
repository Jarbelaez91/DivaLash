import React, { useState, useEffect } from "react";
import "./Calendar.css"
import { useHistory, useLocation } from "react-router-dom";

function Calendar() {
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    history.goBack();
  };

  // Get number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array of days in the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // Create an array of weeks for the calendar
  const weeksArray = [];
  let week = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push({ day: null, selectable: false }); // Push empty cells for days before the first day of the month
  }
  daysArray.forEach((day, index) => {
    const date = new Date(currentYear, currentMonth, day);
    const selectable = date >= currentDate && date.getDay() !== 0; // Check if the day is not a Sunday
    week.push({ day, selectable });
    if ((firstDayOfMonth + index + 1) % 7 === 0 || index === daysArray.length - 1) {
      weeksArray.push(week);
      week = [];
    }
  });

  // State to store selected date and times
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Function to handle day selection
  const handleDayClick = (day) => {
    if (day && day.selectable) {
      // Set selected date
      setSelectedDate(new Date(currentYear, currentMonth, day.day));

    
      setAvailableTimes(["10:00 AM", "12:00 PM", "2:30 PM", "4:30 PM"]);
    }
  };

   // Function to handle time selection
   const handleTimeSelect = (time) => {
    // Do something with the selected time
    console.log("Selected time:", time);
  };


  const [formData, setFormData] = useState({
    style: "",
    price: "",
    type: "",
    time: "",
  });

  useEffect(() => {
    const { style = "", price = "", type = "" ,duration =""} = location.state || {};
    setFormData({ style, price, type, duration });
  }, [location.state]);

  const appointmentSummary = formData.style + " ・ " + formData.type;
  const appointmentPrice = formData.price + " ・ " + formData.duration;

  return (
    <div  className="calendar-cont">
    <div>
    <button onClick={goBack}>← Back</button>
      <h1 className="month"> {currentDate.toLocaleString("default", { month: "long" })} {currentYear}</h1>
      <table className= "calendar">
        <thead >
          <tr className="daysofweek">
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeksArray.map((week, index) => (
            <tr key={index}>
              {week.map((day, idx) => (
                <td
                  key={idx}
                  style={{ color: day.selectable ? "#d826e2" : "black", textDecoration: !day.selectable ? "line-through" : "none", cursor: day.selectable ? "pointer" : "not-allowed" }}
                  onClick={() => handleDayClick(day)}
                >
                  {day.day && day.day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDate && (
        <div>
          <h2>Available Times for {selectedDate.toLocaleDateString()}</h2>
          <div>
            {availableTimes.map((time, index) => (
              <button className="calendar-button" key={index} onClick={() => handleTimeSelect(time)}>{time}</button>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="calendar-appointment">
    <h2 className="calendar-summary"> Appointment Summary</h2>
      <form >
        <div>
          <h2 className="calendar-input1"> {appointmentSummary}  </h2>
        </div>
        <div className="classic-price">
          <input className="calendar-input2" type="text" value={appointmentPrice} readOnly />
        </div>
        
        </form>
    </div>
    
    </div>
  );
}

export default Calendar;
