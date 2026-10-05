import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import './SearchBar.css'
import searchIcon from "./assets/images/icon-search.svg"

function SearchBar() {
  /* const { setWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=22.32&longitude=114.17&current_weather=true&forecast_days=1&hourly=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m,apparent_temperature"
        );
        if (!response.ok) {
          throw new Error(`Weather request failed: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Unable to load weather data.", error);
      }
    };

    fetchWeather();
  }, [setWeatherData]); */

  const [text, setText] = useState("");
  const handleKeyDown = (event) => {
    if (!/^[a-zA-Z]$/.test(event.key) && event.key !== "Backspace" && event.key !== " ") {
      event.preventDefault();
    }
  }
  return (
    <>
      <div className='SearchBarInput'>
        <img className='searchIcon' src={searchIcon}/>
        <input 
          className='SearchBarText' 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          onKeyDown={handleKeyDown} 
          placeholder='Search for a place...'
        />
      </div>
      <div className='SearchBarButton'>Search</div>
    </>
  )
}

export default SearchBar;