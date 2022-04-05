import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
function maxTemperature(){
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}°F`
}

function minTemperature(){
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}°`
}

function day() {
  let date= new Date(props.data.dt * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

return (
  <div className="WeatherForecastDay">
    <div className= "ForecastDay" >{day()}</div> 
    <div>
    <WeatherIcon data={props.data.weather[0].icon} alt={props.data.description} />
    </div>
    <div className="ForecastHigh">
    {maxTemperature()}
    </div>
    <div className="ForecastLow">
      {minTemperature()}
    </div>
    </div>
);

}