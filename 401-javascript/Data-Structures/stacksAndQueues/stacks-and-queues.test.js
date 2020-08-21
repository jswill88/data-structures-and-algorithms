'use strict';

const Stack = require('./stacks-and-queues');

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
const bigStack = () => {
  const stack = new Stack();
  stack.push('Fun fun fun');
  stack.push('Surfin\' USA');
  stack.push('God Only Knows');
  stack.push('Good Vibrations');
  return stack;
}