import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "a50f410ea36ad12d8cb30de68e6fc33b";
  const units = "metric";
  let city = "New York";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  return (
    <div className="Weather">
    <div className="Header">
    <div className="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: Friday, 17:30 <span id="date"></span>
        </li>
        <li id="description">Mostly Cloudy</li>
      </ul>
    </div>
  </div>
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
