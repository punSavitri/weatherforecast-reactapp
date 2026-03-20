import React from "react";
import "./FormattedDate.css";

const FormattedDate = (props) => {
  // console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  //determine AM or PM
  let ampm = hours >= 12 ? "PM" : "AM";

  if (hours < 10) {
    hours = `0${hours}`;
  }
  //adding leading zeros
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes} {ampm}
    </div>
  );
};

export default FormattedDate;
