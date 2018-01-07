import React from 'react';
import { mount, shallow } from 'enzyme';
import Current from '../lib/Current.js'

const current = { 
      currentCity: 'Denver, CO', 
      currentCondition: 'always sunny in Denver',
      currentDay: 'Tuesday',
      currentTemp: 72,
      currentDayHigh: 75, 
      currentDayLow: 70, 
      currentDaySummary: 'You guys are the best',
      currentWeatherImg: 'http://icons.wxug.com/i/c/k/sunny.gif'
    }

describe('Current', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Current 
      currentCity={ current.currentCity }
      currentCondition={ current.currentCondition }
      currentDay={ current.currentDay }
      currentTemp={ current.currentTemp }
      currentDayHigh={ current.currentDayHigh }
      currentDayLow={ current.currentDayLow }
      currentDaySummary={ current.currentDaySummary }
      currentWeatherImg={ current.currentWeatherImg }
      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should display the right info', () => {
    expect(wrapper.find('p').first().text()).toEqual('For Tuesday')
    expect(wrapper.find('h3').first().text()).toEqual("It's always sunny in Denver")
    expect(wrapper.find('img').first().prop('src')).toEqual('http://icons.wxug.com/i/c/k/sunny.gif')
    expect(wrapper.find('h4').first().text()).toEqual('with a high of 75')
  })
})