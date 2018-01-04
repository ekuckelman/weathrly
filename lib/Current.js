import React, { Component } from 'react';

export default class Current extends Component {
  constructor(props){
    super();
  }

  grabData(){

  }

  render() {
    return (
      <div>
        <p>For { this.props.currentDay }</p>
        <h3>It's { this.props.currentCondition }</h3>
        <img src={ this.props.currentWeatherImg } />
        <p>in { this.props.currentCity }</p>
        <h4>with a high of { this.props.currentDayHigh } </h4>
        <h4>and a low of { this.props.currentDayLow } </h4>
        <p>{ this.props.currentDaySummary } </p>
      </div>
    )
  }
}

//<Card top:{dayinfo} icon: temp: vs high: low: />

// currentCity: data.current_observation.display_location.city, 
//       currentCondition: data.current_observation.weather,
//       currentDay: data.forecast.txt_forecast.forecastday[0].title,
//       currentTemp: data.current_observation.temp_f,
//       currentDayHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit, 
//       currentDayLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit, 
//       currentDaySummary: data.forecast.txt_forecast.forecastday[0].fcttext,
//       currentWeatherImg