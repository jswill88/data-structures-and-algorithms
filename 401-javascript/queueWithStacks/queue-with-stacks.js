'use strict';

const Stack = require('../Data-Structures/stacksAndQueues/stacks-and-queues').stack;

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    if(value === 0) {
      value = '0';
    }
    while(this.stackOne.top) {
      this.stackTwo.push(this.stackOne.pop());
    }
    this.stackOne.push(value);
    let returnArr = [value];
    while(this.stackTwo.top) {
      returnArr.push(this.stackTwo.peek());
      this.stackOne.push(this.stackTwo.pop());
    }
    return returnArr;
  }
  dequeue() {
    if (!this.stackOne.top) {
      throw new RangeError('Cannot dequeue an empty queue');
    }
    return this.stackOne.pop();
  }
}

module.exports = PseudoQueue;
