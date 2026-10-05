import React, { useState, useContext, useEffect } from "react"
import "./CountryWeatherInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"
import { WeatherContext } from "./WeatherContext"

function CountryWeatherInfoGridBoxes() {
  const { weatherData } = useContext(WeatherContext);

  const [data, setData] = useState(null);
  useEffect(() => { 
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.32&longitude=114.17&current_weather=true&forecast_days=1&hourly=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m,apparent_temperature"
      )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  return (
    <div className="countryWeatherInfoGridBoxes">
      <div className="big">
        <div className="countryDayInfo">
          <div className="specificCountry">Berlin, Germany</div>
          <div className="specificDay">Tuesday, Aug 5, 2025</div>
        </div>
        <div className="countryTemperatureInfo">
          <img src={SunnyIcon} className="sunnyIcon"/>
          <div className="countryTemperature">{data?.current_weather?.temperature}°</div>
        </div>
      </div>
      <div className="fourBox">
        <div className="box feelsLike">
          <div className="feelsLikeText text">Feels Like</div>
          <div className="feelsLikeTemperature data">{data?.hourly?.apparent_temperature?.[0]}°</div>
        </div>
        <div className="box humidity">
          <div className="humidityText text">Humidity</div>
          <div className="humidityPercentage data">{data?.hourly?.relativehumidity_2m?.[0]}%</div>
        </div>
        <div className="box wind">
          <div className="windText text">Wind</div>
          <div className="windSpeed data">{data?.current_weather?.windspeed} {data?.current_weather_units?.windspeed}</div>
        </div>
        <div className="box precipitation">
          <div className="precipitationText text">Precipitation</div>
          <div className="precipitationHeight data">{data?.hourly?.precipitation?.[0]} {data?.hourly_units?.precipitation?.[0]}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;