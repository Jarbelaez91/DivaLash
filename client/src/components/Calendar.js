import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import englishText from "./englishHomePage";
import spanishText from "./spanish";

function Calendar({darkModeEnabled, language}) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const text = language === "english" ? englishText : spanishText;

  const getDayOfWeek = (date) => {
    return date.toLocaleString(language === "english" ? "en-US" : "es-ES", { weekday: 'long' });
  };
  
  const getMonthName = (date) => {
    return date.toLocaleString(language === "english" ? "en-US" : "es-ES", { month: 'long' });
  };

  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    history.goBack();
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);
  const [displayedYear, setDisplayedYear] = useState(currentYear);

  const handleDayClick = (day) => {
    if (day && day.selectable) {
      setSelectedDate(new Date(displayedYear, displayedMonth, day.day));
      setAvailableTimes([" 8:00AM "," 9:00 AM ","10:00 AM", "11:00 AM", " 1:00PM "," 2:00 PM ", " 3:00 PM ", " 4:00 PM "]);
    }
  };

  const handleTimeSelect = (time) => {
    console.log("Selected time:", time);
  };

  const [formData, setFormData] = useState({
    style: "",
    price: "",
    type: "",
    duration: "",
  });

  useEffect(() => {
    const { style = "", price = "", type = "", duration = "" } = location.state || {};
    setFormData({ style, price: parseFloat(price.replace(/\$/g, "")), type, duration });
  }, [location.state]);

  const appointmentSummary = formData.style + " ・ " + formData.type;
  const appointmentPrice = "$" + formData.price + " ・ " + formData.duration;

  const handleNextMonth = () => {
    if (displayedMonth === currentMonth + 2 && displayedYear === currentYear) return; 
    const nextMonth = (displayedMonth + 1) % 12;
    const nextYear = nextMonth === 0 ? displayedYear + 1 : displayedYear;
    setDisplayedMonth(nextMonth);
    setDisplayedYear(nextYear);
  };

  const handlePrevMonth = () => {
    if (displayedMonth === currentMonth && displayedYear === currentYear) return; 
    const prevMonth = displayedMonth === 0 ? 11 : displayedMonth - 1;
    const prevYear = displayedMonth === 0 ? displayedYear - 1 : displayedYear;
    setDisplayedMonth(prevMonth);
    setDisplayedYear(prevYear);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const isSunday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 0;
  };

  let weeksArray = [];

  const daysInMonth = getDaysInMonth(displayedYear, displayedMonth);
  const firstDayOfMonth = getFirstDayOfMonth(displayedYear, displayedMonth);

  let week = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push({ day: null, selectable: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDate = new Date(displayedYear, displayedMonth, day);
    const selectable = !isSunday(displayedYear, displayedMonth, day) && (dayDate - currentDate) / (1000 * 60 * 60 * 24) < 45 && dayDate >= currentDate;
    week.push({ day, selectable });
    if (week.length === 7) {
      weeksArray.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push({ day: null, selectable: false });
    }
    weeksArray.push(week);
  }

  const getDisplayedMonthName = (year, month,language) => {
    const displayDate = new Date(year, month);
    return displayDate.toLocaleString(language === "english" ? "en-US" : "es-ES", { month: "long" });
  };

  return (
    <div className={`calendar-cont ${darkModeEnabled ? "light-mode-calendar-cont" : ""}`}>
      <div>
        <button className={`calendar-back-btn ${darkModeEnabled ? "light-mode-calendar-back-btn" : ""}`}  onClick={goBack}>{text.calendarPage.backButton}</button>
        <h1 className="month">{getDisplayedMonthName(displayedYear, displayedMonth,language)} {displayedYear}</h1>
        <button className={`prev-month ${darkModeEnabled ? "light-mode-calendar-back-btn" : ""}`} onClick={handlePrevMonth} disabled={displayedMonth === currentMonth && displayedYear === currentYear}>←</button>
        <button className={`prev-month ${darkModeEnabled ? "light-mode-calendar-back-btn" : ""}`} onClick={handleNextMonth} disabled={displayedMonth === currentMonth + 2 && displayedYear === currentYear}>→</button>
        <table className={`calendar ${darkModeEnabled ? "light-mode-calendar" : ""}`}>
          <thead className="daysofweek">
          <tr>
            <th className="weekday">{text.calendarPage.sun}</th>
            <th className="weekday">{text.calendarPage.mon}</th>
            <th className="weekday">{text.calendarPage.tue}</th>
            <th className="weekday">{text.calendarPage.wed}</th>
            <th className="weekday">{text.calendarPage.thu}</th>
            <th className="weekday">{text.calendarPage.fri}</th>
            <th className="weekday">{text.calendarPage.sat}</th>
        </tr>
          </thead>
          <tbody>
            {weeksArray.map((week, index) => (
              <tr key={index}>
                {week.map((day, idx) => (
                  <td className="weekday"
                    key={idx}
                    style={{
                      color: day.selectable ? "white" : "black",
                      textDecoration: !day.selectable ? "line-through" : "none",
                      cursor: day.selectable ? "pointer" : "not-allowed",
                      color: darkModeEnabled ? (day.selectable ? "#08192A" : "black") : (day.selectable ? "white" : "black"),
                      border: selectedDate && day.day === selectedDate.getDate() ? (darkModeEnabled ? "4px solid black" : "4px solid white") : "none"
                    }}
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
          <div >
            <h2 className={`available-times ${darkModeEnabled ? "light-mode-available-times" : ""}`}> {text.calendarPage.availableTimes} &nbsp;    
            {getDayOfWeek(selectedDate)}, {getMonthName(selectedDate)} {selectedDate.getDate()}, {selectedDate.getFullYear()}
            </h2>

            <div className="calendar-button-container">
            {availableTimes.map((time, index) => (
  <Link
    to={{
      pathname: "/checkout",
      state: {
        appointmentSummary: appointmentSummary,
        selectedDate: selectedDate,
        selectedTime: time,
        price: formData.price,
        duration: formData.duration
      }
    }}
    key={index}
  >
    <button className="calendar-button" key={index} onClick={() => handleTimeSelect(time)}>
      {time}
    </button>
  </Link>
))}
            </div>
          </div>
        )}
      </div>
      <div className={`calendar-appointment ${darkModeEnabled ? "light-mode-calendar-appointment" : ""}`}>
        <h2 className="calendar-summary"> {text.calendarPage.appointment}</h2>
        
          <div>
            <h2 className={`calendar-input1 ${darkModeEnabled ? "light-mode-calendar-input1" : ""}`}> {appointmentSummary}  </h2>
          </div>
          <div className="classic-price">
            <h2 className={`calendar-input2 ${darkModeEnabled ? "light-mode-calendar-input1" : ""}`}> {appointmentPrice} </h2>
          </div>
        
      </div>
    </div>
  );
}

export default Calendar;
