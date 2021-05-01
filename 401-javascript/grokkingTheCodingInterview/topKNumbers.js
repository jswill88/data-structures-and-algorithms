const Heap = require('collections/heap')



const find_k_largest_numbers = function(nums, k) {
  const heap = new Heap ([], null, (a, b) => b - a)
  for(let i = 0; i < nums.length; i++) {
    if(heap.length < k) {
      heap.push(nums[i]);
      continue;
    }
    if(nums[i] > heap.peek()) {
      heap.push(nums[i])
      heap.pop();
    }
  }
  return heap.toArray();
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)







