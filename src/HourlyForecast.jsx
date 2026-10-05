import React, { useEffect, useState } from "react";
import './HourlyForecast.css'
import dropDownIcon from "./assets/images/icon-dropdown.svg"
import SunnyIcon from "./assets/images/icon-sunny.webp"

function HourlyForecast() {
  const [active, setActive] = useState(false)
  const [day, setDay] = useState(1)
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
   // false => metric, true => imperial

  const [data, setData] = useState(null);
  useEffect(() => { 
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.32&longitude=114.17&forecast_days=1&hourly=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m,apparent_temperature"
      )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  return (
    <div className='hourlyForecast'>
      <div className='HourlyBox box'>
        <div className='top'>
          <div className='text'>
            Hourly forecast
          </div>
          <div className='daySelector' onClick={() => setActive(!active)}>
            <div className='day'>{dayList[day]}</div>
            <img className="dropDownIcon" src={dropDownIcon} alt="dropDownIcon"/>
          </div>
        </div>
        <div className='bottom'>
          {Array.from({ length: 24 }, (_, hour) => {
            const hourNumber = hour % 12 || 12;
            const period = hour < 12 ? "AM" : "PM";

            return (
              <div className={hour === 23 ? "last hour" : "hour"} key={hour}>
                <div className="left">
                  <img className='smallWeatherIcon' src={SunnyIcon} alt="" />
                  <div className="hourText">{hourNumber} {period}</div>
                </div>
                <div className="right">68°</div>
              </div>
            );
          })}
        </div>
      </div> 
      <div>
        {active && (
          <div className="dropDownList2">
            <ol>
              <li onClick={() => {setDay(0); setActive(!active)}}>Sunday</li>
              <li onClick={() => {setDay(1); setActive(!active)}}>Monday</li>              
              <li onClick={() => {setDay(2); setActive(!active)}}>Tuesday</li>
              <li onClick={() => {setDay(3); setActive(!active)}}>Wednesday</li>
              <li onClick={() => {setDay(4); setActive(!active)}}>Thursday</li>
              <li onClick={() => {setDay(5); setActive(!active)}}>Friday</li>
              <li onClick={() => {setDay(6); setActive(!active)}}>Saturday</li>
            </ol>
          </div>
        )}
      </div>     
    </div>
  )
}

export default HourlyForecast;