'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) { return true }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let nodeString = '';
    while (currentNode) {
      nodeString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return nodeString + 'NULL';
  }

  append(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value, null);
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal, null);
    let currentNode = this.head;
    if (currentNode.value === value) {
      this.head = newNode;
      newNode.next = currentNode;
    }
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }
  insertAfter(value, newVal) {
    let newNode = new Node(newVal, null);
    let currentNode = this.head;
    if (currentNode.value === value) {
      this.head = newNode;
      newNode.next = currentNode;
    }
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
