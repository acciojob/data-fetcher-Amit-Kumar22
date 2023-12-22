import React, { useState } from "react";
import Axios from "axios";
import "./../styles/App.css";

import Weather from "./WeatherApp";

const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "1b0a153a1e8e3418236afce6fa7462ca";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState({});

  function getSearch(e) {
    e.preventDefault();

    Axios.get(`${URL}${searchInput}&appid=${API_KEY}`)
      .then((res) => setWeatherData(res))
      .catch((err) => console.log(err));

    setSearchInput("");
  }

  return (
    <div>
      <form onSubmit={getSearch}>
        <input
          className="search"
          type="text"
          placeholder="Enter a city"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </form>
      <Weather data={weatherData} />
    </div>
  );
};

export default App;