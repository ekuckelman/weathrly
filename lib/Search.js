import React from 'react';
import { Trie } from '@wagasky/complete-me';
import cities from './cities.js'

const searchTrie = new Trie();

searchTrie.populate(cities.data);

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      display: '', 
      suggestions: []
  
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getCity = this.getCity.bind(this)
  }

  componentDidMount() {
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

  getCity(e) {
    this.setState({
      display: e.target.value,
      suggestions: searchTrie.suggest(e.target.value)
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

        {
        this.state.suggestions && this.state.suggestions.slice(0, 5).map( (suggestion, index) => <p key={index}>{suggestion}</p>)
        }
      </div>
    )
  }
}

 // <datalist> 
//    <option value={ Trie.suggest(this.state.display)[0] } />
//  </datalist>


      

