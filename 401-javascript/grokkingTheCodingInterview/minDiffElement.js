const search_min_diff_element = function(arr, key) {
  let minDiff = {
    diff: Infinity,
    num: -1,
  }

  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right)/2);
    const currNum = arr[mid];
    const currDiff = Math.abs(currNum - key)
    if (!currDiff) return currNum;
    if (currDiff < minDiff.diff) {
      minDiff.diff = currDiff;
      minDiff.num = currNum;
    }
    if(currNum < key) left = mid + 1;
    else right = mid - 1;
  }
  return minDiff.num;
};


console.log(search_min_diff_element([4, 6, 10], 7))
console.log(search_min_diff_element([4, 6, 10], 4))
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
console.log(search_min_diff_element([4, 6, 10], 17));
