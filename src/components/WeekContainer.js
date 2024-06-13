import React, { useState, useEffect } from "react";
import Card from "../components/WeekCard.js";
// import "../components/weekcontainer.css";

const ruDate = new Intl.DateTimeFormat("ru", {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
})
  .format(new Date())
  .replace(/(\s?\г\.?)/, "");

function WeekContainer() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  // const [city, setCity] = useState(""); // Используйте `useState` для города
  const APIKEY = "f31a052f7320025f37dfb3fad6336d79";
  // const [city, setCity] = useState("Прага");

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${form.city}&exclude=hourly,daily&APPID=${APIKEY}&lang=ru`;

      try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        console.log("data1", data);
        // Фильтруем данные, получая только прогноз на 12:00 каждого дня
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("12:00:00")
        );
        const cityName = data.city.name;
        // const dateweather = data.list.dt;
        console.log("cityName", cityName);

        // Обновляем состояние компонента с полученными данными.
        // Передаем в состояние также код ответа и значок погоды
        // setWeather(dailyData.);
        setWeather(
          dailyData.map((day) => ({
            ...day,
            icon: day.weather[0].icon,
            cod: data.cod,
          }))
        );

        setForm({ ...form, city: cityName }); //  Обновляем `form.city`
        // setForm({ ...form, dt: dateweather }); //  Обновляем `Дату`
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }

  // Функция для создания карточек погоды
  const formatCards = () => {
    return weather.map((day, index) => (
      <Card day={day} key={index} cod={day.cod} /> // Передаем cod в качестве пропса
    ));
  };

  const handleChange = (e) => {
    setForm({ ...form, city: e.target.value });
  };

  return (
    <div className="App">

      <br />
      <form onSubmit={weatherData}>
        {" "}
        {/* Используем onSubmit для отправки формы */}
        <p>
          <h1>Дата: {ruDate}</h1>
          <input
            className="input_name_5"
            type="text"
            placeholder="Введите названия города"
            name="city"
            value={form.city} //  Используем value для 2-сторонней привязки
            onChange={handleChange}
          />
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Поиск на 5 дней
          </button>
        </p>
        {/* <h5 className="display-4 text-muted">{form.city}</h5> */}
        {/* Используем город из состояния */}
        <div className="row justify-content-center">{formatCards()}</div>
      </form>
    </div>
  );
}

export default WeekContainer;
