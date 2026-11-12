/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useRef } from "react";

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
  const [savedCity, setSavedCity] = useState(() => {
    // Load from localStorage if available
    const savedCity = localStorage.getItem("savedCity");
    return savedCity ? JSON.parse(savedCity) : "Hong Kong"; // Default city
  });

  const [noResult, setNoResult] = useState(() => {
    return false; // false => city found, true => city not found
  });
  const searchRequestId = useRef(0);

  const searchCity = async (cityName) => {
    const query = cityName.trim();
    const requestId = ++searchRequestId.current;
    let cities;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=jsonv2`
      );
      if (!response.ok) {
        throw new Error(`Location lookup failed (${response.status})`);
      }
      cities = await response.json();
    } catch (error) {
      if (requestId !== searchRequestId.current) {
        return;
      }
      throw error;
    }

    if (requestId !== searchRequestId.current) {
      return;
    }
    if (!cities[0]) {
      setNoResult(true);
      return;
    }

    setNoResult(false);
    setSavedCity(query);
  };

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
    <WeatherContext.Provider value={{ weatherData, setWeatherData, unit, setUnit, savedCity, searchCity, noResult, setNoResult }}>
      {children}
    </WeatherContext.Provider>
  );
};
