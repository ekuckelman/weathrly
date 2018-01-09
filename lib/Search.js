import React from 'react';
import { Trie } from '@wagasky/complete-me';
import cities from './cities.js';
import PropTypes from 'prop-types';
import './Search.css';

const searchTrie = new Trie();

searchTrie.populate(cities.data);

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      display: '', 
      suggestions: [],
      searchClass: ''
  
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getCity = this.getCity.bind(this);
  }

  componentDidMount() {
    this.props.getWeather(this.display);
  }

  handleBtnClick() {
    this.props.getWeather(this.state.display);
    this.putObjectInStorage();
  }

  // change var to let?

  putObjectInStorage() {
    var stringifiedObject = JSON.stringify(this.state);

    localStorage.setItem('location', stringifiedObject);
  }

  getCity(e) {
    let suggestionsArray = searchTrie.suggest(e.target.value);
    
    this.setState({
      display: e.target.value,
      suggestions: suggestionsArray,
      searchClass: e.target.value !== '' && !(suggestionsArray.length) && !parseInt(e.target.value) ? 'redInputBox' : 'normalInputBox'
    });
  }

  // add a conditional that detects if the last two letters return a viable state code in caps or lowercase


  render() {
    return (
      <div className="searchContainer">
        <label htmlFor="searchText">Find weather for your city </label>
        <input 
          id="searchText"
          list="datalist"
          type='text'
          className={this.state.searchClass}
          value={ this.state.display }
          onChange={ this.getCity }/>

          <datalist id="datalist"> 
            {
              this.state.suggestions && this.state.suggestions.slice(0, 5).map( (suggestion, index) => <option key={index} value={suggestion}></option>)
            }
          </datalist>
        <button id="searchButton" onClick={ this.handleBtnClick }>Submit</button>

        
      </div>
    );
  }
}


Search.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string
};
      

