import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js'
import Welcome from '../lib/Welcome.js'

describe('Welcome', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the Welcome component if localStorage returns null', () => {
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find('Search').length).toEqual(1)
  })

})