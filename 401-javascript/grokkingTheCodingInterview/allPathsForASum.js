class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const find_paths = function (root, sum) {
  const allPaths = [];
  const _traverse = (node, path, newSum) => {

    if (!node) return;

    path.push(node.value)

    if (!node.left && !node.right) {
      if ((newSum === node.value)) allPaths.push([...path]);
    }
    else
      for (let side of ['left', 'right']) {
        _traverse(node[side], path, newSum - node.value)
      }

    path.pop()
  }

  _traverse(root, [], sum);

  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
let sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
