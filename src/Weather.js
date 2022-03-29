import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });

function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: Math.round(response.data.main.temp),
    humidity: Math.round(response.data.main.humidity),
    feel: Math.round(response.data.main.feels_like),
    wind: Math.round(response.data.wind.speed),
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  })

}
if (weatherData.ready) {
return (
  <div className="Weather">
    <div className="Header">
    <div className="overview">
      <h1 id="city">{weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date}/> <span id="date"></span>
        </li>
        <li className= "text-capitalize" id="description">{weatherData.description}</li>
      </ul>
    </div>
  </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature">{weatherData.temperature}</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels Like: <span id="feels-like">{weatherData.feel}</span> °C
            </li>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span> %
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  else {
    const apiKey = "a50f410ea36ad12d8cb30de68e6fc33b";
    let city = props.defaultCity;
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    
  }
}
