import "./CountryWeatherInfoGridBoxes.css"

function CountryWeatherInfoGridBoxes() {
  return (
    <div className="countryWeatherInfoGridBoxes">
      <div className="big country"></div>
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