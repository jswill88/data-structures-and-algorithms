const find_range = function(arr, key) {
  const result = [-1, -1];
  let right = arr.length - 1,
    left = 0,
    found = false,
    mid;
  while(right >= left) {
    mid = Math.floor((left + right)/2);
    if (arr[mid] === key) {
      found = true;
      break;
    }
    if (arr[mid] > key) right = mid - 1;
    else left = mid + 1;
  }
  if (found) {
    let [i,j] = [mid,mid];
    while (i > 0 && arr[i-1] === key) i--;
    while (j + 1 < arr.length && arr[j+1] === key) j++;
    result[0] = i;
    result[1] = j
  }

  return result;
};


console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))
