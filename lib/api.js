import apiKey from '../apiKey.js'
const root = `http://api.wunderground.com/api/${apiKey.key}/conditions/q`;

function apiGet(url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getWeather(city) {
    return apiGet(`${root}/CO/${city}.json`)
    }
  }
