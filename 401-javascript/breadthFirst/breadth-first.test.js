'use strict';

const breadthFirst = require('./breadth-first')
const Graph = require('../Data-Structures/graph/graph')


it('can traverse a single node graph', () => {
  const graph = new Graph();
  const one = graph.addNode('one');

  expect(breadthFirst(one).length).toBe(1);
})

it('can traverse a graph of three', () => {
  const graph = new Graph();
  let one = graph.addNode('one');
  let two = graph.addNode('two');
  let three = graph.addNode('three');
  graph.addEdge(one, two, 5);
  graph.addEdge(one, three, 6);
  expect(breadthFirst(three).length).toBe(3);
  expect(breadthFirst(two)[0].value).toBe('two');
})

it('can pass the test input test', () => {
  const graph = new Graph();
  let a = graph.addNode('a');
  let b = graph.addNode('b');
  let c = graph.addNode('c');
  let d = graph.addNode('d');
  let e = graph.addNode('e');
  let f = graph.addNode('f');
  let g = graph.addNode('g');
  let h = graph.addNode('h');
  graph.addEdge(a, b);
  graph.addEdge(a, c);
  graph.addEdge(b, c);
  graph.addEdge(b, g);
  graph.addEdge(d, c);
  graph.addEdge(c, f);
  graph.addEdge(g, f);
  graph.addEdge(c, e);
  graph.addEdge(h, d);
  graph.addEdge(h, e);
  expect(breadthFirst(a).length).toBe(8);
  expect(breadthFirst(a)[7]).toBe(h);
})
