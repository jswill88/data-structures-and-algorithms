const Heap = require('./collections/heap');

// go forward k elements in array, and add each element to appropriate heap
// find the median and add it to the results array
// if k is even, get the average of both sides
// if k is odd, give number from the longer heap
// find the first element of the subsection by subtracting k from current idx
// delete that from whichever heap it is in
// go forward in the loop and add the next value to the correct heap

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  addToHeap(num) {
    this.minHeap.push(num)
    this.maxHeap.push(this.minHeap.pop());
    if (this.maxHeap.length - 1 > this.minHeap.length)
      this.minHeap.push(this.maxHeap.pop());
  }

  getMedian(k) {
    if (!(k % 2)) return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    return this.maxHeap.peek();
  }

  deleteFromHeap(num) {
    if(num <= this.maxHeap.peek()) this.maxHeap.delete(num);
    else this.minHeap.delete(num)
    if (this.maxHeap.length < this.minHeap.length) this.maxHeap.push(this.minHeap.pop());
    else if(this.minHeap.length + 1 < this.maxHeap.length) this.minHeap.push(this.maxHeap.pop())
  }

  find_sliding_window_median(nums, k) {
    const result = [];
    let i = 0
    let j = 0;
    while (i < k - 1) this.addToHeap(nums[i++]);
    for (; i < nums.length; i++) {
      this.addToHeap(nums[i]);
      result.push(this.getMedian(k));
      this.deleteFromHeap(nums[j++]);

    }
    return result;
  }
}


let result;
var slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, -1, 3, 5], 2)

console.log(`Sliding window medians are: ${result}`)

slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, -1, 3, 5], 3)
console.log(`Sliding window medians are: ${result}`)
