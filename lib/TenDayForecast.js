import React from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';
import './TenDayForecast.css';

export default function TenDayForecast(props) {
  return (
    <div className="TenDayForecast">
      <h2>Ten-day forecast</h2>
      {
        props.tenDayData.map( (day, index) => <Card key={index} data={day} />)
      }
    </div>
  )
}

TenDayForecast.propTypes = {
  key: PropTypes.string,
  data: PropTypes.object
};