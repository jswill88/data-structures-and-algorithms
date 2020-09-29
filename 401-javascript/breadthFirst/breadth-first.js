'use strict';

const Queue = require('../Data-Structures/stacksAndQueues/stacks-and-queues').queue;

module.exports = (node) => {
  const nodes = [];
  const breadth = new Queue;
  const visited = new Set();
  breadth.enqueue(node);
  visited.add(node)

  const _checkAndEnqueue = (node) => {
    if(!visited.has(node)) {
      visited.add(node);
      breadth.enqueue(node)
    }
  }

  while(!breadth.isEmpty()) {
    let front = breadth.dequeue();
    nodes.push(front);
    front.getNeighbors().forEach(_checkAndEnqueue)
  }
  return nodes;
}
