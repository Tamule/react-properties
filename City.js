import React from "react";

export default function City(props) {
  return (
    <div className="City">
  It is {props.temp}°C in {props.name}
  </div>
  );
}
