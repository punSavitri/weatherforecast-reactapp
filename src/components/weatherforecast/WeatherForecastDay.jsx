import React from "react";
import WeatherIcon from "../weatherIcon/WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecastDay = (props) => {
  console.log(props);

  /*Extracts the maximum temperature from props, rounds it to the nearest whole number
  and formats it with a degree symbol for display */
  function maximumTemperature() {
    let maxtemperature = Math.round(props.data.temperature.maximum);
    //console.log(maxtemperature);
    return `${maxtemperature}°`;
  }

  /*extracts the minimum temperature from props, rounds it to the nearest whole number,
  and formats it with a degree symbol for display */
  function minimumTemperature() {
    let mintemperature = Math.round(props.data.temperature.minimum);
    return `${mintemperature}°`;
  }
  /*returns the 3-letter weekday name (e.g "Mon") based on the given date*/
  function day() {
    const timestamp = props.data.time * 1000; //convert seconds into milliseconds
    const date = new Date(timestamp);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  return (
    <div className="weatherforecast">
      <div className="row mt-4">
        <div className="col">
          <div className="weatherforecast-day">{day()}</div>
          <WeatherIcon code={props.data.condition.icon} size={36} />
          <div>
            <span className="weatherforecast-temperature-max">
              {maximumTemperature()}
            </span>
            <span className="weatherforecast-temperature-min">
              {minimumTemperature()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
