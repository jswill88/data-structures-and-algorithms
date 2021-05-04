const Heap = require('collections/heap')

const find_k_frequent_numbers = function(nums, k) {
  const allNums = {};
  const heap = new Heap([], null, ([,a],[,b]) => b - a);
  for(let num of nums) {
    if(!(num in allNums)) allNums[num] = 0;
    allNums[num]++
  }
  let count = 0;
  for(let key in allNums) {
    if(count < k) {
      heap.push([key, allNums[key]])
      count++;
      continue;
    }
    if(allNums[key] > heap.peek()[1]) {
      heap.pop()
      heap.push([key, allNums[key]])
    }
  }
  return heap.toArray().map(([a]) => a);
};


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
