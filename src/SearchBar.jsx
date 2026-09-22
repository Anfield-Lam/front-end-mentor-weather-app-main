import './SearchBar.css'
import searchIcon from "./assets/images/icon-search.svg"

function SearchBar() {
  return (
    <>
      <div className='SearchBarInput'><img className='searchIcon' src={searchIcon}/>Search for a place...</div>
      <div className='SearchBarButton'>Search</div>
    </>
  )
}

export default SearchBar;