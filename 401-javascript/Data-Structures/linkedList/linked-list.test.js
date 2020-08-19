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
  it('Will insert before something in the middle', () => {
    const linkedList = makeList();
    linkedList.insertBefore('The', 'All');
    expect(linkedList.includes('All')).toBe(true);
    expect(linkedList.head.next.next.value).toBe('All');
  })
  it('Will insert before something at the beginning', () => {
    const linkedList = makeList();
    linkedList.insertBefore('Show', 'Please');
    expect(linkedList.includes('Please')).toBe(true);
    expect(linkedList.head.value).toBe('Please');
  })
  it('Will insert after something in the middle', () => {
    const linkedList = makeList();
    linkedList.insertAfter('Me', 'All');
    expect(linkedList.includes('All')).toBe(true);
    expect(linkedList.head.next.next.value).toBe('All');
  })
  it('Will insert after something at the end', () => {
    const linkedList = makeList();
    linkedList.insertAfter('Money', '!');
    expect(linkedList.includes('!')).toBe(true);
    expect(linkedList.head.next.next.next.next.value).toBe('!');
  })
  it('Will append to the end of the list', () => {
    const linkedList = makeList();
    linkedList.append('!');
    expect(linkedList.includes('!')).toBe(true);
    expect(linkedList.head.next.next.next.next.value).toBe('!');
  })
  it('Will apend multiple items to the end of the list', () => {
    const linkedList = makeList();
    linkedList.append('!');
    linkedList.append(':)');
    expect(linkedList.includes('!')).toBe(true);
    expect(linkedList.includes(':)')).toBe(true);
    expect(linkedList.head.next.next.next.next.value).toBe('!');
    expect(linkedList.head.next.next.next.next.next.value).toBe(':)');
  })
});

describe('Linked List kth from the end', () => {
  it('throws an error when k is greater than list length', () => {
    const linkedList = makeList();
    expect(() => linkedList.kthFromEnd(5)).toThrowError('Value for k is too high');
  })
  it('works when k points to the first node', () => {
    const linkedList = makeList();
    expect(linkedList.kthFromEnd(3)).toBe('Show');
  })
  it('throws an error when k is negative', () => {
    const linkedList = makeList();
    expect(()=> linkedList.kthFromEnd(-3)).toThrowError('Value for k is too low');
  })
  it('works if the list is only one node long', () => {
    const linkedList = new LinkedList();
    linkedList.insert('only node');
    expect(linkedList.kthFromEnd(0)).toBe('only node');
  })
  it('works on the happy path', ()=> {
    const linkedList = makeList();
    expect(linkedList.kthFromEnd(2)).toBe('Me');
  })
})

const makeList = () => {
  const linkedList = new LinkedList();
  linkedList.insert('Money')
  linkedList.insert('The');
  linkedList.insert('Me');
  linkedList.insert('Show');
  return linkedList;
}
