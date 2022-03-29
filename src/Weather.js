import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

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
  });
}

function search(){
  const apiKey = "a50f410ea36ad12d8cb30de68e6fc33b";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
}
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

if (weatherData.ready) {
return (
  <div className="Weather">
  <form className="input-group" id="search-form" onSubmit={handleSubmit}>
    <input
      type="text"
      className="form-control mb-3 "
      placeholder="enter a city"
      id="city-input"
      autoComplete="off"
      autoFocus="on"
      onChange={handleCityChange}
    />
    <button
      className="btn btn-outline-secondary mb-3"
      type="submit"
      id="search-button"
    >
      <i className="fas fa-search-location"></i>
    </button>
    <button
      className="btn btn-outline-secondary mb-3"
      type="button"
      id="current-button"
    >
      <i className="fas fa-map-pin"></i> current location
    </button>
  </form>
  <WeatherInfo data={weatherData} />
  </div>
  );
}
  else {
    search();
    return ("Loading...");
  }
}

