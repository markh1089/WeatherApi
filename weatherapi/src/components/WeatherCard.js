import React from "react";
import './WeatherCard.css'

const moment = require("moment");

const WeatherCard = ({ time }) => {
  let dateFormat = new Date();
  const weekday = time.dt * 1000;
  dateFormat.setTime(weekday);

  //weather details
  let day = moment(dateFormat).format("dddd")
  let date = moment().format('MMMM Do YYYY') 
  let temp = Math.round(time.main.temp)
  let weatherDescription = time.weather[0].description
  let iconCode = time.weather[0].icon
  let weatherLink = `http://openweathermap.org/img/wn/${iconCode}.png`
  

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{day}</h3>
        <p>{date}</p>
        <h2>{temp} °C</h2>
        <img className='icon' src={weatherLink} alt='icon' />
        <p className='weatherDescription'>{weatherDescription}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
