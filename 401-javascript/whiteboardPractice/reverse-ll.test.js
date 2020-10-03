'use strict';

const reverseLL = require('./reverse-ll');
const LinkedList = require('../Data-Structures/linkedList/linked-list')


const makeList = () => {
  const linkedList = new LinkedList();
  linkedList.insert('Money')
  linkedList.insert('The');
  linkedList.insert('Me');
  linkedList.insert('Show');
  return linkedList;
}
describe('Reverse lined list tests', () => {
  it('should ge the correct new head', () => {
    const ll = makeList();
    let reverse = reverseLL(ll);
    expect(reverse.head.value).toBe('Money');
  });
  it('should work with only two nodes', () => {
    const ll = new LinkedList();
    ll.insert('B');
    ll.insert('A');
    expect(ll.head.value).toBe('A');
    let reverse = reverseLL(ll);
    expect(reverse.head.value).toBe('B');
  });
  it('should work with only one node', () => {
    const ll = new LinkedList();
    ll.insert('A');
    expect(ll.head.value).toBe('A');
    let reverse = reverseLL(ll);
    expect(reverse.head.value).toBe('A');
  });

});
