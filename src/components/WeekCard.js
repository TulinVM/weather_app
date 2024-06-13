import React from "react";
import "../components/weekcard.css";
// import { data } from "jquery";

class WeekCard extends React.Component {
  // Props: day, key(index)

  render() {
    const { day, cod } = this.props; // Получаем cod из пропсов
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString("ru", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    // const imgURL =
    //   "owf owf-" + this.props.day.weather[0].id + " owf-5x icon-style";
    // const { day } = props;
    // const imgURL =
    //   "http://openweathermap.org/img/wn/" +
    //   `${data.cod !== 404 ? data.weather[0].icon : null}` +
    //   ".png";
    const imgURL = `http://openweathermap.org/img/wn/${
      cod !== 404 ? day.icon : null
    }.png`;
    console.log(imgURL);

    // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32

    return (
      <div className="col-auto">
        <div className="card bg-light">
          <div className="card-title">{weekdayName}
            <div className="card-img"> 
              <img src={imgURL} alt="Иконка погоды"/>
            </div>
                {/* Используем img для отображения иконки */}
            <div className="card-param">
              Температура воздуха= {Math.round(this.props.day.main.temp)} °C                
              <p>Давление= {Math.round(this.props.day.main.pressure * 0.75)} мм рт ст</p>        
                <div className="card-body">
                  <div className="btn btn-dark btn-outline-light">
                      {this.props.day.weather[0].description}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeekCard;
