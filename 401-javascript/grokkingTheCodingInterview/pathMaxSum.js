class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



const find_maximum_path_sum = function(root) {
  let maxSum = -Infinity;

  const traverse = node => {

    if (!node) return 0;

    let leftSum = traverse(node.left);
    let rightSum = traverse(node.right);

    const currentSum = leftSum + rightSum + node.value;

    maxSum = Math.max(maxSum, currentSum);
    const sideToAdd = Math.max(leftSum, rightSum)
    return sideToAdd > 0 ? sideToAdd + node.value : node.value;

  }

  return Math.max(traverse(root), maxSum);
};



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root = new TreeNode(-1)
root.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
