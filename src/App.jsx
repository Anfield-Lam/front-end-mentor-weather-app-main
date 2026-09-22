import './App.css'
import Header from "./Header.jsx"
import SearchBar from "./SearchBar.jsx"

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='aboveSearchBarText'>How's the sky looking today?</div>
      <SearchBar/>
    </div>
  )
}

export default App;
