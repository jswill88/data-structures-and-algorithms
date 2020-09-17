'use strict';

const sort = require('./merge-sort');

describe('sort function works', () => {

  it('can sort the test array', () => {
    const arr = [8,4,23,42,16,15];
    sort(arr);
    expect(arr).toEqual([4,8,15,16,23,42]);
    expect(arr).not.toEqual([4,8,16,15,23,42]);
  })

  it('can sort a reverse sorted array', () => {
    const arr = [20,18,12,8,5,-2];
    sort(arr);
    expect(arr).toEqual([-2,5,8,12,18,20]);
    expect(arr).not.toEqual([2,5,8,12,18,20]);
  });

  it('can sort an array with many repeated values', () => {
    const arr = [5,12,7,5,5,7];
    sort(arr);
    expect(arr).toEqual([5,5,5,7,7,12]);
    expect(arr).not.toEqual([5,5,7,7,12]);
  });

  it('can sort a nearly sorted array', () => {
    const arr = [2,3,5,7,13,11];
    sort(arr);
    expect(arr).toEqual([2,3,5,7,11,13]);
    expect(arr).not.toEqual([2,3,5,7,13,11]);
  })
});

