import React, { useEffect } from "react";

const TaskCalendar = () => {
  useEffect(() => {
    // Ensure Cally Web Component is properly initialized
    import("cally").catch((err) => console.error("Failed to load Cally:", err));
  }, []);

  return (
    <div className="h-[60vh] w-full bg-blue-950 rounded-xl flex items-center justify-center p-4">
      <calendar-date className="cally bg-base-100 border border-base-300 shadow-lg rounded-box w-full h-full flex items-center justify-center">
        <svg
          aria-label="Previous"
          className="fill-current w-4 h-4"
          slot="previous"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
        <svg
          aria-label="Next"
          className="fill-current w-4 h-4"
          slot="next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
        <calendar-month></calendar-month>
      </calendar-date>
    </div>
  );
};

export default TaskCalendar;
