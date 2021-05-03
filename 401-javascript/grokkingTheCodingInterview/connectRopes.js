const Heap = require('collections/heap')

const minimum_cost_to_connect_ropes = function(ropeLengths) {
  const heap = new Heap(ropeLengths, null, (a,b) => b - a); // nlogn
  let cost = 0;
  while (heap.length > 1) {
    const combined = heap.pop() + heap.pop();
    cost += combined;
    heap.push(combined);
  }
  return cost;
};

// O(nlogn + nlogn)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)

