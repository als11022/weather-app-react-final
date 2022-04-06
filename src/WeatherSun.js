import React from "react";

export default function WeatherSun(props) {
        let sunriseHours = props.data.sunrise.getHours();
        if (sunriseHours<10){
            sunriseHours = `0${sunriseHours}`;
        }
        let sunriseMinutes = props.data.sunrise.getMinutes();
        if (sunriseMinutes <10) {
            sunriseMinutes = `0${sunriseMinutes}` ;
        }

        let sunsetHours = props.data.sunset.getHours();
        if (sunsetHours<10){
            sunsetHours = `0${sunsetHours}`;
        }
        let sunsetMinutes = props.data.sunset.getMinutes();
        if (sunsetMinutes <10) {
            sunsetMinutes = `0${sunsetMinutes}` ;
        }
            
            return (
                <div className="WeatherSun">

                        <div className = "row">
                            <div className= "col text-center">
                            <div>Sunrise</div>
                            <img
                src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/sunrise.svg"
                alt="fahrenheit"
                height="40" />
                            <div className="sunTime">{sunriseHours}:{sunriseMinutes} </div>
                            </div>
                            <div className= "col text-center">
                            <div>Sunset</div>
                            <img
                src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/sunset.svg"
                alt="fahrenheit"
                height="40" />
                            <div className="sunTime">{sunsetHours}:{sunsetMinutes} </div>
                            </div>
                </div>
            </div>
              );
        }