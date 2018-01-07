// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import Card from '../lib/Card.js'

// const hourly = [
//   {hourlyTime: '1:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
//   {hourlyTime: '2:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
//   {hourlyTime: '3:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
//   {hourlyTime: '4:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
//   {hourlyTime: '5:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
//   {hourlyTime: '6:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'},
//   {hourlyTime: '7:00 PM', hourlyTemp: 32, hourlyImg: 'http://icons.wxug.com/i/c/k/snow.gif'}
// ]


// const tenDay = [
//   {tenDayDay: 'Tuesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Wednesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Thursday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Friday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Saturday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Sunday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Monday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Tuesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Wednesday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10},
//   {tenDayDay: 'Thursday', tenImg: 'http://icons.wxug.com/i/c/k/snow.gif', tenHigh: 24, tenLow: 10}
// ]

// describe('Card', () => {

//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<Card key='0' tenDayData={tenDay[0]} />)
//     wrapper = shallow(<Card key='0' hourly={hourly[0]} />)
//   })

//   it('should exist', () => {
//     expect(wrapper).toBeDefined();
//   })

// })