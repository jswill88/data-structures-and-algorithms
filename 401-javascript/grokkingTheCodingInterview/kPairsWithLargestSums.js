const Heap = require('collections/heap')

const sum = arr => arr[0] + arr[1]

const find_k_largest_pairs = function(nums1, nums2, k) {

  const minHeap = new Heap([], null, (a,b) => sum(b) - sum(a))

  for(let i = 0; i < nums1.length; i++) {
    const curr1 = nums1[i];
    let j = 0;
    for(; j < nums2.length; j++) {
      const currNums = [curr1, nums2[j]]
      if(minHeap.length < k || (sum(minHeap.peek()) < sum(currNums))) {
        if(minHeap.length === k) minHeap.pop();
        minHeap.push(currNums)
        continue;
      }
      break;
    }
    if(!j) break;
  }
  return minHeap.toArray();
};

// O(k(k + 1)/2 log(k)) => O(k^2logk)

console.log(`Pairs with largest sum are: ${find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3)}`)
