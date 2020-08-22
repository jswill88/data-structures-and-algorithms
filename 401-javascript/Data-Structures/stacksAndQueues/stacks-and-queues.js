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

class Queue {
  constructor(){
    this.front = null;
  }
  enqueue(value) {
    if(this.isEmpty()) {
      this.front = new Node(value);
      this.rear = this.front;
    } else {
      this.rear.next = new Node(value)
      this.rear = this.rear.next;
    }
  }
  dequeue() {
    if(this.isEmpty()) {
      throw new RangeError('Cannot dequeue an empty queue');
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }
  peek() {
    if (this.front) { return this.front.value; }
    throw new RangeError('Cannot peek an empty queue');
  }
  isEmpty() {
    return !this.front;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { stack: Stack, queue: Queue };
