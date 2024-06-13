// CurrentWeather.js
import React, { useState, useEffect } from "react";
// import Card from "./components/Card";
import DisplayWeather from "../components/CurrentCard.js";
// import "../components/currentweather.css";

const ruDate = new Intl.DateTimeFormat("ru", {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
})
  .format(new Date())
  .replace(/(\s?\г\.?)/, "");

function CurrentWeather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "f31a052f7320025f37dfb3fad6336d79";

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${form.city},${form.country}&exclude=hourly,daily&APPID=${APIKEY}&lang=ru`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <div className="weather">
      <br />
      <form>
        <div className="rudate">
          <h1>Дата: {ruDate}</h1>
        </div>
        <input
          className="input_name_1"
          type="text"
          placeholder="Введите названия города"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        {/* &nbsp; &nbsp; &nbsp;&nbsp; */}
        {/* <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        /> */}
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Поиск на сегодня
        </button>
        </form>
          {console.log(weather)
          }

            {/* {console.log(dt)} */}
            {weather.data !== undefined ?
                (
                  <div>
                    <DisplayWeather data={weather.data} />
                  </div>
                )
              :
            null
            }
          {/* <button onClick={onShowWeekContainer}>Show 5-Day Forecast</button> */}
    </div>
  );
}

export default CurrentWeather;
