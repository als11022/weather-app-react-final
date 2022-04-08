import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeeklyForecast from "./WeeklyForecast";
import WeatherSun from "./WeatherSun";
import WeatherMoon from "./WeatherMoon";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    coordinates: response.data.coord,
    date: new Date(response.data.dt * 1000),
    temperature: Math.round(response.data.main.temp),
    humidity: Math.round(response.data.main.humidity),
    feel: Math.round(response.data.main.feels_like),
    wind: Math.round(response.data.wind.speed),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
  });
}

function search(){
  const apiKey = "a50f410ea36ad12d8cb30de68e6fc33b";
  let units = "imperial";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
    <div className="col-md-9">
    <input
      type="text"
      className="form-control mb-3"
      placeholder="enter a city"
      id="city-input"
      autoComplete="off"
      autoFocus="on"
      onChange={handleCityChange}
    />
    </div>
    <div className="col-3">
    <button
      className="btn btn-outline-secondary mb-3"
      type="submit"
      id="search-button"
    >Search {" "} {" "}
      <i className="fas fa-search-location"></i>
    </button>
    </div>
  </form>
  <WeatherInfo data={weatherData} />
  <WeeklyForecast coordinates={weatherData.coordinates} />
  <div className= "row">
    <div className= "col">
        <div className="card" id="sun">
          <div className="card-body">
                <WeatherSun coordinates={weatherData.coordinates} />
           </div>
          </div>
         </div>
         <div className= "col">
        <div className="card" id="moon">
          <div className="card-body" >
                <WeatherMoon coordinates={weatherData.coordinates} />
           </div>
          </div>
         </div>
        </div>
  </div>
  );
}
  else {
    search();
    return ("Loading...");
  }
}

