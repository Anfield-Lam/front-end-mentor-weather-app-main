import "./Header.css"
import logo from "./assets/images/logo.svg"
import units from "./assets/images/icon-units.svg"
import dropDownIcon from "./assets/images/icon-dropdown.svg"


function DropDownList() {

}

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo"/>
      <div className="dropDownList" onClick={DropDownList}>
        <img className="units" src={units} alt="units"/>
        <div className="unitsName">Units</div>
        <img className="dropDownIcon" src={dropDownIcon} alt="dropDownIcon"/>
      </div>
    </header>
  )
}

export default Header;