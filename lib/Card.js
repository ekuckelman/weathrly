import React from 'react';

export default class Card extends React.Component {
  constructor() {
    super();

  }

  render() {

    return (
      <div>
        {
          this.props.data.tenHigh && 
            <span>
              <h1>{this.props.data.tenDayDay}</h1>
              <img src={this.props.data.tenImg} />
              <p>{this.props.data.tenHigh}</p>
              <p>{this.props.data.tenLow}</p>
            </span>
        }
        {
          this.props.data.hourlyTime &&
            <span>
              <h1>{this.props.data.hourlyTime}</h1>
              <img src={this.props.data.hourlyImg} />
              <p>{this.props.data.hourlyTemp}</p>
            </span>
        }
      </div>      
    )
  }
}

