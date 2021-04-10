class TreeNode {

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


const count_trees = function (n) {

  const makeTrees = (min, max) => {
    if(max <= min) return [null];
    const trees = []
    for (let i = min; i <= max; i++) {
      const left = makeTrees(min, i - 1);
      const right = makeTrees(i + 1, max);
      for(let l = 0; l < left.length; l++) {
        for (let r = 0; r < right.length; r++) {
          trees.push(new TreeNode(i, left[l], right[r]))
        }
      }
    }
    return trees;
  }
  return n < 1 ? -1 : makeTrees(1, n).length
};


console.log(`Total trees: ${count_trees(2)}`)
console.log(`Total trees: ${count_trees(3)}`)
console.log(`Total trees: ${count_trees(-11)}`);
