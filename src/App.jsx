import './App.css'
import Header from "./Header.jsx"
import SearchBar from "./SearchBar.jsx"
import CountryWeatherInfoGridBoxes from "./CountryWeatherInfoGridBoxes.jsx"
import DailyInfoGridBoxes from "./DailyInfoGridBoxes.jsx"
import HourlyForecast from "./HourlyForecast.jsx"

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='aboveSearchBarText'>How's the sky looking today?</div>
      <SearchBar/>
      <CountryWeatherInfoGridBoxes/>
      <DailyInfoGridBoxes/>
      <HourlyForecast/>
    </div>
  )
}

export default App;
