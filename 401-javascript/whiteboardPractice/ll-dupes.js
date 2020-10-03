'use strict';

module.exports = ll => {
  const visited = new Set();
  const duplicates = new Set();
  const output = []
  function _traverse(node) {
    if (!node) { return; }
    if (!visited.has(node.value)) {
      visited.add(node.value);
    } else if (!duplicates.has(node.value)) {
      duplicates.add(node.value);
      output.push(node.value);
    }
    _traverse(node.next);
    return;
  }
  _traverse(ll.head);
  return output;
}

