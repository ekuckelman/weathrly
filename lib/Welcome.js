import React from 'react';
import Search from './Search.js'

export default function Welcome(props) {
  return (
    <div>
      <h1>Weathrly</h1>
      <Search getWeather={props.getWeather}/>
    </div>
  )
}