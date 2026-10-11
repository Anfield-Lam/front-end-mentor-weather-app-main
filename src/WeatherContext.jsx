/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("weatherData");
    return saved ? JSON.parse(saved) : null;
  });
  const [unit, setUnit] = useState(() => {
    // Load from localStorage if available
    const savedUnit = localStorage.getItem("unit");
    return savedUnit ? JSON.parse(savedUnit) : false; // false => metric, true => imperial
  });

  // Whenever weatherData changes, save to localStorage
  useEffect(() => {
    if (weatherData) {
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
    }
  }, [weatherData]);

  // Whenever unit changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("unit", JSON.stringify(unit));
  }, [unit]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
