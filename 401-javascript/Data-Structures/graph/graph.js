'use strict';

class Graph {

  constructor() {
    this.adjacenyList = {};
    this.neighbors = {};
  }

  addNode(value) {
    let newNode = new Node(value);
    this.adjacenyList[value] = newNode;
    this.neighbors[value] = {}
    return newNode;
  }

  addEdge(node1, node2, weight = null) {
    if(!node1 || !node2) {
      throw Error('One or more nodes is empty');
    }
    this.neighbors[node1.value][node2.value] = { node: node2, weight };
    this.neighbors[node2.value][node1.value] = { node: node2, weight };
  }

  getNodes() {
    return Object.keys(this.adjacenyList).length
      ? this.adjacenyList
      : null;
  }

  getNeighbors(node) {
    return this.neighbors[node.value]
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
