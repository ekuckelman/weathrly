import React from 'react';
import { mount, shallow } from 'enzyme';
import HourlyForecast from '../lib/HourlyForecast.js'

describe.skip('HourlyForecast', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyForecast />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})