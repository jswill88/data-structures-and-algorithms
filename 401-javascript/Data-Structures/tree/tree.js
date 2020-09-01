'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    let arr = [];
    function _preOrder(root) {
      if (!root) { return; }
      arr.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);
    }
    _preOrder(this.root);
    return arr;
  }
  inOrder(root = this.root, arr = []) {
    if (!root) { return }
    this.inOrder(root.left, arr);
    arr.push(root.value);
    this.inOrder(root.right, arr)
    return arr;
  }
  postOrder(root = this.root, arr = []) {
    if (!root) { return }
    this.postOrder(root.left, arr);
    this.postOrder(root.right, arr);
    arr.push(root.value);
    return arr;
  }
  findMaximumValue() {
    if (!this.root) {
      throw Error('Cannot find value in an empty tree');
    }
    let maxValue = this.root.value;
    function _maxValue(root) {
      if (!root) {
        return;
      }
      if (root.value > maxValue) {
        maxValue = root.value;
      }
      if (root.left) { _maxValue(root.left); }
      if (root.right) { _maxValue(root.right); }
    }
    _maxValue(this.root);
    return maxValue;
  }
}

class BinarySearchTree extends BinaryTree {

  constructor(rootValue) {
    super();
    this.root = new Node(rootValue)
  }

  add(value) {
    function _add(root) {
      if (value === root.value) { return; }
      value < root.value ? makeNewOrGoOn('left') :
        makeNewOrGoOn('right');
      function makeNewOrGoOn(side) {
        if (!root[side]) {
          root[side] = new Node(value);
          return;
        }
        _add(root[side]);
      }
    }
    _add(this.root);
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) { return true; }
      current = current.value > value ? current.left : current.right;
    }
    return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };

