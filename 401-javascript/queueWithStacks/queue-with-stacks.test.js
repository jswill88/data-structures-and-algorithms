'use strict';
const PseudoQueue = require('./queue-with-stacks');

describe('Queue Tests', () => {
  it('Can instantiate an empty Queue', () => {
    const queue = new PseudoQueue();
    expect(queue).toBeDefined();
  })
  it('Can enqueue a new value', () => {
    const queue = new PseudoQueue();
    let eqd = queue.enqueue('Paranoid Android');
    expect(eqd[0]).toBe('Paranoid Android');
  })
  it('Can enqueue many values', () => {
    const queue = bigQueue();
    let eqd = queue.enqueue('Everything')
    console.log(eqd);
    expect(eqd[0]).toBe('Everything');
  })

  it('Can dequeue the front value', () => {
    const queue = new PseudoQueue();
    queue.enqueue('Hot Dog');
    let dqd = queue.dequeue();
    expect(dqd).toBe('Hot Dog');
  })
  it('Can dequeue the correct value', () => {
    const queue = bigQueue();
    let blizzard = queue.dequeue();
    expect(blizzard).toBe('Paranoid Android')
  })
  it('Can throw an error when dequeueing an empty queue', () => {
    const queue = new PseudoQueue();
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue')
  })
  it('Can empty a queue after several dequeues', () => {
    const queue = bigQueue();
    for(let i = 0; i < 4; i++) { queue.dequeue(); }
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue')
  })

})

const bigQueue = () => {
  const queue = new PseudoQueue();
  queue.enqueue('Paranoid Android');
  queue.enqueue('15 Step');
  queue.enqueue('Videotape');
  queue.enqueue('Creep');
  return queue;
}
