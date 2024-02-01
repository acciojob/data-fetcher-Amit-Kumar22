import React from "react";

const Weather = ({ data }) => {
  console.log(data);

  return (
    <div>
      {data.data && (
        <pre className="weather">
          <h1>{data.data.name}</h1>

          <h1>
            {Math.floor((data.data.main.temp - 273.15) * (9 / 5) + 32)}°F{" "}
          </h1>
          <h1>{data.data.weather[0].description}</h1>
        </pre>
      )}
    </div>
  );
};

export default Weather;