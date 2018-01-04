import React from 'react';

export default class GetWeather extends React.Component {
  constructor() {
    super();

    this.state = {
      city: 'Denver',
      geoState: 'Colorado'
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      city: e.target.value
    })
    console.log(e.target.value)
  }

  handleBtnClick() {
    this.props.getWeather(this.state.city)
  }

  render() {
    return (
      <div>
        <label htmlFor="weatherSearch">Find Your City</label>
        <input
          id="weatherSearch"
          type="text"
          value={this.state.city}
          onChange={this.handleSearchInput}
        />
        <button onClick={this.handleBtnClick}>Search</button>
      </div>
    )

  }


}