import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import './HourlyForecast.css';


export default function HourlyForecast(props) {
  return (
    <div className="HourlyForecast">
      <h2 className="sectionTitle">Hourly forecast</h2>
      <div className="cardContainer">
        {
          props.hourlyData
            .map( (hour, index) => 
              <Card 
                className="Card" 
                key={index} 
                data={hour}
              />)
        }
      </div>
    </div>
  );
}

HourlyForecast.propTypes = {
  hourlyData: PropTypes.object,
  key: PropTypes.string,
  data: PropTypes.object
};