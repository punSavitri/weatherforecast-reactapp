import React from "react";
import WeatherIcon from "../weatherIcon/WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecastDay = () => {
  return (
    <div className="weatherforecast">
      <div className="row mt-4">
        <div className="col">
          <div className="weatherforecast-day">WED</div>
          <WeatherIcon code="few-clouds-night" size={36} />
          <div>
            <span className="weatherforecast-temperature-max">15°</span>
            <span className="weatherforecast-temperature-min">7°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
