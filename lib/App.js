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
import PropTypes from 'prop-types';
import './App.css';

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
    let retrievedObject = localStorage.getItem('location');
    let parsedObject = JSON.parse(retrievedObject);
    return parsedObject;
  }

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
        return <Welcome getWeather={this.getWeather}/>;
      }
  } 
    }
    
} 


