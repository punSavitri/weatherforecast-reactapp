import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

const WeatherForecast = (props) => {
  // console.log(props);
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //run this effect whenever the coordinates changes.
  //it resets the loading state and fetches the 5-day forecast weather
  //for the new latitude and longitude using the shecode API 
  useEffect(() => {
    if (!props.coordinates) return;

    setLoaded(false);

    let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    //console.log(apiUrl);
    axios.get(apiUrl).then((response) => {
      setWeatherForecastData(response.data.daily);
      setLoaded(true);
    });
  }, [props.coordinates]);

  //If the forecast data is not loaded yet, stop rendering the component.
  //once loaded, display the 5-day  forecast by taking the first five items
  //from the weatherforecastData array and rendering WeatherForecastDay component
  //display each item as on coloum layout
  if (!loaded) return null;
  return (
    <div className="weatherforecast">
      <div className="row mt-5">
        {/* loop through each item to display the 5 days forecast weather */}
        {weatherForecastData.slice(0, 5).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
