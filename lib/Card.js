import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <article>
        <p>{time}</p>

        <img src={this.props.currentWeatherImg} width="50" />
        <h3>{this.props.currentDay} {this.props.dayHigh}/{this.props.dayLow}</h3>
        <h2>It's {this.props.currentWeather}</h2>
        <h4>in {this.props.currentTemp}</h4>
        <h4>in {this.props.currentCity}</h4>
        <p>{this.props.daySummary}</p>
      </article>
    )
  }
}

//has two views
//hourly version and the day version
//hourly: time, icon, temp
//day: icon, high, low

//if it has props.high then display both high and low and do the day version of the card
//!props.high && <temp
