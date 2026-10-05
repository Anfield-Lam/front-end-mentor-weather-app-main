import React, { useState, useContext, useEffect } from "react"
import "./CountryWeatherInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"
import { WeatherContext } from "./WeatherContext"

function CountryWeatherInfoGridBoxes() {
  const { weatherData } = useContext(WeatherContext);

  const [data, setData] = useState(null);
  useEffect(() => { 
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.32&longitude=114.17&forecast_days=1&current=temperature,apparent_temperature,relativehumidity_2m,windspeed_10m,precipitation"
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
          <div className="countryTemperature">{data?.current?.temperature}°</div>
        </div>
      </div>
      <div className="fourBox">
        <div className="box feelsLike">
          <div className="feelsLikeText text">Feels Like</div>
          <div className="feelsLikeTemperature data">{data?.current?.apparent_temperature}°</div>
        </div>
        <div className="box humidity">
          <div className="humidityText text">Humidity</div>
          <div className="humidityPercentage data">{data?.current?.relativehumidity_2m}%</div>
        </div>
        <div className="box wind">
          <div className="windText text">Wind</div>
          <div className="windSpeed data">{data?.current?.windspeed_10m} {data?.current_units?.windspeed_10m}</div>
        </div>
        <div className="box precipitation">
          <div className="precipitationText text">Precipitation</div>
          <div className="precipitationHeight data">{data?.current?.precipitation} {data?.current_units?.precipitation}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;