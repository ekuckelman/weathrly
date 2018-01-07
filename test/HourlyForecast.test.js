import React from 'react';
import { mount, shallow } from 'enzyme';
import HourlyForecast from '../lib/HourlyForecast.js'

const hourly = [
  {hourlyTime: '1:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
  {hourlyTime: '2:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
  {hourlyTime: '3:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
  {hourlyTime: '4:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
  {hourlyTime: '5:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
  {hourlyTime: '6:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
  {hourlyTime: '7:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'}
]

describe('HourlyForecast', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyForecast hourlyData={hourly}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should display 7 cards', () => {
    expect(wrapper.find('Card').length).toEqual(7)
  })

  it('should display the right info', () => {
    wrapper = mount(<HourlyForecast hourlyData={hourly} />)

    expect(wrapper.find('h3').first().text()).toEqual('1:00 PM')
    expect(wrapper.find('img').first().prop('src')).toEqual('http://icons.wxug.com/i/c/k/snow.gif')
    expect(wrapper.find('p').first().text()).toEqual('32')
  })
})
