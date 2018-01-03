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
      currentWeather: []
    }
  }

  componentDidMount () {
    this.getWeather('Boulder')
  }

  getWeather(city) {
    api.getWeather(city)
    .then( json => this.setState({ currentWeather: json.results }))
  }

  render() {
     return (
      <div>
        <Search />
        <Current 
          currentDay={Data.forecast.txt_forecast.forecastday[0].title}
          currentCity={Data.current_observation.display_location.city}
          currentWeather={Data.forecast.txt_forecast.forecastday[0].icon}
          currentTemp={Data.forecast.simpleforecast.forecastday[0].conditions}
          dayHigh={Data.forecast.simpleforecast.forecastday[0].high.fahrenheit}
          dayLow={Data.forecast.simpleforecast.forecastday[0].low.fahrenheit}
          daySummary={Data.forecast.txt_forecast.forecastday[0].fcttext}
          currentWeatherImg={Data.forecast.txt_forecast.forecastday[0].icon_url}
        />
        <HourlyForecast />
        <TenDayForecast />
        <Card />
      </div>
    )
  } 
} 