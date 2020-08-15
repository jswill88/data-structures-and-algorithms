'use strict';

let DoublyLinked = require('./doubly-linked-list');

describe('Doubly Linked List Tests', () => {
  it('Can create a new list', () => {
    const newList = new DoublyLinked();
    newList.prepend('Node 1');
    expect(newList.head.value).toBe('Node 1');
  });
  it('Can insert multiple nodes into the list', () => {
    const linkedList = makeList();
    expect(linkedList.head.next.next.value).toBe('The');
    expect(linkedList.head.next.next.previous.value).toBe('Me');
  })
  it('Counts correctly', () => {
    const doublyLinked = makeList();
    expect(doublyLinked.count).toBe(4);
  })
  it('Keeps track of the tail when prepending', () => {
    const doublyLinked = makeList();
    expect(doublyLinked.tail.value).toBe('Money');
  })
  it('Can start at the tail', () => {
    const doublyLinked = new DoublyLinked();
    doublyLinked.append('Node 1');
    expect(doublyLinked.head.value).toBe('Node 1');
    expect(doublyLinked.tail.value).toBe('Node 1');
  })
  it('Can append a node', () => {
    const doublyLinked = makeList();
    doublyLinked.append('!');
    console.log(doublyLinked);
    expect(doublyLinked.tail.value).toBe('!');
    expect(doublyLinked.count).toBe(5);
  })

})

const makeList = () => {
  const linkedList = new DoublyLinked();
  linkedList.prepend('Money')
  linkedList.prepend('The');
  linkedList.prepend('Me');
  linkedList.prepend('Show');
  return linkedList;
}

