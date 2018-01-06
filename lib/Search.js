import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      display: ''
  
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getCity = this.getCity.bind(this)
  }

  componentDidMount() {
    this.props.getWeather(this.display);
  }

  handleBtnClick() {
    this.props.getWeather(this.state.display);
  }

  getCity(e) {
    this.setState({
        display: e.target.value
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
