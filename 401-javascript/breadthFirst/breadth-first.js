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

// alternate with adjacency matrix

// graph: [
//   [0,1,1,1,0],
//   [0,0,1,0,0],
//   [1,1,0,0,0],
//   [0,0,0,1,0],
//   [0,1,0,0,0]
// ]
// root: 1
// nodesLen = {0: Infinity, 1: 0, 2: 1, 3: Infinity, 4: Infinity }
// queue: [2]
// current: 1
// curConnected: [0,0,1,0,0]
// neighborIdx: [2]
// idx: -1
// j: 0


function bfs(graph, root) {
  const nodesLen = {};

  for(let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  nodesLen[root] = 0;

  const queue = [root];
  let current;

  while(queue.length) {
    current = queue.shift();
    let curConnected = graph[current];
    const neighborIdx = [];
    let idx = curConnected.indexOf(1);
    while (idx !== -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1)
    }
    for(let j = 0; j < neighborIdx.length; j++) {
      if(nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

const exBFSGraph = [
  [0,1,1,1,0],
  [0,0,1,0,0],
  [1,1,0,0,0],
  [0,0,0,1,0],
  [0,1,0,0,0]
];

console.log(bfs(exBFSGraph, 1));
