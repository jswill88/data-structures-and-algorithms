'use strict';

const swap = (arr, i, low) => [arr[i],arr[low]] = [arr[low],arr[i]];

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let low = left - 1;
  for(let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i , low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right ) { return; }
  let position = partition(arr, left, right)
  quickSort(arr, left, position - 1);
  quickSort(arr, position + 1, right);
  return;
}

module.exports = quickSort;
