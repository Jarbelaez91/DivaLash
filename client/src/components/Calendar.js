import React, { useState } from "react";
import "./Calendar.css"

function Calendar() {
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

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

      // Set available times for the selected date
      setAvailableTimes(["10:00 AM", "12:00 PM", "2:30 PM", "4:30 PM"]);
    }
  };

  return (
    <div className="calendar">
      <h1>Calendar - {currentDate.toLocaleString("default", { month: "long" })} {currentYear}</h1>
      <table>
        <thead>
          <tr>
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
                  style={{ color: day.selectable ? "black" : "grey", cursor: day.selectable ? "pointer" : "not-allowed" }}
                  onClick={() => handleDayClick(day)}
                >
                  {day.day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDate && (
        <div>
          <h2>Available Times for {selectedDate.toLocaleDateString()}</h2>
          <ul>
            {availableTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Calendar;
