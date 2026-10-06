import { useEffect, useState } from "react";
import "./DailyInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"
import StormIcon from "./assets/images/icon-storm.webp"
import RainIcon from "./assets/images/icon-rain.webp"
import SnowIcon from "./assets/images/icon-snow.webp"
import FogIcon from "./assets/images/icon-fog.webp"
import CloudyIcon from "./assets/images/icon-overcast.webp"
import PartlyCloudyIcon from "./assets/images/icon-partly-cloudy.webp"
import DrizzleIcon from "./assets/images/icon-drizzle.webp"
import tzlookup from "tz-lookup";

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
  const weatherCodeMapping = {
      0: SunnyIcon,
      1: SunnyIcon,
      2: PartlyCloudyIcon,
      3: CloudyIcon,
      45: FogIcon,
      48: FogIcon,
      51: DrizzleIcon,
      53: DrizzleIcon,
      55: DrizzleIcon,
      56: DrizzleIcon,
      57: DrizzleIcon,
      61: RainIcon,
      63: RainIcon,
      65: RainIcon,
      66: RainIcon,
      67: RainIcon,
      71: SnowIcon,
      73: SnowIcon,
      75: SnowIcon,
      77: SnowIcon,
      80: RainIcon,
      81: RainIcon,
      82: RainIcon,
      85: SnowIcon,
      86: SnowIcon,
      95: StormIcon,
      96: StormIcon,
      97: StormIcon,
      99: StormIcon
    }
  const [cityName, setCityName] = useState(null);
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?q=Hong Kong&format=jsonv2`
    )
      .then((response) => response.json())
      .then((cities) => {
        const city = cities[0];
        if (!city) {
          return;
        } else {
          setCityName(city.display_name);
          const timezoneId = tzlookup(city.lat, city.lon);

          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&forecast_days=7&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=${timezoneId}`
          )
            .then((response) => response.json())
            .then((forecastData) => setData(forecastData));
        }
      });
  }, []);

  return (
    <div className="dailyInfoGridBoxes">
      <div className='belowFourBoxesText'>Daily forecast</div>
      <div className="sevenBox">
        {Array.from({ length: 7 }, (_, day) => {
          let weekdayShort = "";
          if (data?.daily?.time?.[day]) {
            weekdayShort = new Date(data?.daily?.time?.[day]).toLocaleDateString("en-US", {
              weekday: "short",
            });
          }
          return (
            <div className="box dailyBox">
              <div className="dayText">{weekdayShort}</div>
              <img className="dayWeather" src={weatherCodeMapping[data?.daily?.weather_code?.[day]]} />
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