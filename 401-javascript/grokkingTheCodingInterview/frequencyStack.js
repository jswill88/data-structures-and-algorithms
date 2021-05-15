const Heap = require('collections/heap')

class FrequencyStack {

  constructor() {
    this.stack = new Heap([], null, (a, b) => {
      if(a.count === b.count) return a.sequenceNum - b.sequenceNum
      return a.count - b.count
    })
    this.freqMap = {}
    this.sequenceNum = 0
  }

  push(num) {
    this.sequenceNum++
    if (!(num in this.freqMap)) {
      this.freqMap[num] = { num, count: 1 };
      this.stack.push({ num, count: 1, sequenceNum: this.sequenceNum })
    } else {
      this.freqMap[num].count++;
      this.stack.push({num, count: this.freqMap[num].count, sequenceNum: this.sequenceNum})
    }
    return 0;
  }

  pop() {
    const { num, count } = this.stack.pop();
    if (count > 1) {
      this.freqMap[num].count--;
    } else {
      delete this.freqMap[num]
    }
    return num;
  }
}


var frequencyStack = new FrequencyStack()
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(3)
frequencyStack.push(2)
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(5)
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())
