'use strict';

const swap = (arr, i, low) => [arr[i], arr[low]] = [arr[low], arr[i]];

const partition = (arr, left, right) => {
  let low = left;
  for (let i = left; i < right; i++) {
    if (arr[i] <= arr[right]) { swap(arr, i, low++) }
  }
  swap(arr, right, low);
  return low;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) { return; }
  let position = partition(arr, left, right)
  quickSort(arr, left, position - 1);
  quickSort(arr, position + 1, right);
}

module.exports = quickSort;
