// https://www.educative.io/blog/data-structure-heaps-guide?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=blog-dynamic&gclid=CjwKCAiArbv_BRA8EiwAYGs23C88aCU2dzQ6Y6Ftif3aOxmFXi5HeHCFumAY9RGIRkparmpE5C_C-RoCuqgQAvD_BwE

class Heap {
  constructor(rootValue) {
    this.heap = [null, rootValue];
  }
  maxHeapify() {

  }
  _percolateUp(idx) {
    if (idx <= 1) return;
    const parent = Math.floor(idx/2);
    if(this.heap[idx] > this.heap[parent]) {
      [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]]
      this._percolateUp(parent);
    } else return;
  }
  _heapify(idx) {
    const value = this.heap[idx];
    const left = this.heap[idx * 2] || null;
    const right = this.heap[idx * 2 + 1] || null;
    if(left && left > right) {
      if (value < left) {
        [this.heap[idx], this.heap[idx * 2]] = [this.heap[idx * 2], this.heap[idx]]
        this._heapify(idx * 2)
      }
    } else if (right && value < right) {
      [this.heap[idx], this.heap[idx * 2 + 1]] = [this.heap[idx * 2 + 1], this.heap[idx]]
      this._heapify(idx * 2 + 1)
    }

  }
  insert(value) {
    this.heap.push(value);
    this._percolateUp(this.heap.length - 1)
  }
  getMax() {
    return this.heap[1]
  }
  removeMax() {
    const max = this.getMax();
    this.heap[1] = this.heap.pop();
    this._heapify(1);
    return max;
  }
}

let heap = new Heap(7);

heap.insert(5)
heap.insert(8)
heap.insert(3)
heap.insert(6)
console.log(heap);
heap.removeMax()
console.log(heap);
heap.insert(2)
heap.insert(4)
heap.insert(9)
console.log(heap)
heap.removeMax()
console.log(heap);
heap.removeMax()
console.log(heap);
