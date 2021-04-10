class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const find_unique_trees = function (n) {
  const makeTree = (min, max) => {
    if (max < min) return [null];
    const result = []
    for (let i = min; i <= max; i++) {
      const left = makeTree(min, i - 1);
      const right = makeTree(i + 1, max);
      for (let l = 0; l < left.length; l++) {
        for (let r = 0; r < right.length; r++) {
          const root = new TreeNode(i);
          root.left = left[l];
          root.right = right[r];
          result.push(root)
        }
      }
    }
    return result;
  }
  return makeTree(1, n)
};


console.log(`Total trees:`, find_unique_trees(2))
console.log(`Total trees:`, find_unique_trees(4));

