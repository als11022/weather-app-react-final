import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherMoon(props){

    const [loaded, setLoaded] = useState(false);
    const [sun, setSun] = useState(null);
  
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
  
    function handleResponse(response){
        setSun({
            sunrise: (response.data.sunrise),
            sunset: (response.data.sunset),
        })
        setLoaded(true);
    }
  
  if (loaded) {
    return (
        <div className="WeatherSun">
        <div className = "row">
            <div className= "col-md text-center">
            <div><strong>Sunrise</strong></div>
            <img
src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/sunrise.svg"
alt="fahrenheit"
height="55" />
            <div className="sunTime">{sun.sunrise}</div>
            </div>
            <div className= "col-md text-center">
            <div><strong>Sunset</strong></div>
            <img
src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/sunset.svg"
alt="fahrenheit"
height="55" />
            <div className="sunTime">{sun.sunset} </div>
            </div>
</div>
</div>
    );
  }
  else {
    const ipgKey = "0c0612e81a3143938de384004abcde1b"; 
    let latitude= props.coordinates.lat;
    let longitude= props.coordinates.lon;
    let ipgUrl = `https://api.ipgeolocation.io/astronomy?apiKey=${ipgKey}&lat=${latitude}&long=${longitude}`;
    axios.get(ipgUrl).then(handleResponse);
    
    return null;
  }
}

