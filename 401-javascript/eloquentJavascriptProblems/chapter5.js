const flatten = arr => {
  if (!Array.isArray(arr)) { return arr }

  return arr.reduce((acc, el) => {
    return acc.concat(flatten(el));
  }, []);

};
const twoLayerArray = [[2, 3, 4, [1, 2, ['x', 'y', 'z']]], ['n', 'd', 's', 'k', 'j'], ['s', 'd', 'l', 'f', 'j']];
console.log(flatten(twoLayerArray));


const loop = (value, testFunction, updateFunction, bodyFunction) => {
  if(!testFunction(value)) return;
  bodyFunction(value);
  const newValue = updateFunction(value);
  loop(newValue, testFunction, updateFunction, bodyFunction);
};

loop( 0, x => x < 10, y => y + 2, i => {
  console.log(i * 5)
})

const every = (arr, predicateFunction) => {
  // let isValid = true;
  // for( let val of arr) {
  //   if (!predicateFunction(val)) {
  //     isValid = false;
  //   }
  // }
  // return isValid;
  return !arr.some(val => !predicateFunction(val))
}
console.log('every', every([1,2,3], x => x > 0))
