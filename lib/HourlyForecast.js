import React from 'react';
import Card from './Card.js'

export default function HourlyForecast(props) {
    return (
      <div>
        <h2>Hourly forecast</h2>
        {
          props.hourlyData.map( hour => <Card data={hour} />)
        }
      </div>
    )
  }