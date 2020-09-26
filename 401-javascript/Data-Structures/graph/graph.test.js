'use strict';

const Graph = require('./graph');

describe('graph test suite', () => {
  it('can successfully add a node to the graph', () =>{
    const graph = new Graph();
    graph.addNode('one');
    expect(graph.getNodes().one).toBeTruthy();
  });
  it('can successfully add an edge to the graph', () => {
    const graph = new Graph();
    let one = graph.addNode('one');
    let two = graph.addNode('two');
    graph.addEdge(one, two, 5);
    expect(graph.getNeighbors(one).two.node.value).toBe('two');
  });
  it('can return all nodes from the graph', () => {
    const graph = new Graph();
    graph.addNode('one');
    graph.addNode('two');
    expect(graph.getNodes().two.value).toBe('two');
  });
  it('can get all neighbors', () => {
    const graph = new Graph();
    let one = graph.addNode('one');
    let two = graph.addNode('two');
    let three = graph.addNode('three');
    graph.addEdge(one, two, 5);
    graph.addEdge(one, three, 6);
    const oneNeighbors = graph.getNeighbors(one);
    expect(Object.keys(oneNeighbors).length).toBe(2);
  });
  it ('can return the weight between neighbors', () => {
    const graph = new Graph();
    let one = graph.addNode('one');
    let two = graph.addNode('two');
    graph.addEdge(one, two, 5);
    expect(graph.getNeighbors(one).two.weight).toBe(5);
  });
  it('can return the correct size of the graph', () => {
    const graph = new Graph();
    graph.addNode('one');
    graph.addNode('two');
    graph.addNode('three');
    expect(graph.size()).toBe(3);
  });
  it('can return a graph with only one node', () => {
    const graph = new Graph();
    graph.addNode('one');
    expect(graph.getNodes().one.value).toBe('one');
  });
  it('returns null for a graph with no nodes', () => {
    const graph = new Graph();
    expect(graph.getNodes()).toBe(null);
  });
})

