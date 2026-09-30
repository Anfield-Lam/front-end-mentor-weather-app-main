import "./CountryWeatherInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"

function CountryWeatherInfoGridBoxes() {
  return (
    <div className="countryWeatherInfoGridBoxes">
      <div className="big">
        <div className="countryDayInfo">
          <div className="specificCountry">Berlin, Germany</div>
          <div className="specificDay">Tuesday, Aug 5, 2025</div>
        </div>
        <div className="countryTemperatureInfo">
          <img src={SunnyIcon} className="sunnyIcon"/>
          <div className="countryTemperature">68°</div>
        </div>
      </div>
      <div className="fourBox">
        <div className="box feelsLike">
          <div className="feelsLikeText text">Feels Like</div>
          <div className="feelsLikeTemperature data">64°</div>
        </div>
        <div className="box humidity">
          <div className="humidityText text">Humidity</div>
          <div className="humidityPercentage data">46%</div>
        </div>
        <div className="box wind">
          <div className="windText text">Wind</div>
          <div className="windSpeed data">9 mph</div>
        </div>
        <div className="box precipitation">
          <div className="precipitationText text">Precipitation</div>
          <div className="precipitationHeight data">0 in</div>
        </div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;