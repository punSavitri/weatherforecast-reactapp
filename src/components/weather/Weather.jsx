import React, { useState } from "react";
import "../weather/Weather.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import WeatherForecast from "../weatherforecast/WeatherForecast";

const Weather = (props) => {
  //assign state variables
  const [weatherData, setWeatherData] = useState({ ready: false });
  //console.log(weatherData);
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates:response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000), //convert API timestamp (in seconds) to a JavaScript Date object
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

  //handle form submission
  function handleSubmit(event) {
    event.preventDefault(); //stop the page from refreshing
    search(); //trigger search function on form submission
  }

  //capture user input from the input text field and update the city state
  function handleChangeCity(event) {
    setCity(event.target.value);
    console.log(city);
  }
  //render weather UI when data is loaded
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
        <WeatherInfo data={weatherData} />        
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search(); //call search function to fetch data
    return (
      // show the React loader Spinner until data arrives
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
