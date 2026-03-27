import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

const WeatherForecast = (props) => {
  // console.log(props);
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  /*Processes the API response received from the weather service.
  Extracts the daily forecast data and updates the component state
  Mark the forecast as loaded so the UI can render the updated results */
  function handleResponse(response) {
    //console.log(response.data);
    setWeatherForecastData(response.data.daily);
    setLoaded(true);
  }

  /*fetches the weather forecast based on the user's current coordinates.
   Builds the API URL using latitude, longitude, API Key and meteric units*
   Sends a GET request to the SheCodes Weather API and triggers handleResponse() function
   Once the data is successfully retrieved*/
  function load() {
    let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="weatherforecast">
        <div className="row mt-5">
          {/* loop to display the 5 days forecast weather */}
          {weatherForecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
};

export default WeatherForecast;
