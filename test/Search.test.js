import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js'
import App from '../lib/App.js'


global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

describe('Search', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search getWeather={ () => {} } />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have an empty state to start', () => {
    expect(wrapper.state().display).toEqual('')
    expect(wrapper.state().suggestions).toEqual([])
  })

  it('should update state with a location', () => {
    expect(wrapper.state().display).toEqual('')

    wrapper.setState({ display: 'Denver, CO' })

    expect(wrapper.state().display).toEqual('Denver, CO');
  })

  it('should update state with suggestions', () => {
    expect(wrapper.state().suggestions).toEqual([])

    wrapper.setState({ suggestions: ['Denver, CO', 'Dayton, OH', 'Dallas, TX', 'Daytona Beach, FL', 'Douglas, AL'] })

    expect(wrapper.state().suggestions).toEqual(['Denver, CO', 'Dayton, OH', 'Dallas, TX', 'Daytona Beach, FL', 'Douglas, AL']);
  })

  it('should have label, input, datalist and button elements, but no options when display is empty', () => {
    expect(wrapper.find('label').length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('datalist').length).toEqual(1)
    expect(wrapper.find('option').length).toEqual(0)
  })

  it('should have label, input, datalist and button elements and 5 option elements when state has suggestions', () => {
    expect(wrapper.find('label').length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('datalist').length).toEqual(1)
    expect(wrapper.find('option').length).toEqual(0)

    wrapper.setState({ display: 'Denver, CO' })
    wrapper.setState({ suggestions: ['Denver, CO', 'Dayton, OH', 'Dallas, TX', 'Daytona Beach, FL', 'Douglas, AL'] })

    expect(wrapper.find('label').length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('datalist').length).toEqual(1)
    expect(wrapper.find('option').length).toEqual(5)
  })

  it('should set the state.display when user types in a city', () => {
    expect(wrapper.state().display).toEqual('')
    expect(wrapper.state().suggestions).toEqual([]) 

    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}})

    expect(wrapper.state().display).toEqual('Denver, CO')
    expect(wrapper.state().suggestions).toEqual([])
  })

  it('should set the display text into localStorage when button is clicked', () => {
    expect(wrapper.state().display).toEqual('')

    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}})
    wrapper.find('button').simulate('click');

    expect(wrapper.state().display).toEqual('Denver, CO')
    expect(JSON.parse(localStorage.location).display).toEqual('Denver, CO')

  })

  it('should set the suggestions array when an incomplete city is typed into the input field', () => {
    expect(wrapper.state().display).toEqual('')

    wrapper.find('input').simulate('change', {target: {value: 'Bou'}})
    wrapper.find('button').simulate('click');
    
    expect(wrapper.state().display).toEqual('Bou')
    expect(JSON.parse(localStorage.location).suggestions).toEqual(['boulder, co', 'bountiful, ut'])

  })
})