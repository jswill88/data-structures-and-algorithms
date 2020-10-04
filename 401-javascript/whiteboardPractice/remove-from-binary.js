'use strict';

module.exports = (tree, removeValue) => {
  function _traverse(root) {
    if (!root.value) {
      throw Error('value not in tree');
    }
    if (root.value === removeValue) {
      return true;
    }
    root.value > removeValue
      ? _replacement(root, 'left')
      : _replacement(root, 'right');
    return false;
  }
  function _replacement(root, leftRight) {
    if (_traverse(root[leftRight])) {
      if (!root[leftRight].left) {
        root[leftRight] = root[leftRight].right;
      } else {
        let temp = root[leftRight].right;
        root[leftRight] = root[leftRight].left;
        let current = root[leftRight];
        while (current.right) {
          current = current.right;
        }
        current.right = temp;
        return;
      }
    }
  }
  _traverse(tree.root) && _replacement(tree, 'root');

  return tree;
}
