import React from 'react';
import Search from './Search.js'
import Current from './Current.js';
import HourlyForecast from './HourlyForecast.js';
import TenDayForecast from './TenDayForecast.js';
import Card from './Card.js';
import Data from './mockData.js';
// import GetWeather from './GetWeather.js'
import api from './api.js'
import clean from './clean.js'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentWeather: null
    }

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount () {
    this.getWeather('Denver');
  }

  getWeather(city) {
    api.getWeather(city)
    .then( json => this.setState({ currentWeather: json.results }))
  }

  render() {
    if (this.state.currentWeather){
       return (
        <div>
          <Search />
          <Current currentCity={ clean(Data).current.currentCity }
            currentCondition={ clean(Data).current.currentCondition }
            currentDay={ clean(Data).current.currentDay }
            currentTemp={ clean(Data).current.currentTemp }
            currentDayHigh={ clean(Data).current.currentDayHigh }
            currentDayLow={ clean(Data).current.currentDayLow }
            currentDaySummary={ clean(Data).current.currentDaySummary }
            currentWeatherImg={ clean(Data).current.currentWeatherImg }
          />
          <HourlyForecast hourlyData={clean(Data).hourly} />
          <TenDayForecast tenDayData={clean(Data).tenDay} />
        </div>
      )
    } else {return null}
  } 
} 
