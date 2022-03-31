import React, { useState } from "react";
import axios from "axios";
import "./WeeklyForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

function handleResponse(response){
  console.log(response.data.daily);
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="card">
          <div className="card-header">
            5 Day Forecast
            </div>
          <div className="card-body" id="forecast">
            <div className = "row">
              <div className= "col">
<WeatherForecastDay data={forecast[2]} />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
else {
  const apiKey = "a50f410ea36ad12d8cb30de68e6fc33b"; 
  let latitude= props.coordinates.lat;
  let longitude= props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  return null;
}
}
