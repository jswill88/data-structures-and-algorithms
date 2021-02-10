const Deque = require('./collections/deque')

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  const result = [];
  const queue = new Deque([root]);
  let levelNum = 0;
  while (queue.length) {
    const levelSize = queue.length;
    const level = new Deque();
    const action = levelNum % 2 ? 'unshift' : 'push';
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      level[action](node.value);
      if (node.left)
        queue.push(node.left);
      if (node.right)
        queue.push(node.right);
    }
    result.push(level.toArray())
    levelNum++;
  }
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)
