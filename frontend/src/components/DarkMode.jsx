import React, { useEffect, useState } from "react";
import { themeChange } from 'theme-change';
// Import the FontAwesomeIcon component and the faMoon and faSun icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkMode = () => {
  // State to manage which theme is currently active
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state based on the persisted theme or system preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Function to toggle the mode
  const toggleTheme = () => {
    // Determine the new theme and set it
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme preference
    setIsDarkMode(!isDarkMode); // Update state
  };

  // Effect to initialize theme-change
  useEffect(() => {
    themeChange(false); // false parameter is to disable auto theme detection
  }, []);

  return (
    <div>
      <label className="swap swap-rotate fixed top-20 left-2 rounded-md bg-gray-300 p-2">
        {/* Hidden checkbox controls the state */}
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />

        {/* Sun icon */}
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} className="swap-on fill-current w-5 h-5" />
        ) : (
          // Moon icon
          <FontAwesomeIcon icon={faMoon} className="swap-off fill-current w-5 h-5" />
        )}
      </label>
    </div>
  );
};

export default DarkMode;
