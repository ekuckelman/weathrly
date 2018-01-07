import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast.js'

describe.skip('TenDayForecast', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})