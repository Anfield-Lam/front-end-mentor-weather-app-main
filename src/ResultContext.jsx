import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import CountryWeatherInfoGridBoxes from "./CountryWeatherInfoGridBoxes.jsx"
import DailyInfoGridBoxes from "./DailyInfoGridBoxes.jsx"
import HourlyForecast from "./HourlyForecast.jsx"

function ResultContext() {
  const { noResult } = useContext(WeatherContext);
  return (
    <>
      <CountryWeatherInfoGridBoxes/>
      {!noResult && (
        <>
          <DailyInfoGridBoxes/>
          <HourlyForecast/>
        </>
      )}
    </>
  );
}

export default ResultContext;
