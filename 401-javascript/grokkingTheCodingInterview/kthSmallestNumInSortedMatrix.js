const Heap = require('collections/heap')

const find_Kth_smallest = function(matrix, k) {
  let number = -1, count = 0;
  const len = matrix.length;
  const minHeap = new Heap([], null, ([a],[b]) => b - a)
  const usedPoints = new Set()

  minHeap.push([matrix[0][0], 0, 0])

  while(count < k) {
    let current = minHeap.pop()

    number = current[0];

    count++

    if (count === k) break;

    let [,y,x] = current;
    if (y + 1 < len && !usedPoints.has(JSON.stringify([y + 1, x]))) {
      minHeap.push([matrix[y + 1][x], y + 1, x])
      usedPoints.add(JSON.stringify([y + 1, x]))
    }
    if(x + 1 < len && !usedPoints.has(JSON.stringify([y, x + 1]))) {
      minHeap.push([matrix[y][x + 1], y, x + 1])
      usedPoints.add(JSON.stringify([y, x + 1]))
    }
  }
  return number;
};
// O(KlogL)
// O(n)

console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 7, 10], [5, 8, 11]], 5)}`)
