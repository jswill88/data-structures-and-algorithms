class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class TreeDiameter {

  constructor() {
    this.treeDiameter = 0;
  }

  find_diameter(root) {
    let maxDiameter = -1;

    const traverse = node => {
      if(!node) return 0;

      const leftTotal =  traverse(node.left);
      const rightTotal = traverse(node.right);

      maxDiameter = Math.max(maxDiameter, leftTotal + rightTotal + 1);

      return Math.max(leftTotal, rightTotal) + 1;
    }
    traverse(root)

    this.treeDiameter = maxDiameter;
    return this.treeDiameter;
  }
}


var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
