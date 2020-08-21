'use strict';

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }
  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    }
    throw new RangeError('Cannot pop from an empty stack');
  }
  peek() {
    if (this.top) { return this.top.value; }
    throw new RangeError('Cannot peek an empty stack');
  }
  isEmpty() {
    return !this.top;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Stack;
