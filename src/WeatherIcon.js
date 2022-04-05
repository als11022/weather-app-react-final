import React from "react";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg",
        "01n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-night.svg",
        "02d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day.svg",
        "02n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-night.svg",
        "03d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/cloudy.svg",
        "03n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/cloudy.svg",
        "04d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/overcast-day.svg",
        "04n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/overcast-night.svg",
        "09d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/rain.svg",
        "09n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/rain.svg",
        "10d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day-drizzle.svg",
        "10n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-night-drizzle.svg",
        "11d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/thunderstorms-day-rain.svg",
        "11n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/thunderstorms-night-rain.svg",
        "13d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/snow.svg",
        "13n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/snow.svg",
        "50d": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/mist.svg",
        "50n": "https://bmcdn.nl/assets/weather-icons/v2.0/fill/mist.svg",
    }

return (
    <img 
    src={codeMapping[props.data]}
    alt={props.alt}
    height="40"/>
);
}