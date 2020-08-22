'use strict';

const Stack = require('./stacks-and-queues').stack;
const Queue = require('./stacks-and-queues').queue;

describe('Stack Tests', () => {
  it('Can instatiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  })
  it('Can check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  })
  it('Can peek the top value', () => {
    const stack = new Stack();
    stack.push('Fun fun fun');
    stack.push('Surfin\' USA')
    expect(stack.peek()).toBe('Surfin\' USA');
  })
  it('Can push an item to the stack', () => {
    const stack = new Stack();
    stack.push('Fun fun fun');
    expect(stack.isEmpty()).toBeFalsy();
  });
  it('Can push multiple items to a stack', () => {
    const stack = bigStack();
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toBe('Good Vibrations');
  })
  it('Can pop an item from the stack', () => {
    const stack = bigStack();
    let popped = stack.pop();
    expect(popped).toBe('Good Vibrations');
    expect(stack.peek()).toBe('God Only Knows');
  })
  it('Can empty a stack by popping multiple items', () => {
    const stack = bigStack();
    for(let i = 0; i < 4; i++) {stack.pop()}
    expect(stack.isEmpty()).toBeTruthy();
  })
  it('Can throw an error when popping from an empty stack', ()=> {
    const stack = new Stack();
    expect(()=>stack.pop()).toThrowError('Cannot pop from an empty stack');
  })
  it('Can throw an error when peeking from an empty stack', ()=> {
    const stack = new Stack();
    expect(()=>stack.peek()).toThrowError('Cannot peek an empty stack');
  })
});

describe('Queue Tests', () => {
  it('Can instantiate an empty Queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  })
  it('Can enqueue a new value', () => {
    const queue = new Queue();
    queue.enqueue('Paranoid Android');
    expect(queue.isEmpty()).toBeFalsy();
  })
  it('Can peek a value', () => {
    const queue = new Queue();
    queue.enqueue('Paranoid Android');
    expect(queue.peek()).toBe('Paranoid Android');
  })

  it('Can enqueue many values', () => {
    const queue = bigQueue();
    expect(queue.peek()).toBe('Paranoid Android');
  })

  it('Can throw an error when peeking an empty queue', () => {
    const queue = new Queue();
    expect(()=> queue.peek()).toThrowError('Cannot peek an empty queue');
  })
  it('Can dequeue the front value', () => {
    const queue = new Queue();
    queue.enqueue('Paranoid Android');
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  })
  it('Can dequeue the correct value', () => {
    const queue = bigQueue();
    let blizzard = queue.dequeue();
    expect(blizzard).toBe('Paranoid Android')
  })
  it('Can throw an error when dequeueing an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue')
  })
  it('Can empty a queue after several dequeues', () => {
    const queue = bigQueue();
    for(let i = 0; i < 4; i++) { queue.dequeue(); }
    expect(queue.isEmpty()).toBeTruthy();
  })

})

const bigStack = () => {
  const stack = new Stack();
  stack.push('Fun fun fun');
  stack.push('Surfin\' USA');
  stack.push('God Only Knows');
  stack.push('Good Vibrations');
  return stack;
};
const bigQueue = () => {
  const queue = new Queue();
  queue.enqueue('Paranoid Android');
  queue.enqueue('15 Step');
  queue.enqueue('Videotape');
  queue.enqueue('Creep');
  return queue;
}
