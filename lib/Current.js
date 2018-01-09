import React, { Component } from 'react';
import './Current.css';
import PropTypes from 'prop-types';

export default class Current extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="currentWeather">
        <p>For { this.props.currentDay }</p>
        <img src={ this.props.currentWeatherImg } />
        <h3>It's { this.props.currentCondition } in { this.props.currentCity }
        </h3>
        <h4>{ this.props.currentDayHigh } / { this.props.currentDayLow }</h4>
        <p>{ this.props.currentDaySummary } </p>
      </div>
    );
  }
}

Current.propTypes = {
  currentDay: PropTypes.string,
  currentCondition: PropTypes.string,
  currentWeatherImg: PropTypes.string,
  currentCity: PropTypes.string,
  currentDayHigh: PropTypes.string,
  currentDayLow: PropTypes.string,
  currentDaySummary: PropTypes.string
};