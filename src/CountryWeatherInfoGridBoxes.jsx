import { useState, useEffect } from "react"
import "./CountryWeatherInfoGridBoxes.css"
import SunnyIcon from "./assets/images/icon-sunny.webp"
import StormIcon from "./assets/images/icon-storm.webp"
import RainIcon from "./assets/images/icon-rain.webp"
import SnowIcon from "./assets/images/icon-snow.webp"
import FogIcon from "./assets/images/icon-fog.webp"
import CloudyIcon from "./assets/images/icon-overcast.webp"
import PartlyCloudyIcon from "./assets/images/icon-partly-cloudy.webp"
import DrizzleIcon from "./assets/images/icon-drizzle.webp"
import tzlookup from "tz-lookup";

function CountryWeatherInfoGridBoxes() {

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
  const [cityName, setCityName] = useState(null);
  const temp = "HongKong";
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${temp}&format=jsonv2`
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
            `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&forecast_days=1&current=temperature,apparent_temperature,relativehumidity_2m,windspeed_10m,precipitation,weather_code&timezone=${timezoneId}`
          )
            .then((response) => response.json())
            .then((forecastData) => setData(forecastData));
        }
      });
  }, []);

  const date = new Date();
  const today = date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="countryWeatherInfoGridBoxes">
      <div className="big">
        <div className="countryDayInfo">
          <div className="specificCountry">{cityName}</div>
          <div className="specificDay">{today}</div>
        </div>
        <div className="countryTemperatureInfo">
          <img src={weatherCodeMapping[data?.current?.weather_code]} className="Icon"/>
          <div className="countryTemperature">{data?.current?.temperature}°</div>
        </div>
      </div>
      <div className="fourBox">
        <div className="box feelsLike">
          <div className="feelsLikeText text">Feels Like</div>
          <div className="feelsLikeTemperature data">{data?.current?.apparent_temperature}°</div>
        </div>
        <div className="box humidity">
          <div className="humidityText text">Humidity</div>
          <div className="humidityPercentage data">{data?.current?.relativehumidity_2m}%</div>
        </div>
        <div className="box wind">
          <div className="windText text">Wind</div>
          <div className="windSpeed data">{data?.current?.windspeed_10m} {data?.current_units?.windspeed_10m}</div>
        </div>
        <div className="box precipitation">
          <div className="precipitationText text">Precipitation</div>
          <div className="precipitationHeight data">{data?.current?.precipitation} {data?.current_units?.precipitation}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryWeatherInfoGridBoxes;