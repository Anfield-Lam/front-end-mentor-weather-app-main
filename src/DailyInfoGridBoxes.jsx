import React, { useEffect, useState } from "react";
import "./DailyInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"

function DailyInfoGridBoxes() {
  const [data, setData] = useState(null);
  const dayList = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
  };
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.32&longitude=114.17&forecast_days=7&daily=temperature_2m_max,temperature_2m_min"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="dailyInfoGridBoxes">
      <div className='belowFourBoxesText'>Daily forecast</div>
      <div className="sevenBox">
        {Array.from({ length: 7 }, (_, day) => {
          return (
            <div className="box dailyBox">
              <div className="dayText">{dayList[day]}</div>
              <img className="dayWeather" src={SunnyIcon} />
              <div className="dayTemperature">
                <div className="dayTemperatureUpper">{data?.daily?.temperature_2m_max?.[day]}°</div>
                <div className="dayTemperatureLower">{data?.daily?.temperature_2m_min?.[day]}°</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default DailyInfoGridBoxes;