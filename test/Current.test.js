import React from 'react';
import { mount, shallow } from 'enzyme';
import Current from '../lib/Current.js'

describe('Current', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Current />)
  })

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})