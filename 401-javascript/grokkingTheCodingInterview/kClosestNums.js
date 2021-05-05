const Heap = require('./collections/heap');

const find_closest_elements = function(arr, K, X) {

  const result = []

  const diff = (num) => Math.abs(X - num)

  const minHeap = new Heap([], null, (a,b) => diff(b) - diff(a));

  let left = 0, right = arr.length - 1;
  while (left < right){ // O(logN)
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < X) left = mid + 1;
    else right = mid;
  }

  minHeap.push(arr[right])

  for(let i = 0; i < K - 1; i++) {// O(KLog(2K - 1))
    right++;
    left--;
    if(right < arr.length) minHeap.push(arr[right]);
    if(left >= 0) minHeap.push(arr[left])
  }

  while(result.length < K && minHeap.length) result.push(minHeap.pop()); // O(KLog(2K - 1))

  return result.sort();
};

// Time: O(logN + 2(KLog(2K - 1))) => O(logN + KlogK)
// Space: O(2K - 1) => O(K)

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)
