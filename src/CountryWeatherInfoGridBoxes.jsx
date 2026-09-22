import "./CountryWeatherInfoGridBoxes.css"

function CountryWeatherInfoGridBoxes() {
  return (
    <div className="countryWeatherInfoGridBoxes">
      <div className="big country"></div>
      <div className="fourBox">
        <div className="small FeelsLike"></div>
        <div className="small humidity"></div>
        <div className="small wind"></div>
        <div className="small precipitation"></div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;