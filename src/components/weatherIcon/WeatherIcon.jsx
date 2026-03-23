import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = (props) => {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-cloudes-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "THUNDERSTORM_DAY",
    "thunderstorm-night": "THUNDERSTORM_NIGHT",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "MIST",
    "mist-night": "MIST",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="1E1E1E"
      size={64}
      animate={true}
    />
  );
};

export default WeatherIcon;
