import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js'
import mockData from '../lib/mockData.js'

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the Welcome component if localStorage returns null', () => {
    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it('should render the Search, Current, Hourly and TenDay components', () => {
    localStorage.setItem('location', {
      "display": "Louisville, KY", 
      "suggestions": []
    });

    wrapper.setState({ currentWeather: mockData })

    expect(wrapper.find('Search').length).toEqual(1)
    expect(wrapper.find('Current').length).toEqual(1)
    expect(wrapper.find('HourlyForecast').length).toEqual(1)
    expect(wrapper.find('TenDayForecast').length).toEqual(1)
  })

  it('should have a default of an empty state', () => {
    expect(wrapper.state().currentWeather).toEqual(null)
  })

  it('should update state with mockData object', () => {
    expect(wrapper.state().currentWeather).toEqual(null)

    wrapper.setState({ currentWeather: mockData })

    expect(wrapper.state().currentWeather).toEqual(mockData);
  })

})




