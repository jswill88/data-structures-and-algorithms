'use struct';

const { BinaryTree, Node } = require('../Data-Structures/tree/tree');
const treeIntersection = require('./tree-intersection')

describe('tree tests', () => {
  it ('can return the right values', () => {
    expect(treeIntersection(makeBinaryTree(), makeSecondBinaryTree())).toEqual([100,160, 350, 200])
  });
  it ('will throw an error with no matches', () => {
    expect(() => treeIntersection(makeBinaryTree(), makeThirdBinaryTree())).toThrowError();
  });
  it ('can return only one matching value', () => {
    expect(treeIntersection(makeThirdBinaryTree(), makeSecondBinaryTree())).toEqual([42])
  });
})





const makeBinaryTree = () => {
  const one = new Node(150);
  const two = new Node(100);
  const thee = new Node(250);
  const four = new Node(75);
  const five = new Node(160);
  const six = new Node(200);
  const seven = new Node(350);
  one.left = two;
  one.right = five;
  two.left = thee;
  two.right = four;
  five.right = six;
  five.left = seven;
  return new BinaryTree(one);
}
const makeSecondBinaryTree = () => {
  const one = new Node(42);
  const two = new Node(100);
  const thee = new Node(600);
  const four = new Node(15);
  const five = new Node(160);
  const six = new Node(200);
  const seven = new Node(350);
  one.left = two;
  one.right = five;
  two.left = thee;
  two.right = four;
  five.right = six;
  five.left = seven;
  return new BinaryTree(one);
}
const makeThirdBinaryTree = () => {
  const one = new Node(42);
  const two = new Node(24);
  const thee = new Node(1);
  const four = new Node(2);
  const five = new Node(3);
  const six = new Node(4);
  const seven = new Node(5);
  one.left = two;
  one.right = five;
  two.left = thee;
  two.right = four;
  five.right = six;
  five.left = seven;
  return new BinaryTree(one);
}



