import React, { useState } from "react";

const WeatherTemperature = (props) => {
  const [unit, setUnit] = useState("celsius");
  //Convert the displayed temperature to Fahrenheit by preventing default link behaviour
  //and updating the unit state to "Fahrenheit"
  function showFahrenheitTemperature(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  /*Convert the displayed temperature to Celsius by preventing default link behavious
  and updating the unit state to Celsius unit */
  function showCelsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  /*Calculates the Fahrenheit equivalent of the given Celsius temperature using the formula Fahrenheit =  (Celsius X 1.8) + 32 */
  function fahrenheit() {
    let fahrenheit = props.celsius * 1.8 + 32;
    return fahrenheit;
  }
  if (unit === "celsius") {
    //show celsius
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheitTemperature}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    //show fahrenheit
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsiusTemperature}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
};

export default WeatherTemperature;
