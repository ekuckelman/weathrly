import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      display: '',
      city: 'San Diego',
      state: 'CA'
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getCity = this.getCity.bind(this)
  }

  componentDidMount() {
    this.props.getWeather(this.state.city, this.state.state);
  }

  handleBtnClick() {
    console.log(this.state)
    this.props.getWeather(this.state.city, this.state.state);
  }

  getCity(e) {
    var userInput = e.target.value;
    var newCity = userInput.substring(0, userInput.indexOf(","));
    var newState = userInput.slice(-2);

    this.setState({
      display: e.target.value,
      city: newCity,
      state: newState
    })

  }

  render() {
    return (
      <div>
        <label htmlFor="searchText">Find weather for your city</label>
        <input 
          id="searchText"
          type='text'
          value={ this.state.display }
          onChange={ this.getCity }/>
        <button onClick={ this.handleBtnClick }>Submit</button>
      </div>
    )
  }
}