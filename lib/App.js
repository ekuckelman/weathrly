import React from 'react';
import Search from './Search.js'
import Current from './Current.js';
import HourlyForecast from './HourlyForecast.js';
import TenDayForecast from './TenDayForecast.js';
import Card from './Card.js';
import Data from './mockData.js';
import GetWeather from './GetWeather.js'
import api from './api.js'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentCity: '', 
      currentCondition: '',
      currentDay: '',
      currentTemp: '',
      currentDayHigh: '', 
      currentDayLow: '', 
      currentDaySummary: '', 
      currentWeatherImg: ''
    }
  }

  componentDidMount () {
    this.getWeather('Boulder');
    console.log('fetching data')
  }

  getWeather(city) {
    api.getWeather(city)
    .then( json => {
      this.setState({ 
      currentCity: json.results.current_observation.display_location.city, 
      currentCondition: json.results.forecast.simpleforecast.forecastday[0].conditions,
      currentDay: json.results.forecast.txt_forecast.forecastday[0].title,
      currentTemp: json.results.forecast.simpleforecast.forecastday[0].conditions,
      currentDayHigh: json.results.forecast.simpleforecast.forecastday[0].high.fahrenheit, 
      currentDayLow: json.results.forecast.simpleforecast.forecastday[0].low.fahrenheit, 
      currentDaySummary: json.results.forecast.txt_forecast.forecastday[0].fcttext,
      currentWeatherImg: json.results.forecast.txt_forecast.forecastday[0].icon_url
      }) 
      console.log(json.results)
    })
    .then(console.log('data fetched'));
  }

  render() {
     return (
      <div>
        <Search />
        <Current currentCity={this.state.currentCity}/>
        <HourlyForecast />
        <TenDayForecast />
        <Card />
      </div>
    )
  } 
} 

