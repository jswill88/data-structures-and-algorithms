const flatten = arr => {
  if (!Array.isArray(arr)) { return arr }

  return arr.reduce((acc, el) => {
    return acc.concat(flatten(el));
  }, []);

};
const twoLayerArray = [[2, 3, 4, [1, 2,[ 'x', 'y', 'z']]], ['n', 'd', 's', 'k', 'j'], ['s', 'd', 'l', 'f', 'j']];
console.log(flatten(twoLayerArray));

