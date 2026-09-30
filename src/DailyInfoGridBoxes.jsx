import "./DailyInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"

function DailyInfoGridBoxes() {
  return (
    <div className="dailyInfoGridBoxes">
      <div className='belowFourBoxesText'>Daily forecast</div>
      <div className="sevenBox">
        <div className="box dailyBox first">
          <div className="dayText dayText1">Tue</div>
          <img className="dayWeather dayWeather1" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
        <div className="box dailyBox second">
          <div className="dayText dayText2">Tue</div>
          <img className="dayWeather dayWeather2" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
        <div className="box dailyBox third">
          <div className="dayText dayText3">Tue</div>
          <img className="dayWeather dayWeather3" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
        <div className="box dailyBox fourth">
          <div className="dayText dayText4">Tue</div>
          <img className="dayWeather dayWeather4" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
        <div className="box dailyBox fifth">
          <div className="dayText dayText5">Tue</div>
          <img className="dayWeather dayWeather5" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
        <div className="box dailyBox sixth">
          <div className="dayText dayText6">Tue</div>
          <img className="dayWeather dayWeather6" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
        <div className="box dailyBox seventh">
          <div className="dayText dayText7">Tue</div>
          <img className="dayWeather dayWeather7" src={SunnyIcon}/>
          <div className="dayTemperature">
            <div className="dayTemperatureUpper">68°</div>
            <div className="dayTemperatureLower">57°</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyInfoGridBoxes;