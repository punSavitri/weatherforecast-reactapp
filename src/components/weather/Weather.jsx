import React, { useState } from "react";
import "../weather/Weather.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Weather = (props) => {
  //assign state variables
  const [weatherData, setWeatherData] = useState({ ready: false });
  console.log(weatherData);
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherData(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      time: response.data.time,
      date: "Thursday 12:00",
    });
  }

  //this function to search city current weather information
  function search() {
    //making an api call
    let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    //console.log(apiUrl);
    //request axios to fetch data from API
    //DisplayWeatherData function show data on page
    axios.get(apiUrl).then(displayWeatherData);
  }

  //function to handle submit by user
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //funtion to handle change city
  function handleChangeCity(event) {
    setCity(event.target.value);
    console.log(city);
  }
  //if the weather data is available from api call then display form and data
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name"
                autoFocus="on"
                className="form-control search-input"
                onChange={handleChangeCity}
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
        <h2>{weatherData.city}</h2>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <img src={weatherData.icon} alt="Sunny Day" />
              </div>
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    //if the data not available then display React loader spinner
    return (
      // React loader Spinner
      <div className="text-center mt-3 pt-3">
        <ThreeDots
          visible={true}
          height={80}
          width={80}
          color="grey"
          radius={9}
          ariaLabel="three-dots-loading"
          wrapperClass=""
        />
      </div>
    );
  }
};

export default Weather;
