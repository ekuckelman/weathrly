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
        <h1>Weathrly</h1>
        <img src="https://openclipart.org/download/274911/sunshine.svg" width="50" />
        <h3>{this.props.currentDay} 71/72</h3>
        <h2>It's sunny</h2>
        <h4>in Denver, USA</h4>
        <p>Summary</p>
      </div>
    )
  }
}