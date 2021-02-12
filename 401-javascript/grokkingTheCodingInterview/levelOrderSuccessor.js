const Deque = require('./collections/deque')

class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  let keyFound = false;
  let queue = new Deque([root]);
  while (queue.length) {
    const currentNode = queue.shift();
    if (keyFound) return currentNode;
    if (key === currentNode.val) keyFound = true;
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
let result = find_successor(root, 12)
if (result !== null)
  console.log(result.val)
result = find_successor(root, 9)
if (result !== null)
  console.log(result.val)
