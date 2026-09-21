import React, { useState } from "react";
import "./Header.css"
import logo from "./assets/images/logo.svg"
import units from "./assets/images/icon-units.svg"
import dropDownIcon from "./assets/images/icon-dropdown.svg"

function Header() {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo"/>
        <div className="dropDownListButton" onClick={() => setActive(!active)}>
          <img className="units" src={units} alt="units"/>
          <div className="unitsName">Units</div>
          <img className="dropDownIcon" src={dropDownIcon} alt="dropDownIcon"/>
        </div>
      </div>
      <div>
        {active && (
          <div className="dropDownList">
            <ol>
              <li className="switch">Switch To Imperial</li>
              <li className="constant">Temperature</li>
              <li>Celsius (°C)</li>
              <li>Fahrenheit (°F)</li>
              <div className="bottom-border"></div>
              <li className="constant">Wind Speed</li>
              <li>km/h</li>
              <li>mph</li>
              <div className="bottom-border"></div>
              <li className="constant">Precipitation</li>
              <li>Millimeters (mm)</li>
              <li>Inches (in)</li>
            </ol>
          </div>
        )}
      </div>
    </>
  )
}

export default Header;