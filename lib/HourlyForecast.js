import React from 'react';
import Card from './Card.js'

export default function HourlyForecast(props) {
    return (
      <div>
        <p>Hourly forecast</p>
        {
          props.hourlyData.map( hour => <Card data={hour} />)
        }
      </div>
    )
  }