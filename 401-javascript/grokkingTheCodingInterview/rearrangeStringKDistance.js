const Heap = require('collections/heap')
const Deque = require('collections/deque')

const reorganize_string = function (str, k) {
  const charFreqMap = {}
  for (let char of str) {
    if (!(char in charFreqMap)) charFreqMap[char] = 0;
    charFreqMap[char]++;
  }
  const maxHeap = new Heap([], null, ([a], [b]) => a - b);
  for (let key in charFreqMap) {
    maxHeap.push([charFreqMap[key], key])
  }

  const deque = new Deque();
  const result = []

  while (maxHeap.length) {

    const [num, char] = maxHeap.pop();

    result.push(char);

    deque.push([num - 1, char]);

    if (deque.length >= k) {
      const [nextNum, nextChar] = deque.shift();
      if(nextNum > 0) {
        maxHeap.push([nextNum, nextChar])
      }
    }

  }

  return result.length === str.length ? result.join('') : '';
};

console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`)
console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`)
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`)
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`)
