'use strict';

class Graph {

  constructor() {
    this.adjacenyList = new Set();
    this.edges = [];
  }

  addNode(value) {
    let newNode = new Node(value);
    this.adjacenyList.add(newNode);
    // this.neighbors[value] = {}
    return newNode;
  }

  addEdge(node1, node2, weight = null) {
    if(!node1 || !node2) {
      throw Error('One or more nodes is empty');
    }
    node1.addEdge(node2, weight);
    node2.addEdge(node1, weight);
    const edge = new Edge(node1, node2, weight);
    const reverseEdge = new Edge(node2, node1, weight);
    this.edges.push(edge);
    this.edges.push(reverseEdge);

  }

  getNodes() {
    return this.adjacenyList.size
      ? this.adjacenyList
      : null;
  }
  getEdges() {
    return this.edges.length
      ? this.edges
      : null;
  }

  size() {
    return this.adjacenyList.size
      ? this.adjacenyList.size
      : null;
  }

}

class Node {
  constructor(value){
    this.value = value;
    this.neighbors = new Set();
  }
  addEdge(node){
    this.neighbors.add(node);
  }
  getNeighbors() {
    return this.neighbors;
  }

}

class Edge {
  constructor(node1, node2, weight) {
    this.node1 = node1;
    this.node2 = node2;
    this.weight = weight;
  }

}

module.exports = Graph;
