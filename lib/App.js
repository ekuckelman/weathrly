import React from 'react';
import Search from './Search.js'
import Current from './Current.js';
import HourlyForecast from './HourlyForecast.js';
import TenDayForecast from './TenDayForecast.js';
import Card from './Card.js';
import Data from './mockData.js';
import api from './api.js'
import clean from './clean.js'
import Welcome from './Welcome.js'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentWeather: null
    }

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount () {
    if (this.getObjectFromStorage()) {
      let displayData = this.getObjectFromStorage().display;
      this.getWeather(displayData);
    } 
  }

  getObjectFromStorage() {
    var retrievedObject = localStorage.getItem('location')
    var parsedObject = JSON.parse(retrievedObject);
    console.log('getObjectFromStorage fired: ', parsedObject)
    return parsedObject;
  }

  //maybe we should refactor getWeather() to clean the data immediately and pass that into this.state
  getWeather(display) {
    api.getWeather(display)
    .then( json => {
        this.setState({ currentWeather: json })
    })
  }

  render() {
    if (this.getObjectFromStorage() === null){
      return <Welcome getWeather={this.getWeather} />
    } else {
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
      } else {
        return null;
      }
  } 
    }
    
} 
