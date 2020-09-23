'use strict';

function fizzBuzzTree(tree) {
  if(!tree.root) { throw Error('Can\'t FizzBuzz an empty tree'); }
  function _preOrderFizz(root) {
    if (!root) { return; }
    let num = root.value;
    root.value = '';
    if (!(num % 3)) {root.value += 'Fizz'}
    if (!(num % 5)) {root.value += 'Buzz'}
    if (!root.value) {root.value += num.toString()}
    _preOrderFizz(root.left);
    _preOrderFizz(root.right);
  }
  _preOrderFizz(tree.root);
}

module.exports = fizzBuzzTree;
