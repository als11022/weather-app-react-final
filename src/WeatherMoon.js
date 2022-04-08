import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherMoon(props){

    const [loaded, setLoaded] = useState(false);
    const [moon, setMoon] = useState(null);
  
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
  
    function handleResponse(response){
        setMoon({
            moonrise: (response.data.moonrise),
            moonset: (response.data.moonset),
        })
        setLoaded(true);
    }
  
  if (loaded) {
    return (
      <div className="WeatherMoon">
  <div className = "row">
                              <div className= "col-md text-center">
                              <div><strong>Moonrise</strong></div>
                              <img
                  src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/moonrise.svg"
                  alt="fahrenheit"
                  height="55" />
                              <div className="moonTime">{moon.moonrise} </div>
                              </div>
                              <div className= "col-md text-center">
                              <div><strong>Moonset</strong></div>
                              <img
                  src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/moonset.svg"
                  alt="fahrenheit"
                  height="55" />
                              <div className="moonTime">{moon.moonset}</div>
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