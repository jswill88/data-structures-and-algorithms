const mergeTwoArrays = require('./mergeTwoArrays');

describe('merge two arrays tests', () => {
  it('works with the sample input', () => {
    const A = [1,4,24,78];
    const B = [2,5,99]
    mergeTwoArrays(A,B)
    expect(A).toEqual([1,2,4,5,24,78,99]);
  })
  it('works with one empty array', () => {
    const A = [];
    const B = [2,5,99]
    mergeTwoArrays(A,B)
    expect(A).toEqual([2,5,99]);
  })

  it('works with duplicates between arrasy', () => {
    const A = [1,4,5,24,78,99];
    const B = [2,5,99]
    mergeTwoArrays(A,B)
    expect(A).toEqual([1,2,4,5,5,24,78,99,99]);
  })
});
