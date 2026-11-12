import './App.css'
import { WeatherProvider } from "./WeatherContext";
import Header from "./Header.jsx"
import SearchBar from "./SearchBar.jsx"
import ResultContext from "./ResultContext.jsx"

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Header/>
        <div className='aboveSearchBarText'>How's the sky looking today?</div>
        <SearchBar/>
        <ResultContext/>
      </WeatherProvider>
    </div>
  )
}

export default App;
