import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      city: 'San Diego',
      state: 'CA'
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getCity = this.getCity.bind(this)
  }

  componentDidMount() {
    this.props.getWeather(this.state.city);
  }


  handleBtnClick() {
    this.props.getWeather(this.state.city);
  }

  getCity(e) {
    this.setState({
      city: e.target.value
    })
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="searchText">Find weather for your city</label>
        <input 
          id="searchText"
          type='text'
          value={ this.state.city }
          onChange={ this.getCity }/>
        <button onClick={ this.handleBtnClick }>Submit</button>
      </div>
    )
  }
}