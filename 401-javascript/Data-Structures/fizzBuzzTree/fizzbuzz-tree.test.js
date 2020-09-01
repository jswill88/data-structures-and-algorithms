'use strict';

const fizzBuzzTree = require('./fizzbuzz-tree')
const { BinaryTree, Node } = require('../tree/tree');

describe('FizzBuzz Tree tests', () => {
  it('can change a tree of one', () => {
    const tree = new BinaryTree(new Node(5));
    fizzBuzzTree(tree);
    expect(tree.root.value).toBe('Buzz');
  })
  it('can change a full tree', () => {
    const tree = makeTree();
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['FizzBuzz','1','Fizz']);
  })
  it('will throw a proper error', () => {
    const tree = new BinaryTree();
    expect(()=>fizzBuzzTree(tree)).toThrowError();
  })
});


const makeTree = () => {
  const one = new Node(1);
  const fifteen = new Node (15);
  const six = new Node(6);
  one.left = fifteen;
  one.right = six;
  const tree = new BinaryTree(one);
  return tree;
}
