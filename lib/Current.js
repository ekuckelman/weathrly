import React, { Component } from 'react';
import './Current.css';

export default class Current extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="currentWeather">
        <p>For { this.props.currentDay }</p>
        <img src={ this.props.currentWeatherImg } />
        <h3>It's { this.props.currentCondition }</h3>
        <p>in { this.props.currentCity }</p>
        <h4>with a high of { this.props.currentDayHigh }</h4>
        <h4>and a low of { this.props.currentDayLow } </h4>
        <p>{ this.props.currentDaySummary } </p>
      </div>
    );
  }
}
