import React from "react";

export default function ForecastDay(props) {
function maxTemperature(){
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}°C`
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

let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
return (
  <div className="WeatherForecastDay">
    <div className= "ForecastDay" >{day()}</div> 
    <div>
      <img src={iconUrl} alt={props.data.weather[0].description}  className="ForecastIcons"/>
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