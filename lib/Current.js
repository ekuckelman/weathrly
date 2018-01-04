import React, { Component } from 'react';

export default class Current extends Component {
  constructor(props){
    super();
  }

  grabData(){

  }

  render() {
    return (
      <div>
        <h4>City should be {this.props.currentCity}</h4>
      </div>    
    )
  }
}

// <img src={this.state.currentWeatherImg} width="50" />
// <h3>{this.state.currentDay} {this.state.currentDayHigh}/{this.state.currentDayLow}</h3>
// <h2>It's {this.state.currentCondition}</h2>
// <h4>in {this.state.currentTemp}</h4>

// <p>{this.state.currentDaySummary}</p>
