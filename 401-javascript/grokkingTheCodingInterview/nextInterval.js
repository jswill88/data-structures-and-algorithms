const Heap = require('collections/heap');

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

// [[3,4], [1,5], [4,6]]

// put all into a startMinHeap sorted by start, add index => [[1], 1] [[3], 0] [[4], 2]
// make endMinHeap sorted by end => [[4], 0], [[5], 1], [[6], 2]
// while(endMinheap.length)
//   while startMinHeap.length && startMinHeap.peek < endMinHeap.peek => startMinheap.pop()
//   result[endMinHeap.pop()[1]] = startMinHeap.length ? startMinHeap.peek()[1] : -1;
// return result

const find_next_interval = function(intervals) {
  const result = new Array(intervals.length);
  const startMinHeap = new Heap([], null, (a,b) => b[0] - a[0]);
  const endMinHeap = new Heap([], null, (a,b) => b[0] - a[0]);

  for(let i = 0; i < intervals.length; i++) {
    startMinHeap.push([intervals[i].start, i]);
    endMinHeap.push([intervals[i].end, i]);
  }
  while (endMinHeap.length) {
    const [endVal, endIdx] = endMinHeap.pop();
    while (startMinHeap.length && startMinHeap.peek()[0] < endVal) startMinHeap.pop();
    result[endIdx] = startMinHeap.length ? startMinHeap.peek()[1] : -1;
  }
  return result;
};


let result = find_next_interval(
  [new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)])
console.log(`Next interval indices are: ${result}`)


result = find_next_interval(
  [new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)])
console.log(`Next interval indices are: ${result}`);
