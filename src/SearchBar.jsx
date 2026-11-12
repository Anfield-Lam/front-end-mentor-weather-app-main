import { useContext, useState } from "react";
import './SearchBar.css'
import searchIcon from "./assets/images/icon-search.svg"
import { WeatherContext } from "./WeatherContext";



function SearchBar() {
  const [text, setText] = useState("");
  const [searchError, setSearchError] = useState(null);
  const { searchCity } = useContext(WeatherContext);
  const submitSearch = async () => {
    const city = text.trim();
    if (!city) {
      return;
    }

    setText("");
    setSearchError(null);
    try {
      await searchCity(city);
    } catch {
      setSearchError("Unable to search for this city. Please try again.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.trim() !== "") {
      void submitSearch();
    }
    else if (!/^[a-zA-Z]$/.test(event.key) && event.key !== "Backspace" && event.key !== " ") {
      event.preventDefault();
    }
  }
  return (
    <>
      <div className='SearchBarInput'>
        <img className='searchIcon' src={searchIcon} />
        <input 
          className='SearchBarText' 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)} 
          onKeyDown={handleKeyDown} 
          placeholder='Search for a place...'
        />
      </div>
      <div className='SearchBarButton' onClick={() => void submitSearch()}>
        Search
      </div>
      {searchError && <div role="alert">{searchError}</div>}
    </>
  )
}

export default SearchBar;