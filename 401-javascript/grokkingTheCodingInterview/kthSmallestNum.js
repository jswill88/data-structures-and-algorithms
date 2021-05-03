const Heap = require('collections/heap')

const find_Kth_smallest_number = function(nums, k) {
  // TODO: Write your code here
  if(k > nums.length) return 0;

  const heap = new Heap();
  for(let i = 0; i < k; i++) {
    heap.push(nums[i])
  }
  for (let n = k; n < nums.length; n++) {
    if(nums[n] < heap.peek()) {
      heap.push(nums[n]);
      heap.pop()
    }
  }

  return heap.pop();
};


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 5)}`)
