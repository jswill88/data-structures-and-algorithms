'use strict';

const shift = require('./array-shift')

describe ('test shift function', () => {
  // Expected Outcomes
  it('Should work with even number array', () => {
    expect(shift([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
  })
  it('Should work with odd number array', () => {
    expect(shift([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  })
  // Failure case
  it('Failure example', () => {
    expect(shift([3,4,5],10)).not.toStrictEqual([3,4,5,10]);
  })
  // Edge case
  it('Should work with empty array', () => {
    expect(shift([], 1)).toStrictEqual([1]);
  })
})

