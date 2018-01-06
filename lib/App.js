import React from 'react';
import Search from './Search.js'
import Current from './Current.js';
import HourlyForecast from './HourlyForecast.js';
import TenDayForecast from './TenDayForecast.js';
import Card from './Card.js';
import Data from './mockData.js';
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
    // conditional
    // if nothing in ls
    // show welcome page
    // if there is, retreive the display prop
    // from local storage and insert into
    // get weather below
    this.getWeather('San Jose, CA');
  }

  getWeather(display) {
    api.getWeather(display)
    .then( json => {
        console.log(json)
        this.setState({ currentWeather: json })
    })
  }

  render() {
    if (this.state.currentWeather){
       return (
        <div>
          <Search getWeather={this.getWeather} />

          <Current 
            currentCity={ clean(this.state.currentWeather).current.currentCity }
            currentCondition={ clean(this.state.currentWeather).current.currentCondition }
            currentDay={ clean(this.state.currentWeather).current.currentDay }
            currentTemp={ clean(this.state.currentWeather).current.currentTemp }
            currentDayHigh={ clean(this.state.currentWeather).current.currentDayHigh }
            currentDayLow={ clean(this.state.currentWeather).current.currentDayLow }
            currentDaySummary={ clean(this.state.currentWeather).current.currentDaySummary }
            currentWeatherImg={ clean(this.state.currentWeather).current.currentWeatherImg }
          />

          <HourlyForecast 
            hourlyData={clean(this.state.currentWeather).hourly} />

          <TenDayForecast 
            tenDayData={clean(this.state.currentWeather).tenDay} />

        </div>
      )
    } else {return null}
  } 
} 
