import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherMoon(props) {

  const [loaded, setLoaded] = useState(false);
  const [moon, setMoon] = useState(null);

  useEffect(() => {
      setLoaded(false);
  }, [props.coordinates]);

function handleResponse(response){
  setMoon({
      moonrise: new Date((response.data.daily[0].moonrise)*1000),
      moonset: new Date((response.data.daily[0].moonset)*1000),
  })
  setLoaded(true);
}

if (loaded) {
    let moonriseHours = moon.moonrise.getHours();
    if (moonriseHours<10){
        moonriseHours = `0${moonriseHours}`;
    }
    let moonriseMinutes = moon.moonrise.getMinutes();
    if (moonriseMinutes <10) {
        moonriseMinutes = `0${moonriseMinutes}` ;
    }
    let moonsetHours = moon.moonset.getHours();
    if (moonsetHours<10){
        moonsetHours = `0${moonsetHours}`;
    }
    let moonsetMinutes = moon.moonset.getMinutes();
    if (moonsetMinutes <10) {
        moonsetMinutes = `0${moonsetMinutes}` ;
    }
  return (
    <div className="WeatherMoon">
<div className = "row">
                            <div className= "col-md text-center">
                            <div><strong>Moonrise</strong></div>
                            <img
                src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/moonrise.svg"
                alt="fahrenheit"
                height="55" />
                            <div className="moonTime">{moonriseHours}:{moonriseMinutes} </div>
                            </div>
                            <div className= "col-md text-center">
                            <div><strong>Moonset</strong></div>
                            <img
                src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/moonset.svg"
                alt="fahrenheit"
                height="55" />
                            <div className="moonTime">{moonsetHours}:{moonsetMinutes}</div>
                            </div>
                </div>
      </div>
  );
}
else {
  const apiKey = "a50f410ea36ad12d8cb30de68e6fc33b"; 
  let latitude= props.coordinates.lat;
  let longitude= props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  
  return null;
}
}
