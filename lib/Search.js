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
    // pull from LS here
    // this.getObjectFromStorage();
    this.props.getWeather(this.display);
  }

  handleBtnClick() {
    this.props.getWeather(this.state.display);
    this.putObjectInStorage();
  }

  putObjectInStorage() {
    var stringifiedObject = JSON.stringify(this.state);
    localStorage.setItem('location', stringifiedObject);
  }

  // getObjectFromStorage() {
  //   var retrievedObject = localStorage.getItem('location')
  //   var parsedObject = JSON.parse(retrievedObject);
  //   console.log('getObjectFromStorage fired: ', parsedObject)
  // }

  getCity(e) {
    console.log(this.state)
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





