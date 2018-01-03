import React from 'react';
import Current from './Current.js';
import Data from './mockData.js';

export default function App() {
  return (
    <Current 
      currentDay="Tuesday"
      currentCity="Louisville"
      currentWeather="Mostly Cloudy"
      currentTemp="78"
      dayHigh="80"
      dayLow="70"
      daySummary="Mostly cloudy with a chance of meatballs"
    />
   )
} 