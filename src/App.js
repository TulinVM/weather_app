import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeekContainer from "./components/WeekContainer";
import "./App.css";

function App() {
  const [showWeekContainer, setShowWeekContainer] = useState(false);

  const handleShowWeekContainer = () => {
    setShowWeekContainer(true);
  };
  const handleShowCurrentWeather = () => {
    setShowWeekContainer(false);
  };

  return (
    <div>
      <span className="title_name">Прогноз погоды</span>
      <button className="button_1" onClick={handleShowCurrentWeather}>
        Сегодня
      </button>
      <button className="button_5" onClick={handleShowWeekContainer}>
        На 5 дней
      </button>

      {!showWeekContainer ? (
        <CurrentWeather onShowWeekContainer={handleShowWeekContainer} />
      ) : (
        <WeekContainer />
      )}
    </div>
  );
}

export default App;
