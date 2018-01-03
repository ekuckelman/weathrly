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
        <h1>Weathrly</h1>
        <img src={this.props.currentWeatherImg} width="50" />
        <h3>{this.props.currentDay} {this.props.dayHigh}/{this.props.dayLow}</h3>
        <h2>It's {this.props.currentWeather}</h2>
        <h4>in {this.props.currentTemp}</h4>
        <h4>in {this.props.currentCity}</h4>
        <p>{this.props.daySummary}</p>
      </div>
    )
  }
}