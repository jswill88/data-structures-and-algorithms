const Deque = require('./collections/deque');

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log('Level order traversal using \'next\' pointer: ');
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current !== null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
}

// keep track of layers
// go through each layer, hold onto previous
//  set previous next to current
//  once done with layer, set prev next to null

const connect_level_order_siblings = function(root) {
  if(!root) return;
  const queue = new Deque([root]);
  while(queue.length) {
    const levelLength = queue.length;
    let prev = null;
    for(let i = 0; i < levelLength; i++) {
      const curr = queue.shift();
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right);
      if (prev) prev.next = curr;
      prev = curr;
    }
  }
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()
