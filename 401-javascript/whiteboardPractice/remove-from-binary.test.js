'use strict';

const removeNode = require('./remove-from-binary');
const { BinarySearchTree } = require('../Data-Structures/tree/tree');

const makeSearchTree = () => {
  const searchTree = new BinarySearchTree(46);
  searchTree.add(35);
  searchTree.add(68);
  searchTree.add(21);
  searchTree.add(40);
  searchTree.add(53)
  searchTree.add(75);
  searchTree.add(36);
  searchTree.add(64)
  return searchTree;
}
describe('remove node tests', () => {
  it('should fix the tree with a left node', () => {
    const tree = makeSearchTree();
    removeNode(tree, 35);
    expect(tree.contains(46)).toBe(true);
    expect(tree.contains(35)).toBe(false);
    expect(tree.contains(68)).toBe(true);
    expect(tree.contains(21)).toBe(true);
    expect(tree.contains(40)).toBe(true);
    expect(tree.contains(53)).toBe(true);
    expect(tree.contains(75)).toBe(true);
    expect(tree.contains(36)).toBe(true);
    expect(tree.contains(64)).toBe(true);
  });
  it('should remove a right node from the tree', () => {
    const tree = makeSearchTree();
    removeNode(tree, 68);
    expect(tree.contains(46)).toBe(true);
    expect(tree.contains(35)).toBe(true);
    expect(tree.contains(68)).toBe(false);
    expect(tree.contains(21)).toBe(true);
    expect(tree.contains(40)).toBe(true);
    expect(tree.contains(53)).toBe(true);
    expect(tree.contains(75)).toBe(true);
    expect(tree.contains(36)).toBe(true);
    expect(tree.contains(64)).toBe(true);
  });
  it('should remove the root from the tree', () => {
    const tree = makeSearchTree();
    removeNode(tree, 46);
    expect(tree.contains(46)).toBe(false);
    expect(tree.contains(35)).toBe(true);
    expect(tree.contains(68)).toBe(true);
    expect(tree.contains(21)).toBe(true);
    expect(tree.contains(40)).toBe(true);
    expect(tree.contains(53)).toBe(true);
    expect(tree.contains(75)).toBe(true);
    expect(tree.contains(36)).toBe(true);
    expect(tree.contains(64)).toBe(true);
  });
  it('should remove a leaf from the tree', () => {
    const tree = makeSearchTree();
    removeNode(tree, 21);
    expect(tree.contains(46)).toBe(true);
    expect(tree.contains(35)).toBe(true);
    expect(tree.contains(68)).toBe(true);
    expect(tree.contains(21)).toBe(false);
    expect(tree.contains(40)).toBe(true);
    expect(tree.contains(53)).toBe(true);
    expect(tree.contains(75)).toBe(true);
    expect(tree.contains(36)).toBe(true);
    expect(tree.contains(64)).toBe(true);
  });
  it('should throw an error if the value is not in the tree', () => {
    const tree = makeSearchTree();
    expect(()=> removeNode(tree, 1)).toThrowError()
  });

});
