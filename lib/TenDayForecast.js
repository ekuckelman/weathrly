import React from 'react';
import Card from './Card.js'

export default function TenDayForecast(props) {
  return (
    <div>
      <p>Ten-day forecast</p>
      {
        props.tenDayData.map( day => <Card data={day} />)
      }
    </div>
  )
}