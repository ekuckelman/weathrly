import React from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';

export default function HourlyForecast(props) {
    return (
      <div>
        <h2>Hourly forecast</h2>
        {
          props.hourlyData.map( (hour, index) => <Card key={index} data={hour} />)
        }
      </div>
    )
  }

TenDayForecast.propTypes = {
  key: PropTypes.string,
  data: PropTypes.object
};