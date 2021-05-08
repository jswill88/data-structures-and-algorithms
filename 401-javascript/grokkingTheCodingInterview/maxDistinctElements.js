// put all into hash map with how many of each
// add to distinct num count for each val that only has one
// put the rest into a minHeap sorted by
// let count = k
// while minHeap.length and count > 0
//  minheap.pop
//  amountToRemove = Math.min(k, val - 1)
const Heap = require('collections/heap')

const find_maximum_distinct_elements = function(nums, k) {

  const amounts = {} // O(n) space
  for(let num of nums) { // O(n) time
    if(!(num in amounts)) amounts[num] = 0;
    amounts[num]++;
  }

  const minHeap = new Heap([], null, (a,b) => b - a)
  let numDistinct = 0;
  for(let amount in amounts) { // O(n) time
    if(amounts[amount] === 1) {
      numDistinct++;
      continue;
    }
    minHeap.push(amounts[amount]); // O(n/2)
  }

  let count = k;
  while(count > 0 && minHeap.length) { // O(k)
    let curr = minHeap.pop();
    const numToSubTract = Math.min(count, curr - 1);
    count -= numToSubTract;
    curr -= numToSubTract;
    if(curr === 1) numDistinct++;
  }

  return numDistinct - count;
};
// time: O(nlogn + klogn)
// space: O(n)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([3, 5, 12, 11, 12], 3)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)}`)

