export default function clean(data) {
  const cleanData = {
    current: { 
      currentCity: data.current_observation.display_location.city, 
      currentCondition: data.current_observation.weather,
      currentDay: data.forecast.txt_forecast.forecastday[0].title,
      currentTemp: data.current_observation.temp_f,
      currentDayHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit, 
      currentDayLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit, 
      currentDaySummary: data.forecast.txt_forecast.forecastday[0].fcttext,
      currentWeatherImg: data.current_observation.icon_url
    },
    hourly: [],
    tenDay: []
  }

  for (let i = 0; i < 7; i++) {
    cleanData.hourly.push({
      hourlyTime: data.hourly_forecast[i].FCTTIME.civil,
      hourlyTemp: data.hourly_forecast[i].temp.english,
      hourlyImg: data.hourly_forecast[i].icon_url
    })
  }

  for (let i = 0; i < 10; i++){
    cleanData.tenDay.push({
      tenDayDay: data.forecast.simpleforecast.forecastday[i].date.weekday,
      tenImg: data.forecast.simpleforecast.forecastday[i].icon_url,
      tenHigh: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
      tenLow: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
    })
  }

  return cleanData;
}