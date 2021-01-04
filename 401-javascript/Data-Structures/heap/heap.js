// https://www.educative.io/blog/data-structure-heaps-guide?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=blog-dynamic&gclid=CjwKCAiArbv_BRA8EiwAYGs23C88aCU2dzQ6Y6Ftif3aOxmFXi5HeHCFumAY9RGIRkparmpE5C_C-RoCuqgQAvD_BwE

class Heap {
  constructor(rootValue = null) {
    this.heap = [null, rootValue];
    this.size = rootValue ? 1 : 0;
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
    const left = idx * 2 > this.size ? null : this.heap[idx * 2]
    const right = idx * 2 + 1 > this.size ? null : this.heap[idx * 2 + 1];
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
    this.size++;
    if (this.heap[1] === null) {
      this.heap[1] = value;
    } else {
      this.heap.push(value);
      this._percolateUp(this.heap.length - 1)
    }
  }
  getMax() {
    return this.heap[1]
  }
  removeMax() {
    const max = this.getMax();
    this.heap[1] = this.heap.pop();
    this.size--;
    this._heapify(1);
    return max;
  }
  static fromArray(arr) {
    const arrHeap = new Heap ()
    for (let value of arr) {
      arrHeap.insert(value);
    }
    return arrHeap;
  }
  static sort(arr) {
    const arrHeap = this.fromArray(arr);
    for (let i = 0; i < arr.length; i++) {
      arr[arr.length - 1 - i ] = arrHeap.removeMax()
    }
    return arr;
  }
}


module.exports = Heap;

