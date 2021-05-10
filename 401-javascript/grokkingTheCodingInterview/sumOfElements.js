const Heap = require('collections/heap')

const find_sum_of_elements = function(nums, k1, k2) {
  const maxHeap = new Heap();
  for(let i = 0; i < k2 - 1; i++){
    maxHeap.push(nums[i])
  }
  for(let j = k2 - 1; j < nums.length; j++) {
    if(nums[j] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[j])
    }
  }
  // O(nlogk2 + (k2 - k1)logk2)
  // Time: O(nlogk2)
  // Space: O(k2)
  let sum = 0;
  while(maxHeap.length > k1) {
    sum += maxHeap.pop()
  }
  return sum;
};


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`)
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)
