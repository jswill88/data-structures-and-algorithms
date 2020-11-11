
module.exports = function leastDisruptiveSubrange(arr1, arr2) {
  let smallestDifference;
  let smallestIndex;
  for (let i = 0; i < arr1.length - arr2.length + 1; i++) {
    let difference = 0;
    for (let j = 0; j < arr2.length; j++) {
      difference += Math.abs(arr1[i + j] - arr2[j]);
      if (smallestDifference && difference >= smallestDifference) {
        continue;
      }
    }
    if (smallestDifference === undefined || difference < smallestDifference) {
      smallestDifference = difference;
      smallestIndex = i;
    }
    if (smallestDifference === 0) { break; }
  }
  for (let k = 0; k < arr2.length; k++) {
    arr1[smallestIndex + k] = arr2[k];
  }
  return arr1;
}
