import React from "react";
import "../components/currentcard.css";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}
            </span>
            <td></td>
            <span className="cardsubtitle">
              На время запроса:{new Date().toLocaleTimeString()}
            </span>

            <div className="data_main_temp">
              {data.main.temp}
              <sup>o</sup>С
            </div>
            <div className="weather-icon">
              <img src={iconurl} alt="weather-icon" srcSet="" />
            </div>
            {/* Используем img для отображения иконки */}
            <td>
              <span className="weather-description">
                {data.weather[0].description}
              </span>
            </td>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tbody>
                  <tr>
                    <td>Мах/Мин</td>
                    <td>
                      <span>
                        {data.main.temp_max}/{data.main.temp_min}
                        <sup>o</sup>С
                      </span>
                    </td>

                    <td>Влажность</td>
                    <td>
                      <span>{data.main.humidity} %</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Давление</td>
                    <td>
                      <span>{data.main.pressure * 0.75} мм рт ст</span>
                    </td>

                    <td>Видимость</td>
                    <td>
                      <span>{data.visibility / 1000} км</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Скорость ветра</td>
                    <td>
                      <span>{data.wind.speed} метр/сек</span>
                    </td>

                    <td>Направление ветра</td>
                    <td>
                      <span>
                        {data.wind.deg}
                        <sup>o</sup>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Восход</td>
                    <td>
                      <span>
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      </span>
                    </td>

                    <td>Закат</td>
                    <td>
                      <span>
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                  {/* </div> */}
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">{data.message}</div>
      )}
    </div>
  );
}

export default DisplayWeather;
