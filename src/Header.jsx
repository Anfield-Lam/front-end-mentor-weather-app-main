import React, { useState } from "react";
import "./Header.css"
import logo from "./assets/images/logo.svg"
import units from "./assets/images/icon-units.svg"
import dropDownIcon from "./assets/images/icon-dropdown.svg"
import checkmark from "./assets/images/icon-checkmark.svg"

function Header() {
  const [active, setActive] = useState(false)
  const [unit, setUnit] = useState(false) // false => metric, true => imperial
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
              <li className="switch" onClick={() => setUnit(!unit)}>Switch To {unit ? "Metric" : "Imperial"}</li>
              <li className="constant">Temperature</li>
              <li className={!unit && "selected"}>Celsius (°C) {!unit && <div className="checkmark-container"><img src={checkmark}/></div>}</li>
              <li className={unit && "selected"}>Fahrenheit (°F) {unit && <div className="checkmark-container"><img src={checkmark}/></div>}</li>
              <div className="bottom-border"></div>
              <li className="constant">Wind Speed</li>
              <li className={!unit && "selected"}>km/h {!unit && <div className="checkmark-container"><img src={checkmark}/></div>}</li>
              <li className={unit && "selected"}>mph {unit && <div className="checkmark-container"><img src={checkmark}/></div>}</li>
              <div className="bottom-border"></div>
              <li className="constant">Precipitation</li>
              <li className={!unit && "selected"}>Millimeters (mm) {!unit && <div className="checkmark-container"><img src={checkmark}/></div>}</li>
              <li className={unit && "selected"}>Inches (in) {unit && <div className="checkmark-container"><img className="checkmark" src={checkmark}/></div>}</li>
            </ol>
          </div>
        )}
      </div>
    </>
  )
}

export default Header;