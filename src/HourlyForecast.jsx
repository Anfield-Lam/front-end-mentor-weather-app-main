import { useEffect, useState } from "react";
import './HourlyForecast.css'
import dropDownIcon from "./assets/images/icon-dropdown.svg"
import SunnyIcon from "./assets/images/icon-sunny.webp"
import StormIcon from "./assets/images/icon-storm.webp"
import RainIcon from "./assets/images/icon-rain.webp"
import SnowIcon from "./assets/images/icon-snow.webp"
import FogIcon from "./assets/images/icon-fog.webp"
import CloudyIcon from "./assets/images/icon-overcast.webp"
import PartlyCloudyIcon from "./assets/images/icon-partly-cloudy.webp"
import DrizzleIcon from "./assets/images/icon-drizzle.webp"
import tzlookup from "tz-lookup";

function HourlyForecast() {
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
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);
  const dayList = data?.hourly?.time
    ? [...new Set(data.hourly.time.map((time) => time.slice(0, 10)))]
    : [];
  const weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const todayIndex = weekDayNames.indexOf(today);

  useEffect(() => {
    const controller = new AbortController();

    async function loadForecast() {
      try {
        const cityResponse = await fetch(
          "https://nominatim.openstreetmap.org/search?q=HongKong&format=jsonv2",
          { signal: controller.signal }
        );
        if (!cityResponse.ok) {
          throw new Error(`Location lookup failed (${cityResponse.status})`);
        }

        const cities = await cityResponse.json();
        const city = cities[0];
        if (!city) {
          throw new Error("Location lookup returned no results");
        }

        const timezoneId = tzlookup(city.lat, city.lon);
        const forecastResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&forecast_days=7&hourly=temperature_2m,weather_code&timezone=${timezoneId}`,
          { signal: controller.signal }
        );
        if (!forecastResponse.ok) {
          throw new Error(`Weather forecast request failed (${forecastResponse.status})`);
        }

        const forecastData = await forecastResponse.json();
        if (!forecastData.hourly?.time?.length) {
          throw new Error("Weather response did not include hourly data");
        }

        setData(forecastData);
        setSelectedDate(forecastData.hourly.time[0].slice(0, 10));
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(requestError.message);
        }
      }
    }

    loadForecast();
    return () => controller.abort();
  }, []);

  const selectedHours = selectedDate && data?.hourly?.time
    ? data.hourly.time.reduce((hours, time, index) => {
        if (time.startsWith(selectedDate)) {
          hours.push(index);
        }
        return hours;
      }, [])
    : [];
  const [active, setActive] = useState(false)

  return (
    <div className='hourlyForecast'>
      <div className='HourlyBox box'>
        <div className='top'>
          <div className='text'>
            Hourly forecast
          </div>
          <div className='daySelector' onClick={() => setActive(!active)}>
            <div className='day'>
              {selectedDate
                ? new Date(`${selectedDate}T00:00:00Z`).toLocaleDateString("en-US", {
                    weekday: "long",
                    timeZone: "UTC",
                  })
                : "Loading"}
            </div>
            <img className="dropDownIcon" src={dropDownIcon} alt="dropDownIcon"/>
          </div>
        </div>
        <div className='bottom'>
          {error ? (
            <div role="alert">{`Unable to load hourly forecast: ${error}`}</div>
          ) : selectedHours.length === 0 ? (
            <div>{data ? "No hourly data available for this day." : "Loading hourly forecast..."}</div>
          ) : (
            selectedHours.map((index, hour) => {
              const forecastTime = data.hourly.time[index];
              const hourOfDay = Number(forecastTime.slice(11, 13));
              const hourNumber = hourOfDay % 12 || 12;
              const period = hourOfDay < 12 ? "AM" : "PM";

              return (
                <div className={hour === selectedHours.length - 1 ? "last hour" : "hour"} key={forecastTime}>
                  <div className="left">
                    <img className='smallWeatherIcon' src={weatherCodeMapping[data.hourly.weather_code[index]]} alt="" />
                    <div className="hourText">{hourNumber} {period}</div>
                  </div>
                  <div className="right">{data.hourly.temperature_2m[index]}°</div>
                </div>
              );
            })
          )}
        </div>
      </div> 
      <div>
        {active && (
          <div className="dropDownList2">
            <ol>
              {weekDayNames.map((day, index) => (
                <li key={index} onClick={() => { setSelectedDate(data.hourly.time[((index-todayIndex+7)%7)*24].slice(0, 10)); setActive(false); }}>
                  {day}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>     
    </div>
  )
}

export default HourlyForecast;