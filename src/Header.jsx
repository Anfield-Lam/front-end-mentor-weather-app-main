import React, { useState } from "react";
import "./Header.css"
import logo from "./assets/images/logo.svg"
import units from "./assets/images/icon-units.svg"
import dropDownIcon from "./assets/images/icon-dropdown.svg"


function DropDownList() {
  const [active, setActive] = useState(0)
  if (active) {
    setActive(0)
  }
  else setActive(1)
}

function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo"/>
        <div className="dropDownListButton" onClick={DropDownList}>
          <img className="units" src={units} alt="units"/>
          <div className="unitsName">Units</div>
          <img className="dropDownIcon" src={dropDownIcon} alt="dropDownIcon"/>
        </div>
      </div>
      <div className="dropDownList">
        <ol>
          <li>Switch To Imperial</li>
          <li>Temperature</li>
          <li>Celsius (°C)</li>
          <li>Fahrenheit (°F)</li>
          <li>Wind Speed</li>
          <li>km/h</li>
          <li>mph</li>
          <li>Precipitation</li>
          <li>Millimeters (mm)</li>
          <li>Inches (in)</li>
        </ol>
      </div>
    </>
  )
}

export default Header;