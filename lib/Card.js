import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="Card">
        {
          this.props.data.tenHigh && 
            <span>
              <h3>{this.props.data.tenDayDay}</h3>
              <img src={this.props.data.tenImg} />
              <p>{this.props.data.tenHigh}</p>
              <p>{this.props.data.tenLow}</p>
            </span>
        }
        {
          this.props.data.hourlyTime &&
            <span>
              <h3>{this.props.data.hourlyTime}</h3>
              <img src={this.props.data.hourlyImg} />
              <p>{this.props.data.hourlyTemp}</p>
            </span>
        }
      </div>      
    );
  }
}

Card.propTypes = {
  data: PropTypes.object
};

