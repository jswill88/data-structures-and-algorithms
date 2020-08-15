'use strict';

const LinkedList = require('./linked-list');

describe('Linked List tests', () => {
  it('Can instantiate an empty linked list', () => {
    const emptyList = new LinkedList();
    expect(emptyList).toBeInstanceOf(LinkedList);
    expect(emptyList.head).toBe(null);
  })

  it('Inserts a new node at the beginning', () => {
    const linkedList = new LinkedList();
    linkedList.insert('new head');
    expect(linkedList.head.value).toBe('new head');
  })

  it('Will properly point to first node with head property', () => {
    const linkedList = makeList();
    expect(linkedList.head.value).toBe('Show');
  })

  it('Can insert multiple nodes into the list', () => {
    const linkedList = makeList();
    expect(linkedList.head.next.next.value).toBe('The');
  })

  it('Will return true searching for a value that exists', () => {
    const linkedList = makeList();
    expect(linkedList.includes('Show')).toBe(true);
    expect(linkedList.includes('Money')).toBe(true);
    expect(linkedList.includes('The')).toBe(true);
  })

  it('Will return false searching for a value that does not exist', () => {
    const linkedList = makeList();
    expect(linkedList.includes('Jerry')).toBe(false);
  })

  it('Will return collection as a string', () => {
    const linkedList = makeList();
    expect(linkedList.toString()).toBe('{ Show } -> { Me } -> { The } -> { Money } -> NULL');
  })
});

const makeList = () => {
  const linkedList = new LinkedList();
  linkedList.insert('Money')
  linkedList.insert('The');
  linkedList.insert('Me');
  linkedList.insert('Show');
  return linkedList;
}
