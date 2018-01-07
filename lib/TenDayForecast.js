import React from 'react';
import Card from './Card.js'

export default function TenDayForecast(props) {
  return (
    <div>
      <h2>Ten-day forecast</h2>
      {
        props.tenDayData.map( (day, index) => <Card key={index} data={day} />)
      }
    </div>
  )
}