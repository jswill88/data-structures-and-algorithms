'use strict';

const { BinaryTree, Node } = require('./tree');

describe('Breadth First tests', () => {
  it('can output the correct array', () => {
    const tree = makeTree();
    expect(tree.breadthFirst()).toEqual([1,15,6,35,8]);
  })
  it('will throw an error on an empty tree', () => {
    const tree = new BinaryTree();
    expect(()=> tree.breadthFirst()).toThrowError();
  })
  it('Will work with a one Node tree', () => {
    const tree = new BinaryTree(new Node(3));
    expect(tree.breadthFirst()).toEqual([3]);
  })
})

const makeTree = () => {
  const one = new Node(1);
  const fifteen = new Node (15);
  const six = new Node(6);
  fifteen.right = new Node(35)
  six.left = new Node(8)
  one.left = fifteen;
  one.right = six;
  const tree = new BinaryTree(one);
  return tree;
}

