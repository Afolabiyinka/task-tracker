import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles
import "./CalendarStyles.css"; // Custom styles

const TaskCalendar = () => {
  return (
    <div className="w-full max-w-[30rem] bg-gradient-to-r shadow-xl rounded-2xl  mx-auto text-white">
      <h2 className="text-xl font-bold text-center mb-1">📅 Task Calendar</h2>
      <div className=" rounded-lg">
        <Calendar className="custom-calendar" />
      </div>
    </div>
  );
};

export default TaskCalendar;
