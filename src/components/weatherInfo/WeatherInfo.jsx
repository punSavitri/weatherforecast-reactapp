import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "../formattedDate/FormattedDate";
import WeatherIcon from "../weatherIcon/WeatherIcon";

const WeatherInfo = (props) => {
  return (
    <div className="weatherinfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52}/>
            </div>
            <div>
              <span className="temperature">{props.data.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
