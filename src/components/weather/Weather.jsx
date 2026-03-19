import React from "react";
import "../weather/Weather.css";
import axios from "axios";

const Weather = () => {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city name"
              autoFocus="on"
              className="form-control search-input"
              required
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Thursday 12:00</li>
        <li>Sunny Day</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Sunny Day"
            
          />
          <span className="temperature">20</span><span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Paticipation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15kmh</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
