class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// go through sequence array, keep track of index
// if value !== sequence [i] return false
// if

const find_path = function(root, sequence) {
  if (!root || !sequence) return false
  if (!sequence.length) return true;
  const _traverse = (node, i) => {
    if (!node || i >= sequence.length || node.value !== sequence[i]) return false;
    if (!node.left && !node.right) return i === sequence.length - 1;
    return _traverse(node.left, i + 1) || _traverse(node.right, i + 1);
  }
  return _traverse(root, 0)
};
//     1
//  0      1
// 1     6   5
// [1,1,6]

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1])}`)
