import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import './TenDayForecast.css';

export default function TenDayForecast(props) {
  return (
    <div className="TenDayForecast">
      <h2 className="title">Ten-day forecast</h2>
      <div className="cardContainer">
      {
        props.tenDayData.map( (day, index) => <Card key={index} data={day} />)
      }
      </div>
    </div>
  );
}

TenDayForecast.propTypes = {
  key: PropTypes.string,
  data: PropTypes.object,
  tenDayData: PropTypes.object
};