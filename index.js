import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import City from "./City";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Send a property name and temperature to the City component and display
        the properties in the City component
      </p>

      <City name="Johannesburg" temp={25}/>
      <City name="London" temp= {14} />
      <City name="Mauritius" temp= {30} />
    </div>
  </StrictMode>
);

