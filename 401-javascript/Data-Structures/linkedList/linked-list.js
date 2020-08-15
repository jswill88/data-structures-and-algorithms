'use strict';

class LinkedList {
  constructor () {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === value) { return true }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let nodeString = '';
    while(currentNode) {
      nodeString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return nodeString + 'NULL';
  }
}

class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
