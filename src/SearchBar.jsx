import { useContext, useState } from "react";
import './SearchBar.css'
import searchIcon from "./assets/images/icon-search.svg"
import { WeatherContext } from "./WeatherContext";



function SearchBar() {
  const [text, setText] = useState("");
  const { setCity } = useContext(WeatherContext);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCity(text);
      setText("");
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
      <div className='SearchBarButton'>Search</div>
    </>
  )
}

export default SearchBar;