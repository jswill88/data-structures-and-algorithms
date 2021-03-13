const Heap = require('collections/heap');

class MedianOfAStream {
  constructor() {
    this.top = new Heap([], null, (a, b) => b - a)
    this.bottom = new Heap([], null, (a, b) => a - b)
    this.length = 0;
  }

  insert_num(num) {
    this.top.push(num)
    if (this.length) this.bottom.push(this.top.pop());
    if (this.length && !(this.length % 2)) this.top.push(this.bottom.pop())
    this.length++;
    return -1;
  }

  find_median() {
    if (!this.length) return;
    if (!(this.length % 2)) return (this.top.peek() + this.bottom.peek())/2;
    else return this.top.peek();
  }
}

var medianOfAStream = new MedianOfAStream()
medianOfAStream.insert_num(3)
medianOfAStream.insert_num(1)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(5)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(4)
console.log(`The median is: ${medianOfAStream.find_median()}`)
