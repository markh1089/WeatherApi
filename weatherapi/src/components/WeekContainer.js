import React, { Component } from "react";
import InputForm from "./InputForm";
import WeatherCard from "./WeatherCard";

const API_KEY = process.env.REACT_APP_API_KEY;
// let location = 'Leeds'

class WeekContainer extends Component {
  state = {
    completeDataSet: [],
    dailyDataSet: [],
    location: "Leeds",
  };

  
  componentDidMount = () => {
    
    
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&units=metric&appid=${API_KEY}`;
    
    fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      const dayData = data.list.filter((time) =>
      time.dt_txt.includes("12:00:00")
      );
      this.setState({
        completeDataSet: data.list,
        dailyDataSet: dayData,
      });
      console.log(this.state);
    })
    .catch(console.log);
  };
  

  
  mapWeatherCards = () => {
    return this.state.dailyDataSet.map((time, index) => (
      <WeatherCard time={time} key={index} />
      ));
    };
    



  render() {
    return (
      <div className="container">
        <h1 className="weatherTitle"> 5 day Weather forecast</h1>
        <InputForm changeLocation = {this.changeLocation}/>

        <div className="row justify-content-center cards">
          {this.mapWeatherCards()}
        </div>
      </div>
    );
  }
}

export default WeekContainer;
