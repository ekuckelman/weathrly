import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js'

describe('Search', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })


})