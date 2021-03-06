import React from "react";
import './WeatherCard.css'

const moment = require("moment");

const WeatherCard = ({ time }) => {
  let dateFormat = new Date();
  const weekday = time.dt * 1000;
  dateFormat.setTime(weekday);

  //weather details
  let day = moment(dateFormat).format("dddd")
  // let date = moment().format('MMMM Do YYYY') 
  let temp = Math.round(time.main.temp)
  let weatherDescription = time.weather[0].description
  let icon = time.weather[0].icon
  let iconLink = `http://openweathermap.org/img/wn/${icon}.png`
  console.log(weatherDescription)
  

  return (
    <div className="col-sm-2">
      <div className="card ">
        <h3 className="card-title">{day}</h3>
        <img classname='card-img-top' src={iconLink} alt='weatherIcon'></img>
        <h2>{temp} °C</h2>
        <p className='weatherDescription'>{weatherDescription}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
