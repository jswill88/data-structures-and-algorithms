'use strict';

class Graph {

  constructor() {
    this.adjacenyList = {};
    this.edges = {};
  }

  addNode(value) {
    let newNode = new Node(value);
    this.adjacenyList[value] = newNode;
    this.edges[value] = {}
    return newNode;
  }

  addEdge(node1, node2, weight = null) {
    if(!node1 || !node2) {
      throw Error('One or more nodes is empty');
    }
    this.edges[node1.value][node2.value] = { node: node2, weight };
    this.edges[node2.value][node1.value] = { node: node2, weight };
  }

  getNodes() {
    return Object.keys(this.adjacenyList).length
      ? this.adjacenyList
      : null;
  }

  getNeighbors(node) {
    return this.edges[node.value]
  }
  size() {
    return this.adjacenyList
      ? Object.entries(this.adjacenyList).length
      : null;
  }

}

class Node {
  constructor(value){
    this.value = value;
    this.neighbors = {};
  }
}


module.exports = Graph;
