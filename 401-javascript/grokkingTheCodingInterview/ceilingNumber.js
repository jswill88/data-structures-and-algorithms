const search_ceiling_of_a_number = function (arr, key) {
  if (key > arr[arr.length - 1]) return -1;
  let min = 0, max = arr.length - 1;
  while (max >= min) {
    const mid = Math.floor((max + min) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] > key) {
      max = mid - 1;
      continue;
    }
    min = mid + 1;
  }
  return min;
};


console.log(search_ceiling_of_a_number([4, 6, 10], 6))
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
console.log(search_ceiling_of_a_number([4, 6, 10], 17))
console.log(search_ceiling_of_a_number([4, 6, 10], -1))
