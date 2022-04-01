import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import "./WeeklyForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
      setLoaded(false);
  }, [props.coordinates]);

function handleResponse(response){
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
              {forecast.map(function(dailyForecast, index) {
                if (index < 5){
                return (
              <div className= "col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
              </div>
                );}
                else {
                  return null;
                }
              })}
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
