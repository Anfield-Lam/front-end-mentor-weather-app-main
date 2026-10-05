import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("weatherData");
    return saved ? JSON.parse(saved) : null;
  });

  // Whenever weatherData changes, save to localStorage
  useEffect(() => {
    if (weatherData) {
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
    }
  }, [weatherData]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
