import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="overview">
          <h1 id="city">{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date}/> <span id="date"></span>
            </li>
            <li className= "text-capitalize" id="description">{props.data.description}</li>
          </ul>
        </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  className="float-left"
                />
                <div className="float-left">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Feels Like: <span id="feels-like">{props.data.feel}</span> °C
                </li>
                <li>
                  Humidity: <span id="humidity">{props.data.humidity}</span> %
                </li>
                <li>
                  Wind: <span id="wind">{props.data.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
}