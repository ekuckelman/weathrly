import React from 'react';
import Trie from '@wagasky/complete-me';
import largest1000cities from 'largest1000cities.js'

const searchTrie = new Trie.Trie();
searchTrie.populate(largest1000cities);
console.log(searchTrie)

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
    this.putObjectInStorage();
  }

  putObjectInStorage() {
    var stringifiedObject = JSON.stringify(this.state);
    localStorage.setItem('location', stringifiedObject);
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

 // <datalist> 
   //       <option value={ Trie.suggest(this.state.display)[0] } />
     //   </datalist>



