import React from 'react';
import Search from './Search.js'
import PropTypes from 'prop-types';
import './Welcome.css';

export default function Welcome(props) {
  return (
    <div>
      <h1>Weathrly</h1>
      <Search getWeather={props.getWeather}/>
    </div>
  )
}

Welcome.propTypes = {
  getWeather: PropTypes.string
};