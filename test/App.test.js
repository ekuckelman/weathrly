import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js'
import mockData from '../lib/mockData.js'

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


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  })


})

//  it('should render the Controls and TriviaList components', () => {
//     expect(wrapper.find('h1').length).toEqual(1)
//     expect(wrapper.find('Controls').length).toEqual(1)
//     expect(wrapper.find('TriviaList').length).toEqual(1)
//   })

//  it('should have a default of an empty state array triviaList', () => {
//   expect(wrapper.state().triviaList).toEqual([])
//  })

//  it('should update state', () => {
//   expect(wrapper.state().triviaList).toEqual([]);

//   wrapper.setState({ triviaList: mockData })

//   expect(wrapper.state().triviaList).toEqual(mockData.results);
//   expect(wrapper.state().triviaList.length).toEqual(10);
//  })

// })