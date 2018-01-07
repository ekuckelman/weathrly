import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast.js'

const tenDay = [
  {tenDayDay: 'Tuesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Wednesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Thursday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Friday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Saturday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Sunday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Monday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Tuesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Wednesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
  {tenDayDay: 'Thursday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10}
]

describe('TenDayForecast', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast tenDayData={tenDay}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })


  it('should display 10 cards', () => {
    expect(wrapper.find('Card').length).toEqual(10)
  })

  it('should display ', () => {
    wrapper = mount(<TenDayForecast tenDayData={tenDay} />)
    expect(wrapper.find('h3').first().text()).toEqual('Tuesday')
    expect(wrapper.find('img').first().prop('src')).toEqual('http://icons.wxug.com/i/c/k/snow.gif')
    expect(wrapper.find('p').first().text()).toEqual('24')
  })

})