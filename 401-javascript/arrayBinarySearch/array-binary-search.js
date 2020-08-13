'use strict';

const binarySearch = (arr, value) => {
  let middleIndex = Math.floor((arr.length - 1)/2);
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while(arr[middleIndex] !== value) {
    if (arr[middleIndex] > value) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex - firstIndex)/2) + firstIndex;
    if (firstIndex > lastIndex) {
      return -1;
    }
  }
  return middleIndex;
};

module.exports = binarySearch;
