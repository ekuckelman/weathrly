import React from 'react';
import Current from './Current.js';
import Data from './mockData.js';


export default function App() {
  return (
    <Current 
      currentDay={Data.forecast.txt_forecast.forecastday[0].title}
      currentCity={Data.current_observation.display_location.city}
      currentWeather={Data.forecast.txt_forecast.forecastday[0].icon}
      currentTemp={Data.forecast.simpleforecast.forecastday[0].conditions}
      dayHigh={Data.forecast.simpleforecast.forecastday[0].high.fahrenheit}
      dayLow={Data.forecast.simpleforecast.forecastday[0].low.fahrenheit}
      daySummary={Data.forecast.txt_forecast.forecastday[0].fcttext}
      currentWeatherImg={Data.forecast.txt_forecast.forecastday[0].icon_url}
    />
   )
} 