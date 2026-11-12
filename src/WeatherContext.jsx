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
  const [savedCity, setCity] = useState(() => {
    // Load from localStorage if available
    const savedCity = localStorage.getItem("savedCity");
    return savedCity ? JSON.parse(savedCity) : "Hong Kong"; // Default city
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

  // Whenever city changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("savedCity", JSON.stringify(savedCity));
  }, [savedCity]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, unit, setUnit, savedCity, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
