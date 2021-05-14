const Heap = require('collections/heap')
const Deque = require('collections/deque')

const schedule_tasks = function (tasks, k) {
  let intervalCount = 0;

  const freqMap = {}
  for (let task of tasks) {
    if (!(task in freqMap)) freqMap[task] = 0;
    freqMap[task]++
  }

  const maxHeap = new Heap([], null, ([a], [b]) => a - b)
  for (let task in freqMap) {
    maxHeap.push([freqMap[task], task])
  }

  const queue = new Deque(new Array(k).fill(null));
  let tasksInQueue = 0;

  while (maxHeap.length || tasksInQueue) {
    if (maxHeap.length) {
      const [num, currTask] = maxHeap.pop();
      if (!(num - 1)) queue.push(null)
      else {
        queue.push([num - 1, currTask])
        tasksInQueue++
      }
    }
    const fromQueue = queue.shift()
    if(fromQueue) {
      maxHeap.push(fromQueue)
      tasksInQueue--;
    }
    intervalCount++

  }


  return intervalCount;
};


console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'a', 'a', 'b', 'c', 'c'], 2)}`)
console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'b', 'a'], 3)}`)
