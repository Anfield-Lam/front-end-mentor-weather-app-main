import './App.css'
import Header from "./Header.jsx"
import SearchBar from "./SearchBar.jsx"
import CountryWeatherInfoGridBoxes from "./CountryWeatherInfoGridBoxes.jsx"
import DailyInfoGridBoxes from "./DailyInfoGridBoxes.jsx"

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='aboveSearchBarText'>How's the sky looking today?</div>
      <SearchBar/>
      <CountryWeatherInfoGridBoxes/>
      <DailyInfoGridBoxes/>
    </div>
  )
}

export default App;
