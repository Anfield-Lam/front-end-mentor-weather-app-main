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
        <div className="box FeelsLike"></div>
        <div className="box humidity"></div>
        <div className="box wind"></div>
        <div className="box precipitation"></div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;