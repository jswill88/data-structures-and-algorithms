const Hashtable = require('../Data-Structures/hashtable/hashtable')


module.exports = (binaryTree1, binaryTree2) => {

  const treeHash = new Hashtable();


  function _traverseFirstTree(root) {

    if (root === null) { return; }

    treeHash.add(root.value.toString(), root.value)

    _traverseFirstTree(root.left);
    _traverseFirstTree(root.right);
  }
  _traverseFirstTree(binaryTree1.root);


  const resultsArray = [];

  function _traverseSecondTree(root) {
    if (root === null) { return; }
    if (treeHash.contains(root.value.toString())) {
      if (!resultsArray.includes(root.value)) {
        resultsArray.push(root.value)
      }
    }
    _traverseSecondTree(root.left)
    _traverseSecondTree(root.right)
  }

  _traverseSecondTree(binaryTree2.root)
  if (resultsArray.length) { return resultsArray }

  throw Error('No shared values');
}
