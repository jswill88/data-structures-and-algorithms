'use strict';

const Node = require('./tree').Node;
const BinaryTree = require('./tree').BinaryTree;
const BinarySearchTree = require('./tree').BinarySearchTree;

describe('Binary Tree tests', () => {
  it('instatiates a new binary tree', () => {
    const jazzTree = makeBinaryTree();
    expect(jazzTree).toBeDefined();
  })
  it('returns the expected array from preOrder()', () => {
    const jazzTree = makeBinaryTree();
    let arr = jazzTree.preOrder();
    expect(arr).toEqual(['miles','john','wes','ella','billie','count','duke']);
  })
  it('returns the expected array from inOrder()', () => {
    const jazzTree = makeBinaryTree();
    let arr = jazzTree.inOrder();
    expect(arr).toEqual(['wes','john','ella','miles','count','billie','duke']);
  })
  it('returns the expected array from postOrder()', () => {
    const jazzTree = makeBinaryTree();
    let arr = jazzTree.postOrder();
    expect(arr).toEqual(['wes','ella','john','count','duke','billie','miles']);
  })
  it('can instantiate a binary search tree', () => {
    const searchTree = new BinarySearchTree(30);
    expect(searchTree).toBeDefined();
    expect(searchTree.root.value).toBe(30);
  })
  it('can add one to a binary search tree', () => {
    const searchTree = new BinarySearchTree(30);
    searchTree.add(20);
    expect(searchTree.root.left.value).toBe(20);
  })
  it('can add two to a binary search tree', () => {
    const searchTree = new BinarySearchTree(30);
    searchTree.add(40);
    searchTree.add(20);
    expect(searchTree.root.left.value).toBe(20);
    expect(searchTree.root.right.value).toBe(40);
  })
  it('contains the right values', () => {
    const searchTree = makeSearchTree();
    expect(searchTree.contains(57)).toBe(true);
    expect(searchTree.contains(-1000)).toBe(true);
    expect(searchTree.contains(24)).toBe(false);
    expect(searchTree.contains(2000)).toBe(false);
  })

})



const makeBinaryTree = () => {
  const miles = new Node('miles');
  const john = new Node('john');
  const wes = new Node('wes');
  const ella = new Node('ella');
  const billie = new Node('billie');
  const duke = new Node('duke');
  const count = new Node('count');
  miles.left = john;
  miles.right = billie;
  john.left = wes;
  john.right = ella;
  billie.right = duke;
  billie.left = count;
  return new BinaryTree(miles);
}

const makeSearchTree = () => {
  const searchTree = new BinarySearchTree(30);
  searchTree.add(40);
  searchTree.add(20);
  searchTree.add(13);
  searchTree.add(57);
  searchTree.add(-1000);
  searchTree.add(44)
  return searchTree;
}
