import React, { useState } from "react";
import './HourlyForecast.css'
import dropDownIcon from "./assets/images/icon-dropdown.svg"

function HourlyForecast() {
  const [active, setActive] = useState(false)
   // false => metric, true => imperial
  return (
    <div className='hourlyForecast'>
      <div className='HourlyBox box'>
        <div className='top'>
          <div className='text'>
            Hourly forecast
          </div>
          <div className='daySelector' onClick={() => setActive(!active)}>
            <div className='day'>Monday</div>
            <img className="dropDownIcon" src={dropDownIcon} alt="dropDownIcon"/>
          </div>
        </div>
        <div className='bottom'>
          <div className='hour 12am'></div>
          <div className='hour 1am'></div>
          <div className='hour 2am'></div>
          <div className='hour 3am'></div>
          <div className='hour 4am'></div>
          <div className='hour 5am'></div>
          <div className='hour 6am'></div>
          <div className='hour 7am'></div>
          <div className='hour 8am'></div>
          <div className='hour 9am'></div>
          <div className='hour 10am'></div>
          <div className='hour 11am'></div>
          <div className='hour 12am'></div>
          <div className='hour 1pm'></div>
          <div className='hour 2pm'></div>
          <div className='hour 3pm'></div>
          <div className='hour 4pm'></div>
          <div className='hour 5pm'></div>
          <div className='hour 6pm'></div>
          <div className='hour 7pm'></div>
          <div className='hour 8pm'></div>
          <div className='hour 9pm'></div>
          <div className='hour 10pm'></div>
          <div className='last hour 11pm'></div>
        </div>
      </div> 
      <div>
        {active && (
          <div className="dropDownList2">
            <ol>
              <li>Sunday</li>
              <li>Monday</li>              
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
            </ol>
          </div>
        )}
      </div>     
    </div>
  )
}

export default HourlyForecast;