'use strict';

const binarySearch = require('./array-binary-search');

describe('test binary search function', () => {
  it('should work with an even number array', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toBe(2);
  })
  it('should work with an odd number array', () => {
    expect(binarySearch([2, 5, 7, 13, 36, 78, 91], 78)).toBe(5);
  })
  it('should work when the number is higher than the array', () => {
    expect(binarySearch([1,2,3,4,5], 6)).toBe(-1);
  })
  it('should work when the number lower than the array', () => {
    expect(binarySearch([2,3,4,5], 1)).toBe(-1);
  })
  it('should work when the number is the last number', () => {
    expect(binarySearch([2, 5, 7, 13, 36, 78], 78)).toBe(5);
  })
  it('should work when the number is the first number', () => {
    expect(binarySearch([2, 5, 7, 13, 36, 78], 2)).toBe(0);
  })
  it('should work when the number is not in the array', () => {
    expect(binarySearch([2, 5, 7, 13, 36, 78, 99, 191], 80)).toBe(-1);
  })
});
