class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  if(!root) return [];
  const result = [];
  const queue = [];
  queue.push({node: root, level: 0})
  while(queue.length){
    const nodeObj = queue.shift()
    const { node, level } = nodeObj;
    if(!result[level]) {
      result[level] = [];
    }
    result[level].push(node.value);
    if(node.left) queue.push({node: node.left, level: level + 1});
    if(node.right) queue.push({node: node.right, level: level + 1})
  }
  console.log(result)
  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
