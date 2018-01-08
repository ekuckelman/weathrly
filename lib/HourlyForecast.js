import React from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';
import './HourlyForecast.css';


export default function HourlyForecast(props) {
    return (
      <div className="HourlyForecast">
        <h2 className="sectionTitle">Hourly forecast</h2>
        {
          props.hourlyData.map( (hour, index) => <Card className="Card" key={index} data={hour} />)
        }
      </div>
    )
  }

HourlyForecast.propTypes = {
  key: PropTypes.string,
  data: PropTypes.object
};