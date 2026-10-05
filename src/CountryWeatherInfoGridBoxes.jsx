import { useContext } from "react"
import "./CountryWeatherInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"
import { WeatherContext } from "./WeatherContext"

function CountryWeatherInfoGridBoxes() {
  const { weatherData } = useContext(WeatherContext);
  const temperature = weatherData.current_weather.temperature;

  return (
    <div className="countryWeatherInfoGridBoxes">
      <div className="big">
        <div className="countryDayInfo">
          <div className="specificCountry">Berlin, Germany</div>
          <div className="specificDay">Tuesday, Aug 5, 2025</div>
        </div>
        <div className="countryTemperatureInfo">
          <img src={SunnyIcon} className="sunnyIcon"/>
          <div className="countryTemperature">{temperature}°</div>
        </div>
      </div>
      <div className="fourBox">
        <div className="box feelsLike">
          <div className="feelsLikeText text">Feels Like</div>
          <div className="feelsLikeTemperature data">{weatherData.hourly.apparent_temperature[0]}°</div>
        </div>
        <div className="box humidity">
          <div className="humidityText text">Humidity</div>
          <div className="humidityPercentage data">{weatherData.hourly.relativehumidity_2m[0]}%</div>
        </div>
        <div className="box wind">
          <div className="windText text">Wind</div>
          <div className="windSpeed data">{weatherData.hourly.windspeed_10m[0]} mph</div>
        </div>
        <div className="box precipitation">
          <div className="precipitationText text">Precipitation</div>
          <div className="precipitationHeight data">{weatherData.hourly.precipitation_probability[0]} in</div> //wrong
        </div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;