const leastDisruptiveSubrange = require('./leastDisruptiveSubrange');

describe('least disruptive tests', () => {
  it('can handle the sample input', () => {
    expect(leastDisruptiveSubrange([1,5,4,9,12,6,-1], [5,7,10])).toEqual([1,5,7,10,12,6,-1])
  });
});
