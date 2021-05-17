const Heap = require('collections/heap')

const find_Kth_smallest = function(lists, k) {

  const minHeap = new Heap([], null, ([a],[b]) => b - a)

  for(let i = 0; i < lists.length; i++) { // O(mlogm)
    minHeap.push([lists[i][0], i, 0])
  }
  let count = 0;
  let num, arr, index;
  while(count < k) { // O(2klogm)
    [num, arr, index] = minHeap.pop()
    count++;
    if(lists[arr].length > index + 1 && count < k) {
      minHeap.push([lists[arr][index + 1], arr, index + 1])
    }
  }

  return num;
};

console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest([[5,8,9], [1, 7]], 3)}`)
