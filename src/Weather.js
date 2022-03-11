import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature">40</strong>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels Like: <span id="feels-like">31</span> °F
            </li>
            <li>
              Humidity: <span id="humidity">71</span> %
            </li>
            <li>
              Wind: <span id="wind">17</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
