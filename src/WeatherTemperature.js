import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">
                {props.fahrenheit}
            </span>
            <span className="units">
                <img
                src= "https://bmcdn.nl/assets/weather-icons/v2.0/fill/thermometer-glass-fahrenheit.svg"
                alt="fahrenheit"
                height="40" />
            </span>
        </div>
    );
}