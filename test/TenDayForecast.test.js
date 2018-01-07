import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast.js'

describe('TenDayForecast', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast />)
  })

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})