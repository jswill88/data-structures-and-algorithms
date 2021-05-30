// Minrange: 3
// max: 12

// minHeap:  8, 10,  12

const Heap = require('collections/heap')

const find_smallest_range = function(lists) {
  const minHeap = new Heap([], null, ([a],[b]) => b - a);
  let maxInHeap = -Infinity;
  for(let i = 0; i < lists.length; i++){ // O(llogl)
    minHeap.push([lists[i][0], lists[i], 0])
    maxInHeap = Math.max(lists[i][0], maxInHeap)
  }

  let minRange = [minHeap.peek()[0], maxInHeap];

  while(minHeap.length) { // O(n)
    const [, arr, idx] = minHeap.pop(); // O(logl)
    if(arr[idx + 1]) {
      minHeap.push([arr[idx + 1], arr, idx + 1]); // O(logl)
      maxInHeap = Math.max(arr[idx + 1], maxInHeap)
      const minInHeap = minHeap.peek()[0]
      const currRange = maxInHeap - minInHeap;
      if(currRange < (minRange[1] - minRange[0])) {
        minRange[0] = minInHeap;
        minRange[1] = maxInHeap
      }
    } else {
      break;
    }
  }
  // Time: O(llogl + n2logl) => O(nlogl);
  // Space: O(l)


  return minRange;
};


console.log(`Smallest range is: ${find_smallest_range([[1, 5, 8], [4, 12], [7, 8, 10]])}`)
console.log(`Smallest range is: ${find_smallest_range([[1, 9], [4, 12], [7, 10, 16]])}`)
