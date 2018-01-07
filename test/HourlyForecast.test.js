import React from 'react';
import { mount, shallow } from 'enzyme';
import HourlyForecast from '../lib/HourlyForecast.js'

describe('HourlyForecast', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyForecast />)
  })

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})