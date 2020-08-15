'use strict';

class DoublyLinked {
  constructor () {
    this.head = null,
    this.tail = null,
    this.count = 0
  }
  prepend (value) {
    const newNode = new Node(value);
    if (this.head) { this.head.previous = newNode; }
    newNode.next = this.head;
    newNode.previous = null;
    this.head = newNode;
    if (!this.count) { this.tail = newNode }
    this.count++;
  }
  append (value) {
    const newNode = new Node(value);
    if (this.tail) { this.tail.next = newNode; }
    newNode.previous = this.tail;
    newNode.next = null;
    this.tail = newNode;
    if (!this.count) { this.head = newNode }
    this.count++;
  }
}
class Node {
  constructor(value) {
    this.value = value;
  }
}

module.exports = DoublyLinked;
