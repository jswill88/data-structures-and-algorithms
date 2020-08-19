const LinkedList = require('../Data-Structures/linkedList/linked-list');
const zipList = require('./ll-zip');

describe('Zip List', () => {
  it('will zip two lists of the same length', () => {
    const linkedList2 = makeList();
    const linkedList = makeList2();
    expect(zipList(linkedList2, linkedList).toString()).toBe(
      '{ Show } -> { 3 } -> { Me } -> { 2 } -> { The } -> { 1 } -> { Money } -> { 0 } -> NULL'
    );
  });

  it('will zip when the first list is longer', () => {
    const linkedList2 = makeList();
    linkedList2.append('!');
    linkedList2.append('$$$');
    const linkedList = makeList2();
    expect(zipList(linkedList2, linkedList).toString()).toBe(
      '{ Show } -> { 3 } -> { Me } -> { 2 } -> { The } -> { 1 } -> { Money } -> { 0 } -> { ! } -> { $$$ } -> NULL'
    );
  });
  it('will zip when the second list is longer', () => {
    const linkedList2 = makeList();
    const linkedList = makeList2();
    linkedList.append('-1');
    linkedList.append('-2');
    expect(zipList(linkedList2, linkedList).toString()).toBe(
      '{ Show } -> { 3 } -> { Me } -> { 2 } -> { The } -> { 1 } -> { Money } -> { 0 } -> { -1 } -> { -2 } -> NULL'
    );
  });
})

const makeList = () => {
  const linkedList = new LinkedList();
  linkedList.insert('Money')
  linkedList.insert('The');
  linkedList.insert('Me');
  linkedList.insert('Show');
  return linkedList;
};
const makeList2 = () => {
  const linkedList = new LinkedList();
  linkedList.insert('0')
  linkedList.insert('1');
  linkedList.insert('2');
  linkedList.insert('3');
  return linkedList;
};
