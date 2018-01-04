export default function CleanData extends React.Component {
  constructor() {
    super();

    this.state = {
      currentCity: '', 
      currentCondition: '',
      currentDay: '',
      currentTemp: '',
      currentDayHigh: '', 
      currentDayLow: '', 
      currentDaySummary: '', 
      currentWeatherImg: ''
    }
  }

  createCleanCurrent() {
    this.setState({ 
      currentCity: Data.current_observation.display_location.city, 
      currentCondition: Data.forecast.simpleforecast.forecastday[0].conditions,
      currentDay: Data.forecast.txt_forecast.forecastday[0].title,
      currentTemp: Data.forecast.simpleforecast.forecastday[0].conditions,
      currentDayHigh: Data.forecast.simpleforecast.forecastday[0].high.fahrenheit, 
      currentDayLow: Data.forecast.simpleforecast.forecastday[0].low.fahrenheit, 
      currentDaySummary: Data.forecast.txt_forecast.forecastday[0].fcttext,
      currentWeatherImg: Data.forecast.txt_forecast.forecastday[0].icon_url
    })
  }

  componentDidMount(){
    this.createCleanCurrent();
  }

  render() {
    return(
    <div>
        <img src={this.state.currentWeatherImg} width="50" />
        <h3>{this.state.currentDay} {this.state.currentDayHigh}/{this.state.currentDayLow}</h3>
        <h2>It's {this.state.currentCondition}</h2>
        <h4>in {this.state.currentTemp}</h4>
        <h4>in {this.state.currentCity}</h4>
        <p>{this.state.currentDaySummary}</p>
      </div>
      )
  }

}

// const weather = {
//   current: {
//     currentCity: 'Denver', 
//     currentCondition: 'Partly sunny',
//     currentDay: 'Monday',
//     currentTemp: 79,
//     dayHigh: 80, 
//     dayLow: 76, 
//     daySummary: 'Cloudy with a chance of meatballs'
//   },
//   tenDay: [
//     { currentDay: 'Monday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Tuesday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Wednesday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Thursday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Friday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Saturday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Sunday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     }, 
//     { currentDay: 'Monday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Tuesday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     },
//     { currentDay: 'Wednesday',
//       img: 'http://google.com',
//       dayHigh: 81,
//       dayLow: 75
//     }
//   ]
//   sevenHour: {
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     },
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     },
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     },
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     },
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     },
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     },
//     { civilHour: '7:00 am',
//       img: 'http://google.com',
//       projectedTemp: 67
//     }
//   }
// }